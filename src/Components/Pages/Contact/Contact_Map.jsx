import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 22.356852,
  lng: 91.783180
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD8_8cWPDYP1LKn-NN-wW21HUju1fLa_GM"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)