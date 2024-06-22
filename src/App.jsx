import React, { useState } from 'react'
import axios from 'axios'
import Images from './assets/components/Images'
const App = () => {
  const [images,setImages]=useState([])
  const getData=async()=>{
   const{data}= await axios.get("https://picsum.photos/v2/list")
   setImages(data)
  //  console.log(data)
   }
  return (
    <div className="p-2 w-full h-[60px] bg-red-500 justify-center flex">
     <button onClick={getData} className="px-5 py-3  bg-green-500 rounded font-semibold">GetImage</button>
     
      <div>
      {images.map(function(elem,idx) {
            return (
             
             <div className="p-2 flex ">
              <Images elem={elem} key={idx}/>
              </div>
            )
          })}
      </div>
     </div>
  )
}

export default App
