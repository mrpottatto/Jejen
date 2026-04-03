const { Telegraf } = require('telegraf');

const BOT_TOKEN = '8630025408:AAHLznMCAB-s8Cl8IQzgZc99NtDlt6RP63U';
const bot = new Telegraf(BOT_TOKEN);

bot.command('start', async (ctx) => {
    try {
        const photoUrl = 'https://horrorzone.ru/uploads/_announcements/46573/mini/original-750-300.jpg';
        const caption = 'хочешь увидеть лютую запрещенку? Мясо,расчлененка,порно с мясом,вскрытием детей и животных,скоро я скину тебе ссылку если ты конечно не зассал';
        
        // Отправляем фото с текстом как подпись
        await ctx.replyWithPhoto(photoUrl, {
            caption: caption
        });
        
    } catch (error) {
        console.error('Ошибка:', error);
        await ctx.reply('Произошла ошибка при отправке.');
    }
});

bot.launch();
