import { getFullRecipe } from './API_request/fetchFullRecipe';

const recipe = document.querySelector('.modal-recipe');

async function showRecipe() {
  const res = await getFullRecipe();
  console.log(res);
}
showRecipe();
