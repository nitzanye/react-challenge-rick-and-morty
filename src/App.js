import './App.css';
import React, { useEffect, useState } from 'react';
import { characters as charactersRaw } from './data/characters';
import { Card, Nav } from './components';

function App() {
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setFilteredCharacters(charactersRaw);
    }, 2000);
  }, []);

  const searchCharacter = (searchTerm) => {
    if (searchTerm === '') return setFilteredCharacters(charactersRaw);

    const filtered = charactersRaw.filter((character) =>
      character.full_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  const removeCharacter = (characterToRemove) => {
    setFilteredCharacters(
      filteredCharacters.filter(
        (character) => character.full_name !== characterToRemove.full_name
      )
    );
  };

  const handleFavorite = (likedCharacter) => {
    const updatedCharacters = filteredCharacters.map((character) =>
      character.full_name === likedCharacter.full_name
        ? { ...character, liked: !character.liked }
        : character
    );

    updatedCharacters.sort((a, b) => {
      if (a.liked === b.liked) return 0;
      return a.liked ? -1 : 1;
    });

    setFilteredCharacters(updatedCharacters);
  };

  return (
    <div className='App'>
      <Nav
        searchCharacter={searchCharacter}
        setSearch={setSearch}
        search={search}
      />
      <section className='main'>
        {filteredCharacters.length === 0 ? (
          <p>Loading...</p>
        ) : (
          filteredCharacters.map((character) => (
            <Card
              key={character.full_name}
              character={character}
              onRemove={removeCharacter}
              onChange={handleFavorite}
            />
          ))
        )}
      </section>
    </div>
  );
}

export default App;
