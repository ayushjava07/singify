import React from 'react'

const Card = ({songs,index,handleclicked}) => {
  const{image, artist,song,add}=songs;
  return (
    <div className='w-80  h-60 rounded-md bg-white shrink-0 mt-10 ml-10 shadow-[0_5px_5px_violet] justify-center flex flex-col'>
      
      <div className='flex '>
      <div className='w-30 h-35  bg-blue-300 m-3 rounded-md overflow-hidden shadow-xl/30'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div className='mt-5 ml-2 '>
      <h1 className='font-bold'>{song}</h1>
      <h3 className='font-semibold text-sm text-fuchsia-600 text-shadow-lg'>{artist}</h3>
      </div>
      </div>
      
      <button onClick={()=>handleclicked(index)} className={`px-4 py-2 w-40 ml-20 ${add?"bg-red-300":"bg-fuchsia-300"} rounded-xl shadow-xl/30 font-semibold text-sm text-white text-shadow-lg`}>
        {add? 'Remove from fav' : 'Add to fav'  }
      </button>
    </div>
  )
}

export default Card
