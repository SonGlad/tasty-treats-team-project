// import axios from 'axios';
// import Handlebars from 'handlebars';
import TemplateArticles from '../../templates/cards.hbs';
import { fetchAllRecipes } from '../API_request/defaultRequest';
import setLocalStorage from '../utils/setLocalStor';
import {fillStars} from '../utils/fill-stars';
import {cardHearts} from '../utils/card-hearts'

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


