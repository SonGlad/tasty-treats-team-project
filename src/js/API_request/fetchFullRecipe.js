import axios from 'axios';

const ID = '6462a8f74c3d0ddd28897fbc';
const BASE_URL = `https://tasty-treats-backend.p.goit.global/api/recipes/${ID}`;

export async function getFullRecipe() {
  const res = await axios.get(BASE_URL);
  if (!res.statusText) {
    throw new Error(res);
  }
  return res.data;
}
