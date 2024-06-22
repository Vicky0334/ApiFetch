import React from 'react'

const Images = (props) => {
  return (
    <div className='border-[1px] mt-5 ml-5 w-[500px] h-[370px] flex-col gap-5 rounded '>
       <img src={props.elem.download_url} alt="" />
       <h2 className='text-2xl text-white font-semidold'> {props.elem.author}</h2>
    </div>
  )
}

export default Images
