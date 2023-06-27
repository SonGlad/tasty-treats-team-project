import debounce from "lodash.debounce";
import {fetchAllRecipes} from '../API_request/defaultRequest';
import TemplateArticles from '../../templates/cards.hbs';
import {fillStars} from '../utils/fill-stars';
import { cardHearts } from '../utils/card-hearts';
import setLocalStorage from '../utils/setLocalStor';
import { pagination } from '/src/js/pagination';
import {eventListener} from '../modalRecipe';

const refs = {
    seacrhInp: document.querySelector('.inp-search'),
    searchBtn: document.querySelector('.btn-search'),
    timeFilter: document.querySelector('#timesearch'),
    areaFilter: document.querySelector('#arealist'),
    ingredientsFilter: document.querySelector('#ingredients'),
    cardsList: document.querySelector('.cards_list'),
    categories: document.querySelector('.category-container'),
    loader: document.querySelector('.loader'),
    conCards: document.querySelector('.notfound-cook'),
}

const FetchByFilter = new fetchAllRecipes();
FetchByFilter.setLimitValue();

const page = pagination.getCurrentPage();

renderCards(page);

pagination.on('afterMove', async event => {
  const currentPage = event.page;

  try {
    renderCards(currentPage);
  } catch (error) {
    console.log(error);
  }
});

refs.seacrhInp.addEventListener(
  'input',
  debounce(() => {
    const query = String(refs.seacrhInp.value.trim());

    searchFetch(query);
    console.log(query);
  }, 300)
);

refs.timeFilter.addEventListener('click', timeFetch);
refs.areaFilter.addEventListener('click', areaFetch);
refs.ingredientsFilter.addEventListener('click', ingredientsFetch);
refs.categories.addEventListener('click', categoriesFetch);

function searchFetch(query) {
  FetchByFilter.setSearchValue(query);
  renderCards();
  resetPagination();
}

async function renderCards(page) {
    try{
      resetCards();
      refs.loader.classList.remove('visually-hidden');
    
      FetchByFilter.setPage(page);
    
      const response = await FetchByFilter.fetchRecipes();
    
      const results = response.results;

      if (results.length === 0){
          throw new Error
        }else{
            refs.conCards.classList.add('visually-hidden')
        }
    
      const roundedData = results.map(result => {
        const ratingValue = Math.round(result.rating * 10) / 10;
        console.log(ratingValue);
        // Округляем значение id
        // Возвращаем новый объект с округленным значением id
        return { ...result, rating: ratingValue };
      });
      results.splice(0, results.length, ...roundedData);
    
      refs.cardsList.innerHTML = TemplateArticles(results);
    
      refs.loader.classList.add('visually-hidden');
    
      eventListener();
      setLocalStorage();
      fillStars();
      cardHearts();

       return response;
    }catch(err){
    refs.conCards.classList.remove('visually-hidden')
    refs.loader.classList.add('visually-hidden');

    console.log('No cards found');
    }
};

function timeFetch(event) {
  const time = parseInt(event.target.textContent);

  console.log(time);
  FetchByFilter.setTimeValue(time);
  renderCards();
  resetPagination();
}

function areaFetch(event) {
    try {
        const area = event.target.textContent;
        FetchByFilter.setAreaValue(area);
        renderCards(page)
        resetPagination();
        console.log(area);
    } catch(err){

    }
}

function ingredientsFetch(event) {
  const ingredient = String(event.target.id);

  FetchByFilter.setIngredientsValue(ingredient);
  renderCards();
  resetPagination();
  console.log(ingredient);
};

function categoriesFetch(event) {
  const categories = event.target.textContent;

  const allCategories = event.target.id;

  if (allCategories === 'all-category-btn') {
    FetchByFilter.resetCategorie();
    renderCards();
    resetPagination();
    return;
  }
  FetchByFilter.setCategoryValue(categories);
  renderCards(page);
  resetPagination();
};


function resetCards() {
  refs.cardsList.innerHTML = '';
};


function resetPagination() {
  renderCards().then(response =>
    pagination.reset(response.totalPages * response.perPage)
  );
};
