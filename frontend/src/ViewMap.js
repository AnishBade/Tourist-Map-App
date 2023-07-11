import MarkContext from './context/MarkContext';
import MarkState from './context/MarkState';
import './styles.css';
import "leaflet/dist/leaflet.css";
import {Icon, divIcon} from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { getlocation} from './ApiService';
import React, { useEffect, useState, useContext } from 'react';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import MarkersContext from './context/MarkersContext';
import MarkersState from './context/MarkersState';

export default function ViewMap() {
    const { mark, updateMark } = useContext(MarkContext);

    const {markers} = useContext(MarkersContext);



 
  const customIcon = new Icon({
    iconUrl: require("./img/marker-icon.png"),
    iconSize: [25,25]
  });
  const customIconBlue = new Icon({
    iconUrl: require("./img/marker-icon-blue.png"),
    iconSize: [35,35]
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
