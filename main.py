from ollama import Client
client = Client(host='http://localhost:11434')
for part in client.chat(model='syssum', stream=True, messages=[
  {
    'role': 'user',
    'content': 'what is photosynthesis?',
  },
]):
    print(part['message']['content'], end='', flush=True)
# Goal:
#  - split the information in the notes into individual messages
#  - store messages somewhere, I will make a mock data for now
#  - output smth with prompt