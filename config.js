const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'ASTRO=JiYDiILA#Ogmf7-LuH8nYT3S4zG3HpNXEgY6ys6YC-Yu-QGjVkTA' : process.env.SESSION_ID
};
