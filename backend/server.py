from flask import Flask, request, Response, json, stream_with_context, send_from_directory, render_template
import ollama, os
from flask_cors import CORS

app = Flask(__name__, static_folder='../hackathon-frontend/hackathon-frontend/dist')
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

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@app.route('/chat', methods=['POST', 'CHAT'])
def chat():
    data = request.get_json()
    model = request.args.get('model', default='', type=str)
    def generate():
        response = ollama.chat(
                model=model,
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

@app.route('/notes', methods=['GET'])
def list_notes():
    return ollama.list()



if __name__ == '__main__':
    app.run(debug=True, port=5000)
