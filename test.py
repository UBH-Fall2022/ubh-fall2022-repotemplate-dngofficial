
import requests

# Define the URL to post the data to
url = 'https://youtubefetch.onrender.com/url'

# Define the data to be posted
data = {'key1': 'value1', 'key2': 'value2'}

# Send a POST request with the data
response = requests.post(url, data=data)

# Check the response status code
if response.status_code == 200:
    print(response.text)
    print('Data posted successfully')
else:
    print('Error posting data')
