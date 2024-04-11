import { Ollama } from 'ollama'
const ollama = new Ollama({ host: 'https://worthy-refined-gobbler.ngrok-free.app/api/generate' })
const response = await ollama.chat({
  model: 'llama2',
  stream:true,
  messages: [{ role: 'user', content: 'Why is the sky blue?' }],
})

console.log(response);