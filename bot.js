const { Telegraf } = require('telegraf');

const BOT_TOKEN = '8444435475:AAFgMTVrIz0a79s8NkxZJfEC47siY2YiZL8';
const bot = new Telegraf(BOT_TOKEN);

bot.command('aaa', async (ctx) => {
    try {
        const photoUrl = 'https://horrorzone.ru/uploads/_announcements/46573/mini/original-750-300.jpg';
        const caption = 'хочешь увидеть лютую запрещенку? Мясо,расчлененка,порно с мясом,вскртием детей и животных,заходи https://t.me/+dmq65BUGB_U5Yzdi ,скоро там начнётся веселие';
        
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
