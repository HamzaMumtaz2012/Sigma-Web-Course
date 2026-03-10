import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Event, setEvent] = useState("Hamza")
  const ref = useRef();
 useEffect(() => {
   if (ref.current) {
     ref.current.style.backgroundColor = 'yellow';
     ref.current.style.border = '2px solid black';
   }
 }, []);

  const handleClick = () => {
alert('Button clicked!');
  }

  const handleMouse = () => {
alert('Mouse over!');
  }
  const HandleChange = (e) => {
  setEvent(e.target.value)
  }
  return (
    <>

        <button  onClick={handleClick}>
          Button
        </button>
<h1 ref={ref} onMouseOver={handleMouse}>hover pointer on me</h1>

<input type="text" value={Event} onChange={HandleChange}/>
    </>
  )
}

export default App
