
import MapList from './MapList';

import React from 'react'

import ViewMap from './ViewMap';
import MarkState from './context/MarkState';
import MarkersState from './context/MarkersState';

function App() {

  
  return (
    <>

      <div className="row">
        <MarkState>
          <div className="col-md-8">
            <MarkersState>
              <div style={{ height: '100vh' }}>
                <ViewMap />
              </div>
            </MarkersState>
          </div>

          <div className="col-md-4">
            <MarkersState>
              <div style={{ maxHeight: '100vh', overflowY: 'auto' }}>
                <MapList />
              </div>
            </MarkersState>
          </div>
        </MarkState>
      </div>


    </>
    
     
  );
}

export default App;
