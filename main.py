from ollama import Client

def main():
    client = Client(host='https://worthy-refined-gobbler.ngrok-free.app')
    for part in client.chat(model='syssum', stream=True, messages=[
    {
        'role': 'user',
        'content': 'what is photosynthesis?',
    },
    ]):
        print(part['message']['content'], end='', flush=True)

if __name__ == '__main__':
    main()
# Goal:
#  - split the information in the notes into individual messages
#  - store messages somewhere, I will make a mock data for now
#  - output smth with prompt