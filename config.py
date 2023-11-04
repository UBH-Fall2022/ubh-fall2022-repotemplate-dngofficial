import json

jsonFile = open("config.json", "a")
data = {
    "APIENDPOINTKEY": "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",
    "APIENDPOINTURL": "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
}

json_string = json.dumps(data, indent=4)
jsonFile.write(json_string)
jsonFile.close()
