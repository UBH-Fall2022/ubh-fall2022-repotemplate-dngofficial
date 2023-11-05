import requests
from transformers import pipeline
from flask import request 
from urllib.request import urlopen##Used to pull a website
import json
API_TOKEN="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"
API_URL = "https://api-inference.huggingface.co/models/michellejieli/inappropriate_text_classifier"
###Note: This is an Open Soruce data called hugging face
headers = {"Authorization": "Bearer {}".format(API_TOKEN)}
def writeFile(dict_in,fileOut):
	##Takes a dict in and writes to this JSON file name
	json_obj=json.dumps(dict_in)
	with open(fileOut,'w') as newFile:
		newFile.write(json_obj)
		#^^Writes to the file
def query(payload):
	##The input is a dictionary
	#Note: Shoots out a json that has gone through API
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()
def getScore(in_dict,in_json):
	#in_dict has just the comment#1: Word
	#in_json is different======It's the 'graded' version of the file 
	###Note Dict of dict
	score_dict={}
	for i in range(len(in_json)):
		score_dict[in_dict[i]]=in_json[1].get('score')
		####Reformats the code==>"comment#1":.687
	return score_dict
input_data={"comment#31":"Test"}
output = query(input_data)###Query anticipated to be Dict_input
new_dict=getScore(input_data,output)#<-- Expected dictionary output from this method
json_file="{}.json".format('HATESPEECH')
writeFile(new_dict,json_file)
