import React,{useState,useEffect} from 'react'
import Genre from '../Utility/Genre'

function WatchList({watchList,setwatchlist,RemoveFromWatchList}) {

  const[search, setSearch] = useState('')
  const[genreList, setGenreList] = useState(['All Genres'])
  const[currentGenre, setCurrentGenre] = useState('All Genres')

  let handleSearch = (e) => {  //function to handle search
    setSearch(e.target.value)
  };

  let handleFilter = (genre) =>{
    setCurrentGenre(genre)
  }

  let sortIncreasing=()=>{ //function to sort the movies based on ratings in increasing order
    let sortedIncreasing = watchList.sort((a,b)=>{
      return a.vote_average - b.vote_average
  })
  setwatchlist([...sortedIncreasing])
}

  let sortDecreasing=()=>{ //function to sort the movies based on ratings in decreasing order
    let sortedDecreasing = watchList.sort((a,b)=>{
      return b.vote_average - a.vote_average
  })
  setwatchlist([...sortedDecreasing])
}

  useEffect(()=>{
    let temp = watchList.map((movie)=>{
      return Genre[movie.genre_ids[0]]
    });
    temp = new Set(temp)
    setGenreList(['All Genres',...temp])
  },[watchList]);

  return (
    <>
    <div className='flex justify-center flex-wrap m-4'>

     {genreList.map((genre)=>{
     return ( <div onClick={()=>handleFilter(genre)} 
     className={
      currentGenre===genre 
      ? 'flex justify-center items-center h-[2rem] w-[6rem] bg-blue-400 rounded-xl text-white font-bold mx-4'
      : 'flex justify-center items-center h-[2rem] w-[6rem] bg-gray-400 rounded-xl text-white font-bold mx-4'
      }
      key = {genre}
      >
        {genre}
        </div>
     );
     })}

    </div>


    <div className='flex justify-center my-4'>
      <input onChange= {handleSearch} value= {search} type='text' placeholder='search movies' className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4'></input>
    </div>
    <div className='border border-gray-200 m-8'>
      <table className='w-full text-gray-500 text-center'>
       <thead className='border-b-2'>
        <tr>
          <th>Name</th>
          <th className='flex justify-center'>
            <div onClick = {sortIncreasing} className='p-2'><i class="fa-solid fa-arrow-up"></i></div>
            <div className='p-2'>Ratings</div>
            <div onClick={sortDecreasing} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
          </th>
          <th>Popularity</th>
          <th>Genre</th>
        </tr>
       </thead>
       <tbody>
      
      {watchList.filter((movie)=>{
        if(currentGenre == 'All Genres')
        {
          return true
        }
        return Genre[movie.genre_ids[0]] == currentGenre

      }).filter((movie)=>{
        return movie.title.toLowerCase().includes(search.toLowerCase())  //filtering the movies based on search
      }).map((movie) => {
         return <tr key={movie.id} className='border-b-2'>
         <td className='flex items-center px-6 py-4'>
           <img className='h-[6rem] w-[7rem]' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
           <div className='mx-10'>{movie.title}</div>
         </td>
         <td>{movie.vote_average}</td>
         <td>{movie.popularity}</td>
         <td>{Genre[movie.genre_ids[0]]}</td>
         <td onClick={()=>RemoveFromWatchList(movie)} className='text-red-800'>Delete</td>
       </tr>
      })}

       </tbody>
      </table>
    </div>
    </>
  )
}


export default WatchList