from googletrans import Translator


def translateComments(query):
    try:
        translator = Translator()
        translation = translator.translate(query, dest='en')
        return translation.text
    except Exception as e:
        return e
