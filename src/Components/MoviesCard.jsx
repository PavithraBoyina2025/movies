import React from 'react'

function MoviesCard({movie, poster_path, name, AddToWatchList, RemoveFromWatchList, watchlist = []}) {
 
  function Contain(movie)
  {
    for(let i = 0; i < watchlist.length; i++)
    {
      if(watchlist[i].id === movie.id)
      {
        return true
      }
    }
    return false
  }

  return (
    <div className='h-[40vh] w-[150px] rounded-xl flex flex-col justify-between items-end hover:scale-110 duration-300 hover:cursor' style={{backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

     {Contain(movie) ? (<div onClick={()=>RemoveFromWatchList(movie)} 
     className='m-3 flex justify-center h-8 w-8 items-center rounded-lg text-2xl font-bold bg-white/70 p-1'>&#x274C;</div>
    ) : (
     <div onClick={()=>AddToWatchList(movie)} 
     className='m-3 flex justify-center h-8 w-8 items-center rounded-lg text-2xl font-bold bg-white/70 p-1'>&#x2661;</div>
     )}
      
    <div className='text-white text-s text-center w-full bg-gray-900/50 p-2'>{name}</div>
    </div>
  )
}

export default MoviesCard