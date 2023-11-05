import requests
import json
API_TOKEN = "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"
API_URL = "https://api-inference.huggingface.co/models/michellejieli/inappropriate_text_classifier"
# Note: This is an Open Soruce data called hugging face
headers = {"Authorization": "Bearer {}".format(API_TOKEN)}


def writeFile(dict_in, fileOut):
    # Takes a dict in and writes to this JSON file name
    json_obj = json.dumps(dict_in)
    with open(fileOut, 'w') as newFile:
        newFile.write(json_obj)
        # ^^Writes to the file


def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()


def getScore(in_json):
    score_dict = {}
    for i in range(len(in_json)):
        score_dict["comment-"+str(i+1)] = in_json[i][0]["score"]
    return score_dict


def main(data):
    modifiedData = []
    for key in data.keys():
        modifiedData.append(data[key])
    input_data = {"inputs": modifiedData}
    output = query(input_data)
    new_dict = getScore(output)
    out_dict = {}
    for keys in new_dict.keys():
        if new_dict[keys] < 0.7:
            out_dict[keys] = new_dict[keys]
    return out_dict
