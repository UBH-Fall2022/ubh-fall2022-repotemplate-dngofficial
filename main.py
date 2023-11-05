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

db_url = "https://ub-hackathon-2023-default-rtdb.firebaseio.com"
cred = credentials.Certificate(
    'ub-hackathon-2023-firebase-adminsdk-7l4y4-d2367ecf0b.json')
firebase_admin.initialize_app(
    cred, options={"databaseURL": db_url, 'databaseAuthVariableOverride': None})


# url = 'https://youtubefetch.onrender.com/url'
# response = requests.get(url)
# print(response.text)

numberOfComments = scrap.getCommentData(video_id="KbjSuMyTjG4")
if numberOfComments > 0:
    commentFile = open("comments.json", "r")
    data = json.load(commentFile)
    translatedComments = {}
    count = 1
    for key in data.keys():
        translatedComments[key] = translateComments.translateComments(
            data[key])
        count += 1
        if count == 5:
            break

    commentFile.close()
    output = hateSpeechModel.main(translatedComments)
    print(output)
    # Get a reference to the Realtime Database
    ref = db.reference("/Comments")
    ref.set(output)
    print("completed")
