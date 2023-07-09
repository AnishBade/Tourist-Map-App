
import { useState } from "react";
import MarkContext from "./MarkContext";
const MarkState = (props) =>{
    
    const m = [
        { id:1,
          geocode: [27.703249623217022, 85.31310556573212],
          name: "New Road Gate"
        }
    ]
    const [mark, setMark] = useState(m);

    const updateMark = (id,geocode,name) => {
        const updatedMark = [
          { id:id,
            geocode: geocode,
            name: name
          }
        ];
        setMark(updatedMark);
    };

    return (

        <MarkContext.Provider value={{mark,updateMark}}>
            {props.children}
        </MarkContext.Provider>
    )
}

export default MarkState;
