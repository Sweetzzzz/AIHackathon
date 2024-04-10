from ollama import Client

client = Client(host='http://localhost:11434')
chat_history = []

def load_notes():
    f = open("./resources/7a-photosynthesisbasics.txt")
    chat_history = client.chat(
            model='syssum', 
            stream=False, 
            messages=create_message('system', f.read)
            )


def main():
    for part in client.chat(model='syssum', stream=True, messages=chat_history):
        print(part['message']['content'], end='', flush=True)

def create_message(role, message): 
    return {
        'role': role,
        'content': message,
    }

if __name__ == '__main__':
    main()
# Goal:
#  - split the information in the notes into individual messages
#  - store messages somewhere, I will make a mock data for now
#  - output smth with prompt