import React from 'react'

const Images = (props) => {
  return (
    <div className='border-[1px] flex-col gap-5 rounded '>
       <img src={props.elem.download_url} alt="" />
       <h2 className='text-2xl font-semidold'> {props.elem.author}</h2>
    </div>
  )
}

export default Images
