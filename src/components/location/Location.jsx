import React, { useEffect, useState } from 'react'

function Location() {
    const [Location,Setlocation] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/location")
        .then(res => res.json())
        .then(data =>Setlocation(data.results))
        .catch(error => console.log(error));
    },[])
  return (
    <div className="container" style={{textAlign:"center"}}>
        {Location.map((location, index) => (
            <div key={index}>
                <img src={location.url} alt={location.url} />
                <p>{location.residents.name}</p>
                <p>{location.type} : {location.name}</p>
                <p>{location.dimension}</p>       
            </div>      
        ))}
    </div>
  )
}
export default Location;
