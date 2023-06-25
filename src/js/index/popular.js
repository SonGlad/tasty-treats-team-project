// Импорт функции TemplateArticles из соответствующего модуля
import TemplatePopular from '../../templates/popular_receipts.hbs';

import { fetchPopular } from '../API_request/fetchpopular';

const popular = document.querySelector('.container-recipies');
const popular1 = document.querySelector('.container-recipies1');

fetchPopular().then((recipes) => {
  popular.insertAdjacentHTML('beforeend', TemplatePopular(recipes));
  popular1.insertAdjacentHTML('beforeend', TemplatePopular(recipes));
});