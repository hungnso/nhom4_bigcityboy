import React from 'react'
import { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import axios from 'axios'
import { FaMapMarkerAlt } from 'react-icons/fa'
import './style.css'

function Mapbox() {
  // Token
  var token = "pk.eyJ1IjoiY29udG90IiwiYSI6ImNreWFvamp0dDAwbnIyb210OGdkbjUxc2oifQ.4h9mS6yDTwWeWFpHyJ_6EQ"
  // Search state
  var [serachInput, setSearchInput] = useState('')
  var [search, serSearch] = useState({ longitude: 0, latitude: 0 })
  // Viewport state
  var [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 21.0164909,
    longitude: 105.7772149,
    zoom: 16
  })

  // Search funciton
  var searchMap = () => {
    axios
      .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${serachInput}.json?access_token=${token}`)
      .then(function (response) {
        serSearch({
          longitude: response.data.features[0].center[0],
          latitude: response.data.features[0].center[1]
        })
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(function () { })
    console.log(viewport.latitude)
    console.log(search.longitude)
  }

  // Return
  return (
    <div>
      <div className="container_map">
        <div style={{ width: '100%', height: '90vh' }}>
          <div className="mapbox">
            <ReactMapGL
              {...viewport}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              onViewportChange={viewport => setViewport(viewport)}
              mapboxApiAccessToken={token}
            >
              <div className="map__heading">
                <div className="map__search">
                  <input
                    type={'text'}
                    onChange={e => {
                      setSearchInput(e.target.value)
                    }}
                  />
                  <input type={'button'} onClick={searchMap} value={'search'} />
                </div>
              </div>
              {
                <Marker latitude={search.latitude} longitude={search.longitude} offsetLeft={-20} offsetTop={-30}>
                  <FaMapMarkerAlt className="map__locationSelect" />
                </Marker>
              }
            </ReactMapGL>
          </div>
        </div>
      </div>
      <button className="btnAdd">Thêm địa điểm</button>
    </div>
  )
}
export default Mapbox
