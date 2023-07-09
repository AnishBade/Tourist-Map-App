import React, { useEffect, useState, useContext } from 'react'
import { getlocation} from './ApiService'
import MarkContext from './context/MarkContext';
import MarkState from './context/MarkState';
import ViewOnMap from './ViewOnMap';
import MarkersContext from './context/MarkersContext';
import MarkersState from './context/MarkersState';

export default function MapList() {

    const {mark,updateMark} = useContext(MarkContext);
    const {markers, updateMarkers} = useContext(MarkersContext);
  
    const handleClick = (id,geocode,name) => {
      // Call the updateMark function when the button is clicked
      return () => {
        updateMark(id,geocode,name);
      };
      
    };


  return (
    <>
      
        {/* <ViewOnMap /> */}
      
        
        <h1>This is the present mark {mark[0].name}</h1>
        <h3>Locations list</h3>
        
        <table border={"2px"} cellPadding={"10px"}>
            <thead>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Option</td>
                
              </tr>
            </thead>
            <tbody>
              {markers.map(location=>{
                return <tr key = {location.id}>
                          <td>{location.id}</td>
                          <td>{location.name}</td>
                          <td><button onClick={handleClick(location.id,location.geocode,location.name)}>View on map</button></td>
                        </tr>
              })}
              
            </tbody>
        </table>
    </>
  )
}
