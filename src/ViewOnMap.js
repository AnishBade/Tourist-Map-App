
import MarkContext from './context/MarkContext';

import "leaflet/dist/leaflet.css";
import {Icon, divIcon} from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { getlocation} from './ApiService';
import React, { useEffect, useState, useContext } from 'react';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

export default function ViewOnMap() {
    const { mark, updateMark } = useContext(MarkContext);
    const customIcon1 = new Icon({
        iconUrl: require("./img/marker-icon.png"),
        iconSize: [45,45]
      });
    // console.log(mark);
  return (
    <>
        
        <h1>This is the present mark {mark[0].name}</h1>
        {/* <button onClick={updateMark}>Change mark</button> */}
    </>
    
    // <Marker position={mark.geocode} icon={customIcon1}>
    //     <Popup>
    //     <h2>
    //         {mark.name}
    //     </h2>
    //     </Popup>
    // </Marker>
  )
}
