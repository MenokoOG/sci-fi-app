import React, { useEffect, useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterForm from './components/CharacterForm';
import { getCharacters } from './api/client';

const App: React.FC = () => {
  const [characters, setCharacters] = useState([]);
  const [characterToEdit, setCharacterToEdit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCharacters = async () => {
    const data = await getCharacters();
    setCharacters(data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setCharacterToEdit(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-900 text-white p-8">
      <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">Add Character</button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-dark-800 p-6 rounded-lg">
            <CharacterForm fetchCharacters={fetchCharacters} characterToEdit={characterToEdit} setCharacterToEdit={setCharacterToEdit} closeModal={closeModal} />
          </div>
        </div>
      )}
      <CharacterList characters={characters} fetchCharacters={fetchCharacters} setCharacterToEdit={setCharacterToEdit} openModal={openModal} />
    </div>
  );
};

export default App;
