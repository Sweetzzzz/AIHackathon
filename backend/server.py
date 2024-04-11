from flask import Flask, request, Response, json, stream_with_context
import ollama
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

MODELFILE_TEMPLATE='''
FROM llama2


SYSTEM """
Only use information provided in system messages.

Do not use external information.

Cite all sources.

Before answering a question, ask yourself if the topics are covered in the notes. If not, do not answer the prompt.

Your job is to answer questions about the following notes.

"""
'''

@app.route('/')
def home():
    return 'hello, world!'

@app.route('/chat', methods=['POST', 'GET'])
def chat():
    data = request.get_json()
    def generate():
        response = ollama.chat(
                model='syssum',
                messages=data['messages'],
                stream=True)
        for part in response:
            yield json.dumps(part) + '\n'
    resp = Response(stream_with_context(generate()), content_type='application/json')
    # resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp

@app.route('/notes', methods=['POST'])
def upload_notes():
    data = request.get_json()
    name = data['name']
    content = data ['content']

    response = ollama.create(model=name, modelfile=MODELFILE_TEMPLATE+content, stream=False)
    return response

@app.route('/notes', methods=['DELETE'])
def delete_notes():
    data = request.get_json()
    name = data['name']

    response = ollama.delete(name)
    return response



if __name__ == '__main__':
    app.run(debug=True, port=5000)
