import React from 'react'
import '../styles/Card2.css';
function Card2() {
  return (
    <div className='card2 container-fluid'>
        <div className='row'>
        <div className='col-md-4 offset-md-2 text-light col-sm-10 offset-sm-1'>
            <h1 className='text-enjoy'>Enjoy on your TV.
                </h1>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            
            <img className=' img2 col-md-4 offset-md-1 col-sm-10 offset-sm-1'
             src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt='netflix'/>
                </div>
    </div>
  )
}

export default Card2