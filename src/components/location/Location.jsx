import React, { useEffect, useState } from 'react'
import "./Location.css";
function Location() {
    const [location, setLocation] = useState([]);
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/location")
        .then(res => res.json())
        .then(data =>setLocation(data.results))
        .catch(error => console.log(error));
    },[])
    useEffect(() =>{
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => setCharacters(data.results))
        .catch(error =>console.log(error));
    })
  return (
    <div>
        <div className="container-location">
            {location.map((location, index) => (
                <div key={index} className='location'>
                    <p>TYPE: {location.type} : {location.name}</p>
                    <p>DIMENSION: {location.dimension}</p>
                    <h3>RESIDENTS:</h3>
                    {location.residents.map((residentUrl,residentIndex) => {
                        const getIdFromUrl = (url) => {
                            const parts = url.split('/');
                            return parseInt(parts[parts.length -1]);
                    }
                    const id = getIdFromUrl(residentUrl)
                    const character = characters.find((char) => char.id === id)
                    if (character) {
                        return <img key={residentIndex} src={character.image} alt={character.name}/>
                    }
                    return null;
                })}   
            </div>      
        ))}
        </div>
    </div>
  )
}
export default Location;
