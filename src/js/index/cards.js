// import axios from 'axios';
// import TemplateArticles from '../templates/articles.hbs';
// const BASE_URl =
//   'https://tasty-treats-backend.p.goit.global/api/recipes?limit=9';
// const refs = {
//   ratingValue: document.querySelector('.star-rating_value'),
//   ratingValue: document.querySelector('.star-rating_value'),
// };

// async function getRecipes() {
//   const response = await axios.get(BASE_URl);

//   return response.data;
// }

// function renderCards() {}

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
