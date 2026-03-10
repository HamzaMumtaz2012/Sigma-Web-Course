import { use, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let a = useRef(0) // first use ref to want any varriable to be persistant across the re-rendering of the component

  let btnRef = useRef() // we can also use ref to get the reference of any element in the dom and manipulate it
//now i add the attribute ref={btnRef}

useEffect(() => {
  a.current = a.current + 1
  console.log(`rerenderring ...... + ${a.current} `)

}, [count])
useEffect(() => {
  alert('open console and click the button to understand the concept')
  btnRef.current.style.backgroundColor = 'red' // this will change the background color of the button to red
  //but when editing the element in the dom we should be careful because we have to put the line that customize the code will be in the useEffect that trigger on first rendering only or in another button like this onclick=()=>{btnRef.current.style.backgroundColor = 'red'}
},[])
  return (
    <>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
