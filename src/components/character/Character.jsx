import React,{useState,useEffect} from 'react'
import './Character.css';
function Character() {
    const [characters, SetCharacters] = useState([]);
    useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character")
      .then(Res => Res.json())
      .then(data => SetCharacters(data.results))
      .catch(error => console.log(error))
    },[])
    return (
        <div className="container">
          {characters.map((character, index) => (
            <div key={index} className='card'>
              <div className="card-image">
                <img src={character.image} alt={character.name} />
                </div>
              <div className="info">
                  <h5>Name: {character.name}</h5>
                  <p>Species: {character.species}</p>
                  <p>Status: {character.status}</p>
                  <p>Location: {character.location.name}</p>
                </div>
              </div>
          ))}
        </div>
  );
};
  export default Character;