// import axios from 'axios';
// import Handlebars from 'handlebars';
import TemplateArticles from '../../templates/cards.hbs';
import { fetchAllRecipes } from '../API_request/defaultRequest';
import setLocalStorage from '../utils/setLocalStor';

const refs = {
  cardsList: document.querySelector('.cards_list'),
  ratingValue: document.querySelector('.star-rating_value'),
};

const FetchAllRecipes = new fetchAllRecipes();

async function renderCards() {
  FetchAllRecipes.setLimitValue();

  const response = await FetchAllRecipes.fetchRecipes();

  const results = response.results;

  console.log(results);

  refs.cardsList.insertAdjacentHTML('beforeend', TemplateArticles(results));

  setLocalStorage();
  fillStars();
  cardHearts();

}
renderCards();
function fillStars() {
  const starRatings = document.querySelectorAll('.card_star-rating');
  starRatings.forEach(starRating => {
    // Получаем рейтинг из элемента <p> с классом 'star-rating_value'
    const rating = parseFloat(
      starRating.querySelector('.star-rating_value').textContent
    );

    // Округляем рейтинг до ближайшего целого числа
    const roundedRating = Math.round(rating);

    // Получаем все звездочки (элементы <svg>) внутри текущего 'card_star-rating'
    const stars = starRating.querySelectorAll('.star');

    // Проходимся по каждой звезде и добавляем класс 'filled', если ее индекс меньше округленного рейтинга
    stars.forEach((star, index) => {
      if (index < roundedRating) {
        star.classList.add('filled');
      }
    });
  });
}
function cardHearts() {
  const cardFavouritesBtns = document.querySelectorAll('.card_favourites_btn');

  cardFavouritesBtns.forEach(button => {
    button.addEventListener('click', () => {
      const icons = button.querySelectorAll('.card_heart');

      icons.forEach(icon => {
        icon.classList.toggle('heart-filled');
      });

      button.blur();
    });
  });
}
