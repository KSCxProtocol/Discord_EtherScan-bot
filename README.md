## Discord Ethereum Transactions Bot

This Discord bot allows you to fetch recent Ethereum transactions for a specified address using the Etherscan API. The bot is built using Discord.js and Axios.

##Getting Started

- Prerequisites

 *Node.js installed on your machine
 *Discord bot token (create a bot on the Discord Developer Portal)
 *Etherscan API key (register on Etherscan for an API key)
 
-Installation

Install dependencies:

npm install
Update the configuration:

Open bot.js and replace the following placeholders with your own values:

YOUR_DISCORD_BOT_TOKEN with your Discord bot token
YOUR_ETHERSCAN_API_KEY with your Etherscan API key
const TOKEN = 'YOUR_DISCORD_BOT_TOKEN';
const etherscanApiKey = 'YOUR_ETHERSCAN_API_KEY';
Usage

Run the bot:

node bot.js
Invite the bot to your Discord server.

In your Discord server, use the command !getTransactions <ETH_ADDRESS> to fetch recent Ethereum transactions for the specified address.

Example

!getTransactions 0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520
Contributing

Feel free to open issues or contribute to the project. Pull requests are welcome!
