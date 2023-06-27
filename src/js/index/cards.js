// import axios from 'axios';
// import Handlebars from 'handlebars';
import TemplateArticles from '../../templates/cards.hbs';
import { fetchAllRecipes } from '../API_request/defaultRequest';
import setLocalStorage from '../utils/setLocalStor';
import { fillStars } from '../utils/fill-stars';
import { cardHearts } from '../utils/card-hearts';
import { pagination } from '/src/js/pagination';

const refs = {
  cardsList: document.querySelector('.cards_list'),
  ratingValue: document.querySelector('.star-rating_value'),
  pagination: document.querySelector('.pagination-wrapper'),
};

const FetchAllRecipes = new fetchAllRecipes();
const page = pagination.getCurrentPage();

async function renderCards() {
  FetchAllRecipes.setLimitValue();

  try {
    const response = await FetchAllRecipes.fetchRecipes();

    const results = response.results;

    refs.cardsList.insertAdjacentHTML('beforeend', TemplateArticles(results));

    pagination.reset(response.totalPages * response.perPage);
    setLocalStorage();
    fillStars();
    cardHearts();
  } catch (error) {
    console.log(error);
  }
}
renderCards();
