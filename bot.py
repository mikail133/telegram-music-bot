from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes

TOKEN = '7486422626:AAHEPueA_bmTzXYYrb_xdgaPIiYfk5KfGso'

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    keyboard = [[InlineKeyboardButton("Open Music Player", web_app=WebAppInfo(url="https://mikail133.github.io/telegram-music-bot/"))]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("Click the button to open the music player.", reply_markup=reply_markup)

def main() -> None:
    application = Application.builder().token(TOKEN).build()

    application.add_handler(CommandHandler("start", start))

    application.run_polling()

if __name__ == '__main__':
    main()