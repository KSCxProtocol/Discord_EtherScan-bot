const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

// ... other code

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const TOKEN = 'MTE5NjE4MjU5OTc5ODg5ODc2OA.GYZlVP.XOXdzK9MI297BUIAakH9_v7abfX-OIp3O1lDuI';
const etherscanApiKey = 'BA9EG8R137IBQC19ER1YGRIRUGCIRCJVSB';

// Command to fetch recent Ethereum transactions
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`);
});

bot.on('messageCreate', async (message) => {
    if (message.content.startsWith('!getTransactions')) {
        try { 
            const commandArgs = message.content.split(' ');
            const address = commandArgs[1];
            console.log(address);
            const apiEndpoint = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&sort=desc&apikey=${etherscanApiKey}`;
            console.log(apiEndpoint);
            const response = await axios.get(apiEndpoint);

            // Check if the response contains transactions as an array
            if (Array.isArray(response.data.result)) {
                const transactions = response.data.result.slice(0, 5);

                transactions.forEach((transaction) => {
                    message.channel.send(`Transaction Hash: ${transaction.hash}\n` +
                                         `From: ${transaction.from}\n` +
                                         `To: ${transaction.to}\n` +
                                         `Value: ${parseInt(transaction.value)/(10**18)} Ether\n` +
                                         `Timestamp: ${transaction.timeStamp}\n\n`);
                });
            } else {
                message.channel.send('No transactions found for the given address.');
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            message.channel.send('Error fetching transactions. Please try again later.');
        }
    }
});

bot.login(TOKEN);