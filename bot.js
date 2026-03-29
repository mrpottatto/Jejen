const { Telegraf } = require('telegraf');

const BOT_TOKEN = '8444435475:AAFgMTVrIz0a79s8NkxZJfEC47siY2YiZL8';
const bot = new Telegraf(BOT_TOKEN);

bot.command('aaa', async (ctx) => {
    try {
        const photoUrl = 'https://t.me/jfuxkskxbck/6';
        const caption = 'Ваш текст здесь';
        
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
