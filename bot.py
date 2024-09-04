from telegram import Update, InputFile
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters, CallbackContext

TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN'

def start(update: Update, context: CallbackContext) -> None:
    update.message.reply_text('Send me a song to play.')

def handle_audio(update: Update, context: CallbackContext) -> None:
    file = update.message.audio.file_id
    context.bot.send_message(chat_id=update.effective_chat.id, text='Audio received, processing...')
    # Здесь будет обработка аудио

def main() -> None:
    updater = Updater(TOKEN)

    dp = updater.dispatcher

    dp.add_handler(CommandHandler("start", start))
    dp.add_handler(MessageHandler(Filters.audio, handle_audio))

    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
