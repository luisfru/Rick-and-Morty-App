import React, { useEffect, useState } from 'react'
import "./Episode.css";

function Episode() {
  const [episode, setEpisode] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
    .then(res => res.json())
    .then(data => setEpisode(data.results))
    .catch(error => console.log(error));
},[])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error));
  },[])
return (
<div className="container-episode">
        {episode.map((episode, index) => (
            <div key={index} className="episode">
              <p>{episode.episode}: {episode.name}</p>
              <p>Air date: {episode.air_date}</p>
              <p>Characters: {episode.characters.map((residentUrl, residentIndex) => {
                  const getIdFromUrl = (url) => {
                    const parts = url.split('/');
                    return parseInt(parts[parts.length - 1]);
                  }
                  const id = getIdFromUrl(residentUrl)
                  const character = characters.find((char) => char.id === id)
                  if (character) {
                    return character.name
                  }
                  return null
                }).filter(name => name !== null).join(', ')}
              </p>
            </div>      
        ))}
    </div>
)
};
export default Episode;
