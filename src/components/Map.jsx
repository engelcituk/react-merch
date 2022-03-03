import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from 'react'

const Map = ( {data} ) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBDItVqQ-MV8P_JJluFkbVWlB0PeAAuuN0'
      })
    const mapStyles={
        height:"50vh",
        with:"100%",    
    }
    const defaultCenter={
        lat: data.lat,
        lng: data.lng
    }
    
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map)
    }, [])
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
      return isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={defaultCenter}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
}

export default Map