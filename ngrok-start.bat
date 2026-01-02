@echo off
REM ===================================================
REM Script ini otomatis jalankan Vite + ngrok untuk publik
REM ===================================================

echo Memulai Vite dev server...
start cmd /k "npm run dev"

REM Tunggu 5 detik supaya Vite siap
timeout /t 5 /nobreak > nul

echo Memulai ngrok untuk port 5173...
start cmd /k "ngrok http 5173"

echo Selesai! Vite jalan dan ngrok siap.
pause
