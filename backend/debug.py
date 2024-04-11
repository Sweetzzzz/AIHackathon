import requests
import json

url = 'https://worthy-refined-gobbler.ngrok-free.app/chat'
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
    print(part)