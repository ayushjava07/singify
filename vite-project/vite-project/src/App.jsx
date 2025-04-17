
 
  import React, { useState } from 'react';
  import Card from './Card';
  import Nav from './Nav';
  
  const App = () => {
    const data = [
      {image:'https://i.pinimg.com/736x/a3/1b/88/a31b88dc94ac3c19155ae3371f86b725.jpg',song:"Husn",artist:"Anuv jain",add:false},
      {image:'https://i.pinimg.com/736x/fc/d1/f3/fcd1f3ba88fac5dd601c61b3b7cfefa0.jpg',song:"Choo lo",artist:"The local train",add:false},
      {image:'https://i.pinimg.com/736x/ad/7b/ab/ad7bab302a3fbf62d01651c4fd2b9585.jpg',song:"Shakti ya Shama",artist:"Seedhe maut",add:true},
      {image:'https://i.pinimg.com/736x/6f/91/b9/6f91b956ea3e036f97b68c3c6a8f1947.jpg',song:"Sanam teri kasam",artist:"Ankit tiwari",add:false},
      {image:'https://i.pinimg.com/736x/ad/7b/ab/ad7bab302a3fbf62d01651c4fd2b9585.jpg',song:"Shakti ya Shama",artist:"Seedhe maut",add:false},
      {image:'https://i.pinimg.com/736x/6f/91/b9/6f91b956ea3e036f97b68c3c6a8f1947.jpg',song:"Sanam teri kasam",artist:"Ankit tiwari",add:false},
      {image:'https://i.pinimg.com/736x/ad/7b/ab/ad7bab302a3fbf62d01651c4fd2b9585.jpg',song:"Shakti ya Shama",artist:"Seedhe maut",add:false},
      // {image:'https://i.pinimg.com/736x/a3/1b/88/a31b88dc94ac3c19155ae3371f86b725.jpg',song:"Husn",artist:"Anuv jain"},
  
    ];
  
    const [songs, setSongs] = useState(data);
  
    const handleclick = (changeindex) => {
      setSongs((prev) =>
        prev.map((item, index) =>
          index === changeindex ? { ...item, add: !item.add } : item
        )
      );
    };
  
    return (
      <div className='w-full h-screen bg-black px-4 py-6'>
        <Nav data={songs} />
        <div className='flex w-full gap-3 mt-15 flex-wrap items-center justify-center'>
          {songs.map((obj, index) => (
            <Card
              key={index}
              songs={obj}
              index={index}
              handleclicked={handleclick}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default App;
  