@echo off
setlocal

rem Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

rem Install dependencies if node_modules is missing
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install --legacy-peer-deps
    if %errorlevel% neq 0 (
        echo Error: npm install failed.
        pause
        exit /b 1
    )
)

rem Start the dev server
echo Starting development server...
call npm run dev
