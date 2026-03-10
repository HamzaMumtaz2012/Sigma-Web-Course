import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  const inputRef = useRef()

const [todos, setTodos] = useState([])
  const [text, setText] = useState('Enter a Todo')
  const [error, setError] = useState(false)


  // const [todoCount, setTodoCount] = useState(0)

  // useEffect(() => {

    //   const p = document.createElement('p')
    //   p.textContent = "No Todos"
  //   p.style.fontSize = '1.4rem'
  //   p.style.color = '#9CA3AF'

  //   noTodoRef.current = p

  //   const todoList = document.querySelector('.todo')
  //   todoList.after(p)

  // }, [])


  //   if (text === 'Invalid Todo') {
  //     setText('')
  //     inputRef.current.style.color = "black"
  //     inputRef.current.style.border = "1px solid black"
  //   }
  // }
  const handleInputClick = () => {
inputRef.current.style.color = 'black'
inputRef.current.style.border = '1px solid black'
  }

 const handleClick = () => {

  if (text.trim() === '' || text.trim() === 'Enter a Todo') {

    setText('Invalid Todo')
    inputRef.current.style.color = '#EF4444'
    inputRef.current.style.border = '1px solid #EF4444'
    setError(false)

  } else {

    setTodos([...todos, text])
    setText('Enter a Todo')
    setError(true)

  }

}
  useEffect(() => {
  const remove = document.querySelector('.first-heading.todo')
  if(todos.length !== 0 && remove) {
    remove.remove()
  }
    })
  //  else {

  //     if (todoCount === 0 && noTodoRef.current) {
  //       noTodoRef.current.remove()
  //     }

  //     const Todos = document.createElement('div')
  //     const input = document.createElement('input')
  //     const li = document.createElement('li')
  //     const editBtn = document.createElement('button')
  //     const deleteBtn = document.createElement('button')

  //     input.type = 'checkbox'
  //     editBtn.textContent = 'Edit'
  //     deleteBtn.textContent = 'Delete'

  //     li.textContent = text

  //     input.style.margin = "0 20px 0 0"
  //     li.style.fontSize = '1.4rem'
  //     li.style.marginRight = '10px'
  //     input.style.scale = '1.3'

  //     Todos.appendChild(input)
  //     Todos.appendChild(li)
  //     Todos.appendChild(editBtn)
  //     Todos.appendChild(deleteBtn)

  //     Todos.style.display = 'flex'
  //     Todos.style.listStyle = 'none'
  //     Todos.style.justifyContent = 'left'

  //     editBtn.classList.add("Btn")
  //     deleteBtn.classList.add("Btn")

  //     li.style.marginTop = '3px'
  //     input.style.marginTop = '1px'

  //     const todolist = document.querySelector('.todo')
  //     todolist.after(Todos)

  //     deleteBtn.style.left = '220px'
  //     editBtn.style.left = '210px'

  //     setTodoCount(todoCount + 1)
  //     setText('Enter a Todo')

  //     inputRef.current.style.color = '#9CA3AF'
  //     inputRef.current.style.border = '1px solid black'

  //   }
  //   if(input.checked === true) {
  //       li.style.textDecoration = 'line-through'
  //   }
  // }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  // useEffect(() => {
  //   inputRef.current.style.color = '#9CA3AF'
  // }, [])


  return (
    <>
      <Navbar />

      <div className="container">
        <h2 className="first-heading">Add a Todo</h2>

        <input
          ref={inputRef}
          value={text}
          className="input"
          onChange={handleChange}
          onClick={handleInputClick}
          type="text"
        />

        <button className="btn" onClick={handleClick}>
          Add
        </button>

        <h2 className="first-heading todo" style={{ top: '0px' }}>
          Your Todos
        </h2>
        <div className="todoList">
          {error &&
            todos.map((todo, index) => (
              <div
                key={index}
                style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}
              >
                <input type="checkbox" />
                <p key={index} style={{ fontSize: '1.4rem' }}>
                  {' '}
                  {todo}{' '}
                </p>
                <button >Edit Todo</button>
                <button>Delete</button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App
