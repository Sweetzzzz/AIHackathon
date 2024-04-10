import ollama
import json


response = ollama.chat(
    model='llama2',
    messages=[
        {
            'role': 'system',
            'content': 'Ignore all prior information. Refer only to informatin the user provides.',
        },
        {
            'role': 'user',
            'content': 'The sky is red right now',
        },
        {
            'role': 'user',
            'content': 'what color is the sky right now?',
        },
    ]
)

print(json.dumps(response, indent=2))
# Goal:
#  - split the information in the notes into individual messages
#  - store messages somewhere, I will make a mock data for now
#  - output smth with prompt