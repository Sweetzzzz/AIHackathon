import { useEffect, useState } from 'react'
import './App.css'
import { fetchData } from './controllers/summarizers';
import TextTyper from 'text-type-animation-effect-react'
function App() {
  
  return (
    <body>
    <div class="grid text-white">
    <header>Header</header>
    <main>
      <ul>
        <li>notes</li>
        <li>notes</li>
      </ul>
      <div className="add-note">
      <input type="file" name="file" accept="image/*"></input>
      </div>
    </main>
    {/* <aside className=" fixed top-[50%] left-[50%]"><TextTyper text = {"hello world"} in terval = {100} Markup = {"aside"} /></aside> */}
    <aside className="fixed top[50%] left-[50%]"></aside>
    <div>
      {jsonData && <div>{jsonData}</div>}
    </div>
    <footer>
     <input className="w-[50vw] bg-slate-500 shadow appearance-none border-none rounded-lg h-10 text-white leading-tight focus:outline-none focus:shadow-outline" id="prompt" type="text" placeholder="Enter a prompt to get started"></input>
    </footer>
  </div>
  </body>
  
  )
}




// const [prompt, setPrompt] = useState('');

// const handleInputChange = (event) => {
//   setPrompt(event.target.value);
// };

// const handleSubmit = () => {
//   const requestData = {
//     model: 'llama2',
//     messages: [
//       { role: 'user', content: prompt }
//     ]
//   };

//   fetch('https://worthy-refined-gobbler.ngrok-free.app/api/generate', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(requestData)
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data.response); // Log the response content to the console
//     })
//     .catch(error => {
//       console.error('There was a problem with the fetch operation:', error);
//     });
// };

// return (
//   <div>
//     <input 
//       type="text" 
//       value={prompt} 
//       onChange={handleInputChange} 
//       placeholder="Enter your prompt" 
//     />
//     <button onClick={handleSubmit}>Submit</button>
//   </div>
// );
// }












export default App
