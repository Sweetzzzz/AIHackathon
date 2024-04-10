from flask import Flask, request, Response, jsonify
import ollama

app = Flask(__name__)

@app.route('/chat', methods=['POST', 'GET'])
def chat():
    data = request.get_json()
    def generate():
        for part in ollama.chat(
                model='llama2',
                messages=data['messages'],
                stream=True):
            yield str(part)
    return generate()

if __name__ == '__main__':
    app.run(debug=True)