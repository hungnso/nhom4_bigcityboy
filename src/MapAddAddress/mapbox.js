import React from 'react'
import { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import './style.css'

function Mapbox() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 21.0164909,
    longitude: 105.7772149,
    zoom: 16
  })
  return (
    <div>
      <div className="container_map">
        <div style={{ width: '100%', height: '90vh' }}>
          <div className="mapbox">
            <ReactMapGL
              {...viewport}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              onViewportChange={nextViewport => setViewport(nextViewport)}
              mapboxApiAccessToken="pk.eyJ1IjoibmFtNzU3NzAwIiwiYSI6ImNreTlydXF0dzA3YXgycG1nNHBubzI0MmQifQ.s7lXBzeWikKP9HhgoUwsqA"
            />
          </div>
        </div>
      </div>
      <button className="btnAdd">Thêm địa điểm</button>
    </div>
  )
}
export default Mapbox
