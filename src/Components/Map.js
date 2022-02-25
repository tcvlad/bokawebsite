import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import FireBase from "./Firebase";
import database from 'firebase/compat/database';

const MapContainer = () => {
  const [sensorList, setSensorList] = useState();
  //fetches the data from realtime db on firebase
  useEffect(()=>{
    const sensorRef = FireBase.database().ref("sensors");
    sensorRef.on("value", (snapshot)=>{
      const sensors = snapshot.val();
      const sensorList = [];
      for(let id in sensors){
        sensorList.push(sensors[id]);
      }
      setSensorList(sensorList)
    })
}, []);

  const mapStyles = {        
    height: "80vh",
    width: "100%",
  };
  
  const defaultCenter = {
      lat: 33.6459,
      lng: -117.8428
  }

  const [ selected, setSelected ] = useState({});

  const onSelect = item => {
    setSelected(item);
  }

  console.log(sensorList);
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBDl7Fh7j9laMAUSMFiYxfAwkhuz_hjGSA'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={18}
          scrollWheelZoom={false}
          center={defaultCenter}>
            {
              sensorList? sensorList.map(item => {
                return (
                <Marker key={item.name} position={item.gps} onClick={() => onSelect(item)}/>
                )
              }) :
              ''
            }
            {
              selected.gps && 
              (
                <InfoWindow
                position={selected.gps}
                clickable={true}
                onCloseClick={() => setSelected({})}
              >
                <p>Name: {selected.name}
                <br/>Temperature: {selected.temp}°C
                <br/>Humidity: {selected.humidity}
                <br/>CO2: {selected.co2}ppm
                </p>
                
              </InfoWindow>
              )
            }
          </GoogleMap>
          
     </LoadScript>
     
  )
}

export default MapContainer;