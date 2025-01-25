import React, { useEffect, useState } from 'react'
import MoviesCard from './MoviesCard'
import axios from 'axios'
import Pagination from './Pagination'

function MovieList({AddToWatchList,RemoveFromWatchList,watchList}) {
  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1) // Define pageNo state
  const handlePrev = () => {
    if(pageNo  == 1)
    {
      setPageNo(1)
    }
    else{
      setPageNo(pageNo - 1)
    }
    
  }
  const handleNext = () => {
    setPageNo(pageNo + 1)
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ecb731863053efd20375faaa17c1c0ae&language=en-US&page=${pageNo}`)
      .then(function(res) {
        setMovies(res.data.results)
      })
  }, [pageNo])

  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center'>Trending Movies</div>
      <div className='flex flex-row flex-wrap justify-around gap-5'>
        {movies.map((movie) => {
          return <MoviesCard key={movie.id} movie={movie} poster_path={movie.poster_path}
           name={movie.original_title} AddToWatchList={AddToWatchList} 
           RemoveFromWatchList={RemoveFromWatchList} watchlist={watchList}/>
        })}
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} /> {/* Pass setPageNo to Pagination */}
    </div>
  )
}

export default MovieList