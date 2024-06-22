import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Images from './assets/components/Images'

const App = () => {
  const [images,setImages]=useState([])
  const getData=async()=>{
   const{data}= await axios.get("https://picsum.photos/v2/list")
   setImages(data)
  //  console.log(data)
   }
   useEffect((data)=>{
    getData(data);
   },{images})
  return (
    <div className="p-5">
     {/* <button onClick={getData} className="px-5 py-3  bg-green-500 rounded font-semibold">GetImage</button> */}
     
      <div className='bg-zinc-950 p-5 rounded mt-5 flex flex-wrap place-items-center'>
      {images.map(function(elem,idx) {
            return (
              <Images elem={elem} key={idx}/>
            )
          })}
      </div>
     </div>
  )
}

export default App
