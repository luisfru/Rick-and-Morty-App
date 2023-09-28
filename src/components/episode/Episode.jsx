import React, { useEffect, useState } from 'react'

function Episode() {
  const [Episode,Setepisode] = useState([])
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
    .then(res => res.json())
    .then(data =>Setepisode(data.results))
    .catch(error => console.log(error));
},[])
return (
<div className="container" style={{textAlign:"center"}}>
        {Episode.map((episode, index) => (
            <div key={index}>
              <p>{episode.name}</p>
              <p>{episode.air_date}</p>
              <p>{episode.episode}</p>
            </div>      
        ))}
    </div>
)
};
export default Episode;
