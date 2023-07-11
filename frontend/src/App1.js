//This file is for testing purpose
import "leaflet/dist/leaflet.css";
import MapList from './MapList';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import {Icon, divIcon} from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

function App() {

  const markers = [
    {
      geocode: [48.86,2.3522],
      popUp: "Hello, I am pop up 1"
    },
    {
      geocode: [48.85,2.3522],
      popUp: "Hello, I am pop up 2"
    },
    {
      geocode: [48.855,2.34],
      popUp: "Hello, I am pop up 3"
    }
  ];
  const customIcon = new Icon({
    iconUrl: require("./img/marker-icon.png"),
    iconSize: [38,38]
  });

  const createCustomClusterIcon = (cluster) =>{
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster"
    });
  };
  return (

    <div className='row h-100'>
      <div className="col-md-8">
        <MapContainer center={[ 48.8566,2.2522]} zoom={13}>
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
                      {marker.popUp}
                    </h2>
                  </Popup>
                </Marker>
              ))
              }
            </MarkerClusterGroup>
            
        </MapContainer>
      </div>
      <div className="col-md-4">
        <MapList />
      </div>
      
    </div>
    
  );
}

export default App;
