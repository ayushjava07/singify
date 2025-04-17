import React, { useState } from 'react'

const Nav = ({ data }) => {
  const favSongs = data.filter((item) => item.add);
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search); // You can lift state to App.jsx if needed
  };

  return (
    <div className='w-full bg-fuchsia-300 px-3 py-10 flex justify-between items-center'>
      <h1 className='text-white font-bold text-3xl text-shadow-lg'>SINGIFy</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          className="bg-fuchsia-200 shadow-xl/30 rounded-md text-pink-400 text-center font-semibold"
          type="text"
          placeholder='Song request'
          value={search}
          onChange={(e) => setSearch(search,...e.target.value)}
        />
        <input type="submit" value="Search" className='bg-pink-300 ml-3 px-3 shadow-xl/30 rounded-md cursor-pointer' />
      </form>
      
      <div className='flex font-semibold text-2xl px-4 gap-3 bg-fuchsia-200 shadow-xl/30 py-1 rounded-md'>
        <h1 className='text-white text-md'>Favourites</h1>
        <p className='bg-fuchsia-800 w-8 text-center text-white rounded-full'>
          {favSongs.length}
        </p>
      </div>
    </div>
  );
};

export default Nav;
