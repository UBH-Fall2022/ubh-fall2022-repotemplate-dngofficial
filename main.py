import scrap
import translateComments
import generateReply
import json

url = ""

numberOfComments = scrap.getCommentData(video_id="KbjSuMyTjG4")
if numberOfComments > 0:
    commentFile = open("comments.json", "r")
    data = json.load(commentFile)
    translatedComments = {}

    for key in data.keys():
        translatedComments[key] = translateComments.translateComments(
            data[key])

    commentFile.close()
    translatedCommentsFile = open("translatedComments.json", "w")
    json_string = json.dumps(translatedComments, indent=4)
    translatedCommentsFile.write(json_string)
    translatedCommentsFile.close()
