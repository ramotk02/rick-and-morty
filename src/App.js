import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"

const App = () => {
    const [myData,setMyData]= useState()

    useEffect(()=>{
        const data = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            setMyData(data.results);
          };
          data();
    }, []);

    console.log(myData);
  return (
    <section>
      <Navbar/>
    <div className="App">
      {myData &&
        myData.map((data) => {
          return (
            <div key={data.id}>
              <img src={data.image} alt={data.name} />
              <p>{data.name}</p>
            </div>
          );
        })}
    </div>
    </section>
  )
}

export default App