# Discord Anti-Suspicious-Links Bot

This Discord bot is designed to enhance server security by automatically removing suspicious invitation links, blocking scam links using the stop-discord-phishing library, detecting and blocking rapid link submissions, and featuring a honeypot channel system.

## Features

### 1. Removal of Suspicious Invitation Links
The bot monitors messages for suspicious invitation links and removes them automatically.

### 2. Blocking of Scam Links
It utilizes the stop-discord-phishing library to block known scam links, ensuring greater security for server users.

### 3. Detection and Blocking of Rapid Link Submissions
The bot identifies unusually fast link submissions and blocks them to prevent potential attacks or spam.

### 4. Honeypot Channel System
It includes a honeypot channel system to attract potential malicious users, enabling faster and more efficient threat identification.

## Configuration

1. Clone the repository: `git clone https://github.com/ZUROS-NETWORK/anti-phishing-bot.git`
2. Install dependencies: `npm install`
3. Configure the settings file (`config.js`) with your detection settings.
4. Rename `example.env` to `.env` file and configure it with your bot token, as well as the necessary channel and role IDs
6. Build the bot for production: npm run build (Run the bot in development mode: npm run dev)
7. Start the bot in production mode: npm start 

## Contributions

If you encounter any issues or have suggestions to improve the bot, feel free to open an issue or submit a pull request!

## License 

This project is licensed under the MIT License
