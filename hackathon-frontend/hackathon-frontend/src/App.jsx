import { useState } from 'react'
import './App.css'
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
    </main>
    <aside></aside>
    <TextTyper text = {"hello world"} interval = {100} Markup = {"aside"} />
    <footer>Footer</footer>
  </div>
  </body>
  
  )
}

export default App
