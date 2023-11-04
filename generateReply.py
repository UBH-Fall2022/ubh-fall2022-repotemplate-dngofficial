import requests
import json


def query(payload):
    jsonFile = open("config.json", "r")
    data = json.load(jsonFile)
    API_URL = data["APIENDPOINTURL"]
    API_TOKEN = data["APIENDPOINTKEY"]
    headers = {"Authorization": f"Bearer {API_TOKEN}"}
    jsonFile.close()
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()
