// import axios from 'axios';
// import Handlebars from 'handlebars';
import TemplateArticles from '../../templates/cards.hbs';
import { fetchAllRecipes } from '../API_request/defaultRequest';

const refs = {
  cardsList: document.querySelector('.cards_list'),
  ratingValue: document.querySelector('.star-rating_value'),
  ratingValue: document.querySelector('.star-rating_value'),
};

const FetchAllRecipes = new fetchAllRecipes();

async function renderCards() {
  FetchAllRecipes.setLimitValue();
  const response = await FetchAllRecipes.fetchRecipes();
  const results = response.results;
  //   const data = {
  //     recipes: results,
  //     svgContent: `<use href="./images/icons/SPRITE.svg#icon-Star-1"></use>`,
  //   };

  //   const template = Handlebars.compile(TemplateArticles());
  //   const html = template(data);

  //   refs.cardsList.insertAdjacentHTML('beforeend', html);
  console.log(results);
  refs.cardsList.insertAdjacentHTML('beforeend', TemplateArticles(results));
}
renderCards();





// getRecipes().then(res => {
//   console.log(res);
//   const { results } = res;
//   const rating = results.map(recipe => {
//     const cardStarRatings = document.getElementsByClassName('card_star-rating');
//     console.log(recipe.rating);
//     const ratingFromBackend = recipe.rating;

//     const roundedRating = Math.round(ratingFromBackend);

//     Array.from(cardStarRatings).forEach(cardStarRating => {
//       const stars = cardStarRating.getElementsByClassName('star');

//       const ratingValue = cardStarRating.querySelector('.star-rating_value');
//       ratingValue.textContent = ratingFromBackend;

//       Array.from(stars).forEach((star, index) => {
//         if (index < roundedRating) {
//           star.classList.add('filled');
//         } else {
//           star.classList.remove('filled');
//         }
//       });
//     });
//   });
// });
