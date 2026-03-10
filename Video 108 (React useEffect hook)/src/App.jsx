import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // useEffect is a React hook that handles side effects in functional components
  // Side effects: data fetching, subscriptions, manually updating DOM, timers, etc.
  // Syntax: useEffect(() => { side effect logic }, [dependency array])

  // Example 1: Run once on component mount (empty dependency array)
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    console.log('Component mounted - this runs only once');
    setDataLoaded(true);
    // This is the only place we need cleanup for this example
  }, []); // Empty array = runs on mount only

  // Example 2: Run on specific dependency change
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  useEffect(() => {
    console.log('Count changed to:', count);
    setMessage(`Count is currently ${count}`);
  }, [count]); // Runs when count changes

  // Example 3: Run on every render (no dependency array)
  useEffect(() => {
    console.log('This runs after every render');
  }); // No array = runs after every render (be careful!)

  // Example 4: Cleanup function (runs before unmount or re-render)
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  useEffect(() => {
    if (!timerRunning) return;

    console.log('Timer started');
    const interval = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    // Cleanup function: runs before re-render or unmount
    return () => {
      console.log('Cleaning up timer');
      clearInterval(interval);
    };
  }, [timerRunning]); // Cleanup runs when timerRunning changes

  // Example 5: Multiple dependencies
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [fullName, setFullName] = useState('');
  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]); // Runs when either dependency changes

  // Example 6: Simulating API call with fetch
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        // Simulated API call with JSONPlaceholder
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError('Failed to fetch user');
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if userId is valid
    if (userId > 0) {
      fetchUser();
    }

    // Cleanup function prevents state update if component unmounts
    return () => {
      console.log('Cleanup: fetch may be cancelled here');
    };
  }, [userId]); // Refetch when userId changes

  return (
    <div className="container">
      <h1>React useEffect Hook - All Cases</h1>

      {/* Example 1: Mount Effect */}
      <section className="example">
        <h2>Example 1: Mount Effect</h2>
        <p>{dataLoaded ? '✓ Component Mounted' : 'Loading...'}</p>
        <p className="note">Runs once on component mount (check console)</p>
      </section>

      {/* Example 2: Dependency Effect */}
      <section className="example">
        <h2>Example 2: Effect on Dependency Change</h2>
        <p>Count: {count}</p>
        <p>Message: {message}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p className="note">Re-runs whenever count changes (check console)</p>
      </section>

      {/* Example 4: Cleanup Function */}
      <section className="example">
        <h2>Example 4: Effect with Cleanup (Timer)</h2>
        <p>Time Elapsed: {timeElapsed} seconds</p>
        <button onClick={() => setTimerRunning(!timerRunning)}>
          {timerRunning ? 'Stop' : 'Start'} Timer
        </button>
        <p className="note">Cleanup removes interval when stopped (check console)</p>
      </section>

      {/* Example 5: Multiple Dependencies */}
      <section className="example">
        <h2>Example 5: Multiple Dependencies</h2>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
        />
        <p>Full Name: {fullName}</p>
        <p className="note">Effect runs when firstName or lastName changes</p>
      </section>

      {/* Example 6: API Fetch */}
      <section className="example">
        <h2>Example 6: API Fetch with Cleanup</h2>
        <div>
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(parseInt(e.target.value))}
            min="1"
            max="10"
            placeholder="User ID (1-10)"
          />
        </div>

        {loading && <p className="status loading">Loading...</p>}
        {error && <p className="status error">{error}</p>}
        {user && (
          <div className="user-info">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
          </div>
        )}
        <p className="note">Fetches user data when userId changes</p>
      </section>

      {/* Info */}
      <section className="example info">
        <h2>useEffect Cases Summary</h2>
        <ul>
          <li>
            <strong>Mount only:</strong> {`useEffect(() => {}, [])`}
          </li>
          <li>
            <strong>On dependency change:</strong> {`useEffect(() => {}, [dep])`}
          </li>
          <li>
            <strong>Every render:</strong> {`useEffect(() => {})`}
          </li>
          <li>
            <strong>With cleanup:</strong> {`useEffect(() => { return () => {} }, [dep])`}
          </li>
          <li>
            <strong>Multiple deps:</strong> {`useEffect(() => {}, [dep1, dep2])`}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
