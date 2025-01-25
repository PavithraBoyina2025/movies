import React from 'react'

function Banner() {
  return (
    <div className = ' h-[40vh] md:h-[100vh] flex items-end' style ={{ backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center' ,backgroundImage : 'url(https://wallpapers.com/images/high/money-heist-professor-poster-agvdeyii8xry9y6n.webp)'}}>
        <div className= 'text-white text-xl text-center w-full bg-blue-900.60 p-2'>Money Heist</div>
    </div>
  )
}

export default Banner

