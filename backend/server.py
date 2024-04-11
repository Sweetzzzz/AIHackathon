from flask import Flask, request, Response, json, stream_with_context
import ollama
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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

if __name__ == '__main__':
    app.run(debug=True, port=5000)
