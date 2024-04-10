import ollama

class NoteChat():

    def __init__(self, model='syssum', note=''):
        self.notes = list(ollama.chat(
            model=model,
            stream=False,
            messages=[self.create_message('system', note)]
        ))

    def create_message(self, role, message):
        return {
            'role': role,
            'content': message,
        }

    def chat(self, model='syssum', role='user', message=''):
        for part in  ollama.chat(
            model=model,
            stream=True,
            messages=self.notes.append(self.create_message(role=role, message=message)), 
        ):
            yield part
        
if __name__ == '__main__':
    message = input(">>>")
    chat_instance = NoteChat(note=open('./resources/test.txt').read())
    for part in chat_instance.chat(message=message):
        print(part.message)