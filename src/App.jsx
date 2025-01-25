import React, { useState,useEffect } from 'react'
import { Navbar } from './Components/Navbar'
import Banner from './Components/Banner'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MovieList from './Components/MovieList'
import WatchList from './Components/WatchList'

function App() {
  let [watchList, setwatchlist]=useState([])

  let AddToWatchList = (movie)=>{
    let newWatchList = [...watchList,movie]
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList))  //to prevent loss of data after refresh
    setwatchlist(newWatchList)
  }

  let RemoveFromWatchList = (movie)=>{
    let removeWatchList = watchList.filter((item)=> {
      return item.id != movie.id   
  })
  setwatchlist(removeWatchList)
  localStorage.setItem('moviesApp',JSON.stringify(removeWatchList)) //to prevent loss of data after refresh
}

useEffect(()=>{
  let moviesfromlocalstorage = JSON.parse(localStorage.getItem('moviesApp'))
  if(!moviesfromlocalstorage)
  {
   return
  }
  setwatchlist(moviesfromlocalstorage)
},[])


  return (
    <>
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<><Banner/><MovieList  AddToWatchList={AddToWatchList}
         RemoveFromWatchList={RemoveFromWatchList} watchList={watchList}/></>} />
        <Route path='/watchlist' element={<WatchList watchList={watchList} 
        setwatchlist={setwatchlist} RemoveFromWatchList={RemoveFromWatchList}/>} />
      </Routes>

      </BrowserRouter>
    </>   
  )
}

export default App

