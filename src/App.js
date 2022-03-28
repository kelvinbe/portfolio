import './App.css';
import Home from './components/Home/Home';
import React, { useState, useEffect } from 'react'
import Loading from './components/Loading/Loading';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])

  return (
    <>
    { loading === false ?(
    <div className='App'>
    <Home />
    </div>
    ):
    <div>
      <Loading />
    </div>
    }
    </>
  );
}

export default App;
