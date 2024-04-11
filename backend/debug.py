import requests
import json

def chat():
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

def create():
  url = 'https://worthy-refined-gobbler.ngrok-free.app/notes'
  obj = {
    'name': 'balls',
    'content': 'mitochondria is the powerhouse of the cell.'
  }

  res = requests.post(url=url, json=obj, stream=False)
  print(res)

def delete():
  url = 'https://worthy-refined-gobbler.ngrok-free.app/notes'
  obj = {
    'name': 'balls',
  }

  res = requests.delete(url=url, json=obj, stream=False)
  print(res)

def get():
  url = 'https://worthy-refined-gobbler.ngrok-free.app/notes'
  res = requests.get(url=url, stream=False)
  print(res)

get()