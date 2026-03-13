# SyncArabia Video Compression Script
# Compresses SyncArabiaVid.mp4 in-place for web use (replaces the original).
# Requires ffmpeg to be installed: winget install Gyan.FFmpeg
#
# Usage: .\compress-video.ps1

$videoDir  = "public/LOGO SYNCARABIA"
$inputPath = "$videoDir/SyncArabiaVid.mp4"
$tempPath  = "$videoDir/SyncArabiaVid-compressed.mp4"

# Check if ffmpeg is available
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
    Write-Host "ERROR: ffmpeg is not installed or not in PATH." -ForegroundColor Red
    Write-Host "Install it with: winget install Gyan.FFmpeg" -ForegroundColor Yellow
    exit 1
}

if (-not (Test-Path $inputPath)) {
    Write-Host "ERROR: Input file not found at $inputPath" -ForegroundColor Red
    exit 1
}

$sizeBefore = [math]::Round((Get-Item $inputPath).Length / 1MB, 1)
Write-Host "Input:  $inputPath ($sizeBefore MB)" -ForegroundColor Cyan
Write-Host "Compressing... this may take a few minutes." -ForegroundColor Yellow

# CRF 24 = high quality with significant size reduction
# -preset slow = better compression at cost of encoding time
# -vf scale=-2:720 = downscale to 720p (keeps aspect ratio)
# -c:a aac -b:a 96k = compress audio to 96kbps
# -movflags +faststart = moves moov atom to front for web streaming
ffmpeg -y -i $inputPath `
    -c:v libx264 -crf 24 -preset slow `
    "-vf" "scale=-2:720" `
    -c:a aac -b:a 96k `
    -movflags +faststart `
    $tempPath

if ($LASTEXITCODE -eq 0 -and (Test-Path $tempPath)) {
    $sizeAfter = [math]::Round((Get-Item $tempPath).Length / 1MB, 1)
    $reduction = [math]::Round((1 - $sizeAfter / $sizeBefore) * 100, 1)

    Remove-Item $inputPath -Force
    Rename-Item $tempPath $inputPath

    Write-Host ""
    Write-Host "Done! Video replaced in-place." -ForegroundColor Green
    Write-Host "Before: $sizeBefore MB  After: $sizeAfter MB  ($reduction% smaller)" -ForegroundColor Cyan

    if ($sizeAfter -gt 100) {
        Write-Host "WARNING: Still over 100 MB. Edit -crf to 28 or higher and re-run." -ForegroundColor Yellow
    } elseif ($sizeAfter -gt 50) {
        Write-Host "NOTE: Between 50-100 MB. GitHub will warn but still accept it." -ForegroundColor Yellow
    } else {
        Write-Host "Under 50 MB - safe to commit to GitHub." -ForegroundColor Green
    }
} else {
    if (Test-Path $tempPath) { Remove-Item $tempPath -Force }
    Write-Host "ERROR: Compression failed. Check ffmpeg output above." -ForegroundColor Red
    exit 1
}
