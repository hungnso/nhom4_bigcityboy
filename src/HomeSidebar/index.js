import React from 'react'
import Mapbox from './mapbox'
import HomeSidebar from './homeSidebar'
import './homeSidebar.css'
function Home() {
  return (
    <div className="homeView">
      <div className="sidebar">
        <HomeSidebar />
      </div>
      <div className="maps">
        <Mapbox />
      </div>
    </div>
  )
}

export default Home
