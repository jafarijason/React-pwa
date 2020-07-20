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
           Art Videos
        </h1>
      </header>
      {
        data.map(video=>(
           <div key={video.id}>
             <h2>
               {video.name}
             </h2>
             <video width="" height={200} controls src={video.video_url}>
               
             </video>
           </div>
        ))
      }
    </div>
  );
}

export default App;
