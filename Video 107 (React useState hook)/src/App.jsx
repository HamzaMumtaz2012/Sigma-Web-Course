import { useState } from 'react';
import './App.css';

function App() {
  // useState is a React hook that lets you add state to functional components
  // Syntax: const [value, setValue] = useState(initialValue)

  // Example 1: Simple counter with number state
  const [count, setCount] = useState(0);

  // Example 2: String state for input
  const [name, setName] = useState('');

  // Example 3: Boolean state for toggle
  const [isVisible, setIsVisible] = useState(false);

  // Example 4: Object state for multiple related values
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
  });

  // Example 5: Array state for list items
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);

  return (
    <div className="container">
      <h1>React useState Hook Examples</h1>

      {/* Example 1: Counter */}
      <section className="example">
        <h2>Example 1: Simple Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </section>

      {/* Example 2: Text Input */}
      <section className="example">
        <h2>Example 2: Text Input</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <p>Hello, {name || 'Guest'}!</p>
      </section>

      {/* Example 3: Toggle */}
      <section className="example">
        <h2>Example 3: Toggle Visibility</h2>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? 'Hide' : 'Show'} Message
        </button>
        {isVisible && <p>This message is toggled on/off!</p>}
      </section>

      {/* Example 4: Object State */}
      <section className="example">
        <h2>Example 4: Object State</h2>
        <p>
          Name: {user.firstName} {user.lastName}
        </p>
        <p>Age: {user.age}</p>
        <button onClick={() => setUser({ ...user, age: user.age + 1 })}>Increase Age</button>
        <button onClick={() => setUser({ ...user, firstName: 'Jane' })}>Change Name to Jane</button>
      </section>

      {/* Example 5: Array State */}
      <section className="example">
        <h2>Example 5: Array State</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => setItems(items.filter((_, i) => i !== index))}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={() => setItems([...items, 'Grape'])}>Add Grape</button>
      </section>
    </div>
  );
}

export default App;
