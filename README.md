# webpage_login

Perform login to a webpage (or captive portal) from terminal

Uses puppeteer to open a chromium browser, navigate to the login page and fill the form with the provided credentials.

Can run in headless mode (no browser window is opened).

## Configuration

nodejs and npm are required. Install them with:

```bash
sudo apt update
sudo apt install -y nodejs npm
```

Install puppeteer with:

```bash
npm install puppeteer
```

## Usage

```bash
./login.sh
```

If some libraries for chromium are missing, install them with:

```bash
sudo apt update
sudo apt install -y gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget libgbm1
