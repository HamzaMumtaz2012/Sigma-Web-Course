import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setShowBtn] = useState(true)
  const [todo, setTodo] = useState([
    {
      title: "Learn React",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit. Neque, perspiciatis!"
    },
    {
  title: "Learn Vite",
  description: "Hahahahha"
},
{
  title: "Learn JavaScript",
  description: "Learn the fundamentals of JavaScript"
}
  ])


// we can made small componoents with in the app.jsx file also like this 👇
const Todo = (props) =>{
  return(
    <div className='todo'>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}


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
      {showBtn?<button>Hidden Btn</button>: ""} {/* also can give else condition if the showbtn is false */}
      {/* more efficient way 👇 */}
      {showBtn && <button>Hidden Btn</button>} {/* if showbtn is true if not so it will not render that's it */}
      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>toogle showbtn</button>

<div className='todo-list'>
        {todo.map((item, index) => {
          return <Todo key={index} title={item.title} description={item.description} />
        })}
</div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App
