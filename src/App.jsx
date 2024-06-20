import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [images,setImages]=useState()
  const getData=async()=>{
   const{data}= await axios.get("https://picsum.photos/v2/list")
   setImages(data)
  //  console.log(data)
   }
  return (
    <div className="p-2 w-full h-[60px] bg-red-500 justify-center flex">
     <button onClick={getData} className="px-5 py-3  bg-green-500 rounded font-semibold">GetImage</button>
     
      <div>
      {images < 0 ? (
          images.map(function(elem, idx) {
            return (
              console.log(elem),
              <div key={idx} className="p-2">
                <img src={elem.download_url} alt={elem.author} className="w-32 h-32 m-2 rounded"/>
              </div>
            )
          })
        ) : (
          <p>No images available</p>
        )}
      </div>
     </div>
  )
}

export default App
