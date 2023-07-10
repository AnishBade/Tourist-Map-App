import React, { useState, useContext } from 'react'
import { getlocation} from './ApiService'
import MarkContext from './context/MarkContext';
import MarkersContext from './context/MarkersContext';

export default function MapList() {

    const {mark,updateMark} = useContext(MarkContext);
    const {markers, updateMarkers} = useContext(MarkersContext);

    const [searchQuery, setSearchQuery] = useState('');
    // const [filteredData, setFilteredData] = useState([]);

    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };
    
    const filteredData = markers.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

    const handleClick = (id,geocode,name) => {
      // Call the updateMark function when the button is clicked
      return () => {
        updateMark(id,geocode,name);
      };
      
    };


  return (
    <>
        
        <h3>Present blue mark: {mark[0].name}</h3>
        <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by name..."
      />
      
        
        <table border={"2px"} cellPadding={"10px"} className="table table-bordered table-striped">
            <thead>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Option</td>
                
              </tr>
            </thead>
            <tbody>
              {filteredData.map(location=>{
                return <tr key = {location.id}>
                          <td>{location.id}</td>
                          <td>{location.name}</td>
                          <td><button  className="btn btn-primary" onClick={handleClick(location.id,location.geocode,location.name)}>View on map</button></td>
                        </tr>
              })}
              
            </tbody>
        </table>
    </>
  )
}
