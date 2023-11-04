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
	score_list=[]
	for arr in in_json:
		###[[{},{}]]
		for dict_in in arr:
			NSFW_SCORE=dict_in[1]['score']
			score_list.apend(NSFW_SCORE)
	return score_list
output = query("Hi every")###This will be the input for the com
getScore(output)###<--Use this to harvest the "bad" scores. Can be used to determine bad on Brian's end. 
