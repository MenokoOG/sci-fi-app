import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://sci-fi-app-backend.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCharacters = async () => {
  const response = await apiClient.get('/characters/');
  return response.data;
};

export const createCharacter = async (character: any) => {
  const response = await apiClient.post('/characters/', character);
  return response.data;
};

export const updateCharacter = async (id: string, character: any) => {
  const response = await apiClient.put(`/characters/${id}`, character);
  return response.data;
};

export const deleteCharacter = async (id: string) => {
  const response = await apiClient.delete(`/characters/${id}`);
  return response.data;
};


