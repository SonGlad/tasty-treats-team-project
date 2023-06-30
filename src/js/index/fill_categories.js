import { fetchCategories } from '../API_request/fetchCategories';
import TemplateCategories from '../../templates/categories.hbs';
import { Notify } from 'notiflix';


const refs = {
  categroyList: document.querySelector('.category-list'),
};


async function fillCategoriesList() {
  try {
    const categories = await fetchCategories();
    renderCategoriesList(categories);
  } catch (err) {
    console.log(err);
    Notify.failure('Something went wrong. Please try again');
  }
};


fillCategoriesList();


function renderCategoriesList(categories) {
  refs.categroyList.insertAdjacentHTML(
    'beforeend',
    TemplateCategories(categories)
  );
};
