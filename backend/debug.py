import requests

url = 'http://127.0.0.1:5000/chat'
obj = {
  "model": "llama2",
  "messages": [
    {
      "role": "user",
      "content": "why is the sky blue?"
    }
  ]
}

for part in requests.post(url=url, json=obj, stream=True):
    print(part.decode())