import React from 'react';
import { deleteCharacter } from '../api/client';

interface CharacterListProps {
  characters: any[];
  fetchCharacters: () => void;
  setCharacterToEdit: (character: any) => void;
}

const CharacterList: React.FC<CharacterListProps> = ({ characters, fetchCharacters, setCharacterToEdit }) => {
  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    fetchCharacters();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-200">Character List</h1>
      <ul>
        {characters.map((character: any) => (
          <li key={character.id} className="mb-2 bg-gray-800 p-4 rounded">
            <div className="flex justify-between items-center text-white">
              <span>{character.name} - {character.species} - {character.homeworld}</span>
              <div>
                <button onClick={() => setCharacterToEdit(character)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button onClick={() => handleDelete(character.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
