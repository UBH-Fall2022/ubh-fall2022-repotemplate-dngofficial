from googletrans import Translator
import json


def translateComments(query):
    try:
        translator = Translator()
        translation = translator.translate(query, dest='en')
        return translation.text
    except Exception as e:
        return e
