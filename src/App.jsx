import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [images,setImages]=useState("")
  const getData=async()=>{
   const{data}= await axios.get("https://picsum.photos/v2/list")
   setImages(data)
   }
  return (
    <div className="p-2 w-full h-[60px] bg-red-500 justify-center flex">
     <button onClick={getData} className="px-5 py-3  bg-green-500 rounded font-semibold">GetImage</button>
      <div className="bg-zinc-950 p-4 rounded mt-5 flex flex-wrap">
      {images.map(function(elem){
        return   console.log(elem)
  
      })}
      </div>
    </div>
  )
}

export default App
