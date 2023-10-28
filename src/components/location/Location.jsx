import React, { useEffect, useState } from 'react'
import "./Location.css";
function Location() {
    const [location, setLocation] = useState([]);
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/location")
        .then(res => res.json())
        .then(data =>setLocation(data.results))
        .catch(error => console.log(error));
    },[])
  return (
    <div>
        <div className="container-location">
            {location.map((location, index) => (
                <div key={index} className='location'>
                    <p>TYPE: {location.type} : {location.name}</p>
                    <p>DIMENSION: {location.dimension}</p>
                </div>      
            ))}
        </div>
    </div>
  )
}
export default Location;
