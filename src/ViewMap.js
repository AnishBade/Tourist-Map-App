import MarkContext from './context/MarkContext';
import MarkState from './context/MarkState';
import './styles.css';
import "leaflet/dist/leaflet.css";
import {Icon, divIcon} from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { getlocation} from './ApiService'
import React, { useEffect, useState, useContext } from 'react'
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import MarkersContext from './context/MarkersContext';
import MarkersState from './context/MarkersState';

export default function ViewMap() {
    const { mark, updateMark } = useContext(MarkContext);

    const {markers} = useContext(MarkersContext);

  //   const [locations,setLocations] = useState([])
  // useEffect(()=>{
  //   let mount = true
  //   getlocation()
  //   .then(res=>{
  //   setLocations(res)
  //   return() => mount =false
  //   })    
  // }, [])
  // const markers = []
  // for (const obj of locations) {
  //   // Extract the coordinates from the "coordinates" field
  //   const regex = /POINT \(([-.\d]+) ([-.\d]+)\)/;
  //   const match = obj.coordinates.match(regex);
  //   const latitude = parseFloat(match[1]);
  //   const longitude = parseFloat(match[2]);

  //   // Create a new object with the extracted coordinates
  //   const geocode = [latitude, longitude];
  //   const name = obj.name

  //   // Create the final object
  //   const finalObject = {
  //     geocode: geocode,
  //     name: name

  //   };

  //   markers.push(finalObject);

    
  // }


  const markers1 = [
    {
      geocode: [27.71183047029497, 85.34852400276668],
      name: "Pashupati Temple"
    }
    // ,
    // {
    //   geocode: [27.704464681781328, 85.30721372739679],
    //   name: "Hello, I am pop up 2"
    // },
    // {
    //   geocode: [27.706777727283136, 85.31026774027998],
    //   name: "Hello, I am pop up 3"
    // }
  ];
  // console.log(mark);

  const customIcon = new Icon({
    iconUrl: require("./img/marker-icon.png"),
    iconSize: [38,38]
  });
  const customIconBlue = new Icon({
    iconUrl: require("./img/marker-icon-blue.png"),
    iconSize: [45,45]
  });

  const createCustomClusterIcon = (cluster) =>{
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster"
    });
  };
  return (
   
      <MapContainer center={[27.7172, 85.3240]} zoom={13}>
                    <TileLayer 
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <MarkerClusterGroup 
                        chunkedLoading
                        iconCreateFunction={createCustomClusterIcon}
                      >
                        {markers.map(marker => (
                          <Marker position={marker.geocode} icon={customIcon}>
                            <Popup>
                              <h2>
                                {marker.name}
                              </h2>
                            </Popup>
                          </Marker>
                        ))
                        }
                        
                      </MarkerClusterGroup>
                      <MarkerClusterGroup>
                          {mark.map(mark1 => (
                              <Marker position={mark1.geocode} icon={customIconBlue}>
                              <Popup>
                                  <h2>
                                  {mark1.name}
                                  </h2>
                              </Popup>
                              </Marker>
                          ))
                          }
                      </MarkerClusterGroup>
                      
          </MapContainer>
    
    
  )
}
