import react from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="mainCard">
        <Cards title={'Card'} description={'This is a simple card component'} />
        {/* here we give the prop to the card component and we can give any name to the prop and we can
        give any value to the prop and we can use that prop in the card component to customize the
        content of the card component */}
        <Cards title={'Card'} description={'This is a simple card component'} />
        <Cards title={'Card'} description={'This is a simple card component'} />
        <Cards title={'Card'} description={'This is a simple card component'} />
      </div>
    </>
  );
};
export default App;
