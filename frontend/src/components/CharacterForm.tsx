import React, { useState, useEffect } from 'react';
import { createCharacter, updateCharacter } from '../api/client';

interface CharacterFormProps {
  fetchCharacters: () => void;
  characterToEdit?: any;
  setCharacterToEdit: (character: any) => void;
}

const CharacterForm: React.FC<CharacterFormProps> = ({ fetchCharacters, characterToEdit, setCharacterToEdit }) => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [homeworld, setHomeworld] = useState('');

  useEffect(() => {
    if (characterToEdit) {
      setName(characterToEdit.name);
      setSpecies(characterToEdit.species);
      setHomeworld(characterToEdit.homeworld);
    }
  }, [characterToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newCharacter = { name, species, homeworld };
    if (characterToEdit) {
      await updateCharacter(characterToEdit.id, newCharacter);
      setCharacterToEdit(null);
    } else {
      await createCharacter(newCharacter);
    }
    setName('');
    setSpecies('');
    setHomeworld('');
    fetchCharacters();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{characterToEdit ? 'Edit Character' : 'Create Character'}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 p-2 border border-gray-700 rounded-md w-full bg-gray-800 text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Species</label>
          <input type="text" value={species} onChange={(e) => setSpecies(e.target.value)} className="mt-1 p-2 border border-gray-700 rounded-md w-full bg-gray-800 text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Homeworld</label>
          <input type="text" value={homeworld} onChange={(e) => setHomeworld(e.target.value)} className="mt-1 p-2 border border-gray-700 rounded-md w-full bg-gray-800 text-white" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">{characterToEdit ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default CharacterForm;
