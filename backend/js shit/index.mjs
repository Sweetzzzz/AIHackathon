
const url = "https://worthy-refined-gobbler.ngrok-free.app/chat"
const obj = {
  "model": "llama2",
  "messages": [
    {
      "role": "user",
      "content": "why is the sky blue?"
    }
  ]
}

// const response = await fetch(url, obj);
// const reader = response.body.getReader();

// while (true) {
//   const {value, done} = await reader.read();
//   if (done) break;
//   console.log('Received', JSON.parse(value));
// }

// console.log('Response fully received');

const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(obj)
});
const readableStream = response.body;
const reader = readableStream.getReader();
while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    var text = new TextDecoder("utf-8").decode(value);
    const objects = text.split("\n");
    for (const obj of objects) {
        try {
            runningText += obj;
            let result = JSON.parse(runningText);
            console.log("Received", result);
            runningText = "";
        } catch (e) {
           // Not a valid JSON object
        }
     }
}