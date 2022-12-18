
const { Telegraf } = require('telegraf')
const fs = require('fs')

// console.log("Bot ok");

const bot = new Telegraf("5934543877:AAEnYEpLKF6wd5KAJXHT7uHZYcCF85y2zaY");

bot.start((ctx) => {
    console.log("Bot started");
    let message = ` Please use the /categories to select category`
    ctx.reply(message)
})

bot.command('categories', async (ctx) => {
    try {
        ctx.reply("Available Categories are : Western, Indian");
        ctx.reply("Use /western for western music \n Use /indian for indian music ");
        
       
    } catch (error) {
        console.log('error', error)
        ctx.reply('error sending image')
    }
})

bot.command('western', async (ctx) => {
    try {
        await ctx.replyWithVideo({
            source: fs.createReadStream('./src/music/western.mp3')
        });
    } catch (error) {
        console.log('error', error)
        ctx.reply('error sending image')
    }
})


bot.command('indian', async (ctx) => {
    try {
        await ctx.replyWithVideo({
            source: fs.createReadStream('./src/music/western2.mp3')
        });
    } catch (error) {
        console.log('error', error)
        ctx.reply('error sending image')
    }
})





bot.launch()