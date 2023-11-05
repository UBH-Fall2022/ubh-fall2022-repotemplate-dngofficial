import scrap
import translateComments
import generateReply
import json
import requests
from bs4 import BeautifulSoup
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import json
import hateSpeechModel
import time

if len(firebase_admin._apps) == 0:

    db_url = "https://ub-hackathon-2023-default-rtdb.firebaseio.com"
    cred = credentials.Certificate(
        'ub-hackathon-2023-firebase-adminsdk-7l4y4-d2367ecf0b.json')
    firebase_admin.initialize_app(
        cred, options={"databaseURL": db_url, 'databaseAuthVariableOverride': None})
else:
    db_url = "https://ub-hackathon-2023-default-rtdb.firebaseio.com"
    cred = credentials.Certificate(
        'ub-hackathon-2023-firebase-adminsdk-7l4y4-d2367ecf0b.json')
    firebase_admin.initialize_app(
        cred, name="MAINPY", options={"databaseURL": db_url, 'databaseAuthVariableOverride': None})


def handle_snapshot(snapshot):
    if snapshot != None:
        data = dbref.get()
        url = data["url"]

        numberOfComments = scrap.getCommentData(video_id=url)
        if numberOfComments > 0:
            commentFile = open("comments.json", "r")
            data = json.load(commentFile)
            translatedComments = {}
            count = 1
            for key in data.keys():
                translatedComments[key] = translateComments.translateComments(
                    data[key])
                count += 1
                if count == 11:
                    break

            commentFile.close()
            output = hateSpeechModel.main(translatedComments)
            db_ref = db.reference("/")
            print(output)
            db_ref.child("comment").set(translatedComments)


print(firebase_admin._apps)
dbref = db.reference("/")
dbref.listen(handle_snapshot)
