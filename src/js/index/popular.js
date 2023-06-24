// Импорт функции TemplateArticles из соответствующего модуля
import TemplatePopular  from '../../templates/popular_receipts.hbs';

import { fetchPopular } from '../API_request/fetchpopular';

const popular = document.querySelector(".popular");
console.log(popular);

fetchPopular().then(date => {
    console.log(date);
    popular.insertAdjacentHTML('beforeend', TemplatePopular(date));
});

