@echo off
echo ==============================================
echo Deploying Online Vision Test to Cloudflare Pages...
echo ==============================================
cd /d "%~dp0"
call npm run deploy
pause
