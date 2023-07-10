
import React, { useEffect, useState, useContext } from 'react'
import MarkersContext from "./MarkersContext";
import { getlocation} from '../ApiService'

const MarkersState = (props) =>{

    const [locations,setLocations] = useState([])
  useEffect(()=>{
    let mount = true
    getlocation()
    .then(res=>{
    setLocations(res)
    return() => mount =false
    })    
  }, [])
  const markers = []
  for (const obj of locations) {
    // Extract the coordinates from the "coordinates" field
    const regex = /POINT \(([-.\d]+) ([-.\d]+)\)/;
    const match = obj.coordinates.match(regex);
    const longitude = parseFloat(match[1]);
    const latitude = parseFloat(match[2]);

    // Create a new object with the extracted coordinates
    const geocode = [latitude, longitude];
    const name = obj.name;
    const id = obj.id;

    // Create the final object
    const finalObject = {
      geocode: geocode,
      name: name,
      id:id,

    };

    markers.push(finalObject);

    
  }
    // console.log(markers[0].geocode);

    return (

        <MarkersContext.Provider value={{markers}}>
            {props.children}
        </MarkersContext.Provider>
    )
}

export default MarkersState;
