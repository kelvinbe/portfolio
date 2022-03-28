import './App.css';
import Home from './components/Home/Home';
import React from 'react'
// import Loading from './components/Loading/Loading';

function App() {

  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 5000)
  // }, [])

  return (
  
    <div className='App'>
    <Home />
    </div>
   
  );
}

export default App;
