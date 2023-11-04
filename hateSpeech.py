import requests
from transformers import pipeline
classifier = pipeline("sentiment-analysis", model="michellejieli/inappropriate_text_classifier")
classifier("I see you’ve set aside this special time to humiliate yourself in public.")
API_TOKEN="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"
API_URL = "https://api-inference.huggingface.co/models/michellejieli/inappropriate_text_classifier"
headers = {"Authorization": "Bearer {}".format(API_TOKEN)}

def query(payload):
	##The input is a dictionary
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()
	
output = query()
###Outputs 