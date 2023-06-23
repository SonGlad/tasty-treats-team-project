import axios from 'axios';
import TemplateArticles from '../templates/articles.hbs';
const BASE_URl =
  'https://tasty-treats-backend.p.goit.global/api/recipes?limit=9';
const refs = {
  ratingValue: document.querySelector('.star-rating_value'),
  ratingValue: document.querySelector('.star-rating_value'),
};

async function getRecipes() {
  const response = await axios.get(BASE_URl);

  return response.data;
}

function renderCards() {}

// getRecipes().then(res => {
//   console.log(res);
//   const { results } = res;
//   console.log(results);
//   const rating = results.map(recipe => {
//     const rating = Math.floor(recipe.rating);
//     refs.ratingValue.textContent = recipe.rating;
//   });
// });
