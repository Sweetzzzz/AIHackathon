import backend.summarizer.notes as notes

def main():
    chat_instance = notes.NoteChat(note='light + CO2 = photosynthesis')

    for part in chat_instance.chat(message=input(">>>")):
        print(part['message']['content'], end='', flush=True)
    

if __name__ == "__main__":
    main()