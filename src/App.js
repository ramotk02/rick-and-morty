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
      <section className='bg-black items-center justify-center  '>
    <div className="App flex gap-10 p-[60px] flex-wrap justify-center  ">
      {myData &&
        myData.map((data) => {
          return (
            <div key={data.id} className='h-[450px] w-[300px] bg-[#BFDE42] rounded-xl overflow-hidden transition duration-800 ease-in-out hover:scale-110'>
              <img src={data.image} alt={data.name}/>
              <p className='bg-[#BFDE42] flex items-center justify-center text-xl'>{data.name}</p>
              <p className='font-serif font-bold mx-4 my-3'>{data.species}-{data.status}</p>
              <p className='font-serif font-bold mx-4 my-3'>{data.gender}</p>

            </div>
          );
        })}
    </div>
    </section>
    </section>
  )
}

export default App