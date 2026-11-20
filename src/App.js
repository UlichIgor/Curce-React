import './App.css';
import { useState } from 'react';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import Sitebar from './pages/Sitabar/Sitebar';
import Footer from './pages/Footer/Footer';

function App() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter((current) => current + 1);
  }

  function decrease() {
    setCounter((current) => Math.max(0, current - 1));
  }

  return (
    <>
      <div className="timeCounter">
        <h3>{counter}</h3>
        <button type="button" onClick={increase}>Click me +</button>
        <button type="button" onClick={decrease}>Click me -</button>
      </div>
      <Header />
      <Main />
      <Sitebar />
      <Footer />
    </>
  );
}

export default App;
