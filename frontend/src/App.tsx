import React, { useEffect, useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterForm from './components/CharacterForm';
import { getCharacters } from './api/client';

const App: React.FC = () => {
  const [characters, setCharacters] = useState([]);
  const [characterToEdit, setCharacterToEdit] = useState(null);

  const fetchCharacters = async () => {
    const data = await getCharacters();
    setCharacters(data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <CharacterForm fetchCharacters={fetchCharacters} characterToEdit={characterToEdit} setCharacterToEdit={setCharacterToEdit} />
      <CharacterList characters={characters} fetchCharacters={fetchCharacters} setCharacterToEdit={setCharacterToEdit} />
    </div>
  );
};

export default App;
