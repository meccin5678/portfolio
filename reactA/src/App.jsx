import React, { useEffect, useState, useContext, useRef } from 'react';
import './App.scss'
import infoContext from './main';

function App() {
  const [count, setCount] = useState(0);
  const info = useContext(infoContext);
  const ref = useRef();

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleClickmainash = () => {
    setCount(count - 1);
    console.log(count);
  };

  useEffect(() => {
    console.log("hello");
  },[count]);
  
  const handleRef = () => {
    console.log(ref.current.value);
  };





  return (
    <div className="App">
      <section className='sectionA'>
        <h1>UseState</h1>
        <button onClick={handleClick}>＋</button>
        <button onClick={handleClickmainash}>ー</button>
        <p>{count}</p>
      </section>

      <section className='sectionB'>
        <h1>UseEffect</h1>
        <button onClick={handleClick}>＋</button>
        <button onClick={handleClickmainash}>ー</button>
        <p>{count}</p>
      </section>

      <section className='sectionC'>
        <h1>UseContext</h1>
          <p>{info.name}さん</p>
          <p>{info.age}歳おめでとう</p>
      </section>

      <section className='sectionD'>
        <h1>UseRef</h1>
        <input type="text" ref={ref} />
        <button onClick={handleRef}>UseRef</button>
      </section>

    </div>
  );
}

export default App
