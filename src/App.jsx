import React, { useState, useEffect } from 'react';
import './App.css';
// https://orangevalleycaa.org/api/videos
function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://orangevalleycaa.org/api/videos")
        .then(response => response.json())
        .catch(e => console.log(e))
      console.log(result);
      setData(result)
    }
    fetchData()
  } ,[]  )

  return (
    <div className="App">
      <header>
        <h1>
          Videos
        </h1>
      </header>
    </div>
  );
}

export default App;
