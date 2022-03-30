import './App.css';
import Home from './components/Home/Home';
import React, { useState, useEffect } from 'react'
import Loading from './components/Loading/Loading';

function App() {

  const [loading, setLoading] = useState(true)
  const [alreayLoaded, setAlreadyLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => (setLoading(false), 5000), () => setAlreadyLoaded(true), 1000)
  }, [])

  return (
    <>
    {
    loading === false && alreayLoaded === true ? (
    <div className='App'>
    <Home />
    </div>): 
    <Loading />
}
    </>
  );
}

export default App;
