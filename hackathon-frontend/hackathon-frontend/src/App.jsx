import { useEffect, useState } from 'react'
import './App.css'
import { chat } from './controllers/chat';
import photonotes from './assets/photo_notes.jpg'
import logo from './assets/logo.png'
function App() {
  const [incomingMessage, setIncomingMessage] = useState('')
  const [userInput, setUserInput] = useState('')

  useEffect(
    () => {
      console.log("useEffect called")
      chat('syssum', [{
        'role': 'user',
        'content': 'hi',
      }], setIncomingMessage)
    }, []
  )

  function handleSubmit(event) {
    event.preventDefault();
    setUserInput('')
    setIncomingMessage(prev => prev + '\n\n')
    chat('syssum', [{
      'role': 'user',
      'content': userInput,
    }], setIncomingMessage)
  }

  function handleChange(event) {
    setUserInput(event.target.value)
  }
  function changeOpacity() {
    var img = document.getElementById("myImage");
    img.style.opacity = "1";
    var text = document.getElementById("myText");
    text.style.opacity = "1"
  }


  return (
    <body>
      <div className="grid text-white">
        <header><img src={logo} id='logo-image'/></header>
        <main>
          <ul>
            <li className="ml-9 pl-5"><img id="myImage" className=" size-40" style={{opacity: 0}} src={photonotes}></img></li>
            <li className="p-5 ml-9 whitespace-nowrap" id="myText" style={{opacity:0}}>Photosynthesis notes</li>
          </ul>
          <div className="add-note">
      <label className="custom-file-upload ml-5">
        <input type="file" accept="image/png, image/gif, image/jpeg" onChange={changeOpacity}/>
        {/* <input  type="button" value="Change Opacity" onClick={changeOpacity}/> */}
        Note Upload
      </label>
      </div>
        </main>
        {/* <aside className=" fixed top-[50%] left-[50%]"><TextTyper text = {"hello world"} in terval = {100} Markup = {"aside"} /></aside> */}
        {/* <aside className="fixed top[50%] left-[50%]"></aside> */}
        <div className=" m-20">
          {incomingMessage}
        </div>
        <footer>
        <form onSubmit={handleSubmit}>
          <input value={userInput} onChange={handleChange}className="w-[50vw] bg-slate-500 shadow appearance-none border-none rounded-lg h-12 pl-5 text-white leading-tight focus:outline-none focus:shadow-outline" id="prompt" type="text" placeholder="Enter a prompt to get started"></input>
          <input type="submit" value="Submit" className=" ml-2 bg-blue-400 p-3 rounded-md"/>
        </form>
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
