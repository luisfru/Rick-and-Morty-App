import React,{useState,useEffect} from 'react'

function Character() {
    const [characters, SetCharacters] = useState([]);
    useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character")
      .then(Res => Res.json())
      .then(data => SetCharacters(data.results))
      .catch(error => console.log(error))
    },[])
    return (
        <div className="container" style={{textAlign:"center"}}>
      <div className="row">
        {characters.map((character, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card" style={{ minWidth: "200px" }}>
              <img className="card-img-top" src={character.image} alt={character.name} />
              <div className="card-body">
                <h5 className="card-title">Name: {character.name}</h5>
                <p className="card-text">Species: {character.species}</p>
                <p className="card-text">Status: {character.status}</p>
                <p className="card-text">Location: {character.location.name}</p>
                <hr />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
  export default Character;