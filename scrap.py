from googleapiclient.discovery import build
import json


def get_comments(youtube, video_id, comments=[], token=''):

    video_response = youtube.commentThreads().list(part='snippet',
                                                   videoId=video_id,
                                                   pageToken=token).execute()
    for item in video_response['items']:
        comment = item['snippet']['topLevelComment']
        text = comment['snippet']['textDisplay']
        comments.append(text)
    if "nextPageToken" in video_response:
        return get_comments(youtube, video_id, comments, video_response['nextPageToken'])
    else:
        return comments


def getCommentData(video_id):
    config = open("config.json", "r")

    api_key = json.load(config)
    api_key = api_key["APIKEY"]

    config.close()

    youtube = build('youtube', 'v3', developerKey=api_key)
    comment_threads = get_comments(youtube, video_id)
    data = {}
    for i in range(len(comment_threads)):
        data["comment#" + str(i+1)] = comment_threads[i]

    jsonFile = open("comments.json", "w+")
    json_string = json.dumps(data, indent=4)
    jsonFile.write(json_string)
    jsonFile.close()
    return len(data)
