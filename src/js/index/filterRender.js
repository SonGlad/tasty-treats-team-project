import debounce from 'lodash.debounce';
import { fetchAllRecipes } from '../API_request/defaultRequest';
import TemplateArticles from '../../templates/cards.hbs';
import { fillStars } from '../utils/fill-stars';
import { cardHearts } from '../utils/card-hearts';
import setLocalStorage from '../utils/setLocalStor';
import { pagination } from '/src/js/pagination';
import { eventListener } from '../modalRecipe';
import { Notify } from 'notiflix';


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
  pagination: document.querySelector('.pagination-wrapper'),
  customSelect: document.querySelectorAll('.custom-select'),
  loaderTxt: document.querySelector('.loader-txt'),
  imgOops: document.querySelector('.notfound-cook'),
};


const FetchByFilter = new fetchAllRecipes();
FetchByFilter.setLimitValue();
const limit = FetchByFilter.setLimitValue();
const page = pagination.getCurrentPage();


resetPagination();
renderCards(page);
resetPagination();


pagination.on('afterMove', async event => {
  const currentPage = event.page;

  try {
    renderCards(currentPage);
  } catch (error) {
    console.log(error);
    Notify.failure('Something went wrong. Please try again');
  }
});


refs.seacrhInp.addEventListener(
  'input',
  debounce(() => {
    const query = String(refs.seacrhInp.value.trim());

    searchFetch(query);
  }, 300)
);


refs.timeFilter.addEventListener('click', timeFetch);
refs.areaFilter.addEventListener('click', areaFetch);
refs.ingredientsFilter.addEventListener('click', ingredientsFetch);
refs.categories.addEventListener('click', categoriesFetch);


function searchFetch(query) {
  FetchByFilter.setSearchValue(query);
  resetPagination();
};


async function renderCards(page) {
  try {
    hide();
    resetCards();

    refs.loader.classList.remove('visually-hidden');
    refs.loaderTxt.classList.remove('visually-hidden');
    refs.imgOops.classList.add('visually-hidden');

    FetchByFilter.setPage(page);

    const response = await FetchByFilter.fetchRecipes();
    const results = response.results;

    if (results.length === 0) {
      throw new Error();
    } else {
      refs.conCards.classList.add('visually-hidden');
      refs.imgOops.classList.add('visually-hidden');
    }

    const roundedData = results.map(result => {
    const ratingValue = Math.round(result.rating * 10) / 10;

      return {
        ...result,
        rating: ratingValue,
        notFound:
          'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg',
      };
    });

    results.splice(0, results.length, ...roundedData);
    refs.cardsList.innerHTML = TemplateArticles(results);
    refs.loader.classList.add('visually-hidden');
    refs.loaderTxt.classList.add('visually-hidden');

    show();
    eventListener();
    setLocalStorage();
    fillStars();
    cardHearts();
    return response;

  } catch (err) {
    refs.conCards.classList.remove('visually-hidden');
    refs.imgOops.classList.remove('visually-hidden');

    refs.loader.classList.add('visually-hidden');
    refs.loaderTxt.classList.add('visually-hidden');
    Notify.failure('Something went wrong. Please try again');
    console.log(err);
  }
};


function timeFetch(event) {
  if (event.target.tagName === 'BUTTON') {
    const time = parseInt(event.target.textContent);

    FetchByFilter.setTimeValue(time);
    resetPagination();
  } else {
    return;
  }
};


function areaFetch(event) {
  try {
    if (event.target.tagName === 'BUTTON') {
      const area = event.target.textContent;

      FetchByFilter.setAreaValue(area);
      // renderCards(page);
      resetPagination();
    }
  } catch (err) {
    Notify.failure('Something went wrong. Please try again');
    console.log(err);
  }
};


function ingredientsFetch(event) {
  if (event.target.tagName === 'BUTTON') {
    const ingredient = String(event.target.id);
    FetchByFilter.setIngredientsValue(ingredient);
    resetPagination();
  }
};


function categoriesFetch(event) {
  const categories = event.target.textContent;
  const allCategories = event.target.id;

  if (allCategories === 'all-category-btn') {
    refs.seacrhInp.value = '';
    refs.customSelect.forEach(element => {
      element.querySelector('.elem-prev').textContent = 'Select';
    });
    FetchByFilter.resetCategorie();
    resetPagination();
    return;
  }
  FetchByFilter.setCategoryValue(categories);
  resetPagination();
};


function resetCards() {
  refs.cardsList.innerHTML = '';
};


function resetPagination() {
  try {
    renderCards(page).then(response => {
      if (
        !response ||
        response.results.length < limit ||
        response.totalPages < 2 ||
        response.totalPages === null
      ) {
        hide();
      } else {
        show();
        pagination.reset(response.totalPages * response.perPage);
      }
    });
  } catch (error) {
    console.log(error);
    Notify.failure('Something went wrong. Please try again');
  }
};


function show() {
  refs.pagination.classList.add('show');
  refs.pagination.classList.remove('hide');
};


function hide() {
  refs.pagination.classList.add('hide');
  refs.pagination.classList.remove('show');
};
