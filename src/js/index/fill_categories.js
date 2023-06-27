import { fetchCategories } from '../API_request/fetchCategories';
import TemplateCategories from '../../templates/categories.hbs';
const refs = {
  categroyList: document.querySelector('.category-list'),
};

async function fillCategoriesList() {
  try {
    const categories = await fetchCategories();
    console.log(categories);
    renderCategoriesList(categories);
  } catch (err) {
    console.log(err);
  }
}
fillCategoriesList();

function renderCategoriesList(categories) {
  refs.categroyList.insertAdjacentHTML(
    'beforeend',
    TemplateCategories(categories)
  );
}
