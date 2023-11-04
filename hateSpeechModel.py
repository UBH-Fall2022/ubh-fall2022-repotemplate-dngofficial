import requests
import json
from transformers import pipeline
API_TOKEN="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"
API_URL = "https://api-inference.huggingface.co/models/michellejieli/inappropriate_text_classifier"
headers = {"Authorization": "Bearer {}".format(API_TOKEN)}

def query(payload):
	##The input is a dictionary
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()
def getScore(in_json):
	###Note Dict of dict
	###Parse through and strip just the NSFW
	score_dict={}
	for i in range(len(in_json)):
		###[[{},{}]]
		score_dict[in_json[i]]=arr[1].get('score')
		####Reformats the code
		####"comment#1":.687
	return score_dict
def writeFile(dict_in,fileName):
	##Takes a JSON in and writes to this JSON file name
	json_obj=json.dumps(dict_in)
	with open(fileName,'w') as newFile:
		newFile.write(json_obj)
output = query("Hi every")###This will be the input for the com
new_dict=getScore(output)
json_file="{}.json".format('HATESPEECH')
writeFile(new_dict,json_file)
