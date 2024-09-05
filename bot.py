from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import Updater, CommandHandler, CallbackContext

TOKEN = '7486422626:AAHEPueA_bmTzXYYrb_xdgaPIiYfk5KfGso'

def start(update: Update, context: CallbackContext) -> None:
    keyboard = [[InlineKeyboardButton("Open Music Player", web_app=WebAppInfo(url="https://your-domain.com/webapp/index.html"))]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    update.message.reply_text("Click the button to open the music player.", reply_markup=reply_markup)

def main() -> None:
    updater = Updater(TOKEN)
    dp = updater.dispatcher
    dp.add_handler(CommandHandler("start", start))
    
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
