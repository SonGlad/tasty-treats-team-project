import favoriTesCards from '../../templates/favorites_cards.hbs';
import favoritesCategory from '../../templates/favoritesCategory.hbs';
import { fillStars } from '../utils/fill-stars';
import { cardHearts } from '../utils/card-hearts';
import setLocalStorageF from '../utils/setLokalStorageFavor';
import { save, load, remove } from '../utils/localStorageJSON';
import { eventListenerFavorites } from '../modalRecipe';
import { pagination } from './pagination';

const renderBox = document.querySelector('.favorite-render-cards');
const favoriteButtonList = document.querySelector('.categories-list');
const displayNone = document.querySelector('.no-recipe-content');
let storedData = load('cardData');
let allCards;
let perPagerRozr;
let listOfCards;

const paginationConteiner = document.querySelector('.pagination-wrapper');
console.log(paginationConteiner);
if (document.title === 'Favorites' && !storedData) {
  paginationConteiner.classList.add('visually-hidden');
  return;
}

rend();

itemsPerPage();
if (storedData) {
  pagination.reset(storedData.length);
}

pagination.on('afterMove', event => {
  console.log('click');
  const currentPage = event.page;
  save('page', event.page);
  rend();
});

export function rend() {
  const uniqueCategories = [];
  const categorySet = new Set();

  if (load('cardData')) {
    storedData = load('cardData');
    allCards = storedData.length;

    if (document.title === 'Favorites' && storedData) {
      displayNone.style.display = 'none';

      if (storedData) {
        storedData.forEach(item => {
          if (!categorySet.has(item.category)) {
            categorySet.add(item.category);
            uniqueCategories.push({ category: item.category });
          }
        });
      }

      if (categorySet.size !== 0 && !categorySet.has('All categories')) {
        uniqueCategories.unshift({ category: 'All categories' });
        displayNone.style.display = 'none';
      }
    } else if (document.title === 'Favorites') {
      displayNone.style.display = 'flex';
    }

    const qwerty = forRend();
    if (document.title === 'Favorites') {
      renderBox.innerHTML = '';
      favoriteButtonList.innerHTML = '';

      console.log(qwerty);

      renderBox.insertAdjacentHTML('beforeend', favoriTesCards(qwerty));
      favoriteButtonList.insertAdjacentHTML(
        'beforeend',
        favoritesCategory(uniqueCategories)
      );
    }

    eventListenerFavorites();
    setLocalStorageF();
    fillStars();
    cardHearts();
    filtrFavoriteCard();
    removeFavorites();
  } else {
    if (document.title === 'Favorites') {
      renderBox.innerHTML = '';
      favoriteButtonList.innerHTML = '';
      displayNone.style.display = 'flex';
    }
    return;
  }
}

function filtrFavoriteCard() {
  const cardsListItems = document.querySelectorAll('.card_favourites');
  const cardsLisCategory = document.querySelectorAll('.categories-btn');
  cardsLisCategory.forEach(category => {
    category.addEventListener('click', event => {
      save('category', event.target.textContent);
      save('page', 1);

      rend();
      pagination.reset(storedData.length);
    });
  });
}

function removeFavorites() {
  const cardFavouritesBtns = document.querySelectorAll('.card_favourites_btn');

  cardFavouritesBtns.forEach(button => {
    button.addEventListener('click', () => {
      renderBox.innerHTML = '';
      favoriteButtonList.innerHTML = '';
      rend();
    });
  });
}

function forRend() {
  let storedData;
  if (load('cardData')) {
    storedData = load('cardData');
  }
  let page;
  if (load('page')) {
    page = load('page');
  } else {
    page = 1;
  }
  let category;
  if (load('category')) {
    category = load('category');
  } else {
    category = 'All categories';
  }

  let filterArr;
  if (category === 'All categories') {
    filterArr = storedData;
  } else {
    filterArr = storedData.filter(obj => obj.category === category);
  }
  if(document.title === "Favorites"){
    if (itemsPerPage() >= filterArr.length) {
      paginationConteiner.classList.add('visually-hidden');
    }
  }
  listOfCards = filterArr.slice(
    page * itemsPerPage() - itemsPerPage(),
    page * itemsPerPage()
  );

  console.log(listOfCards);
  return listOfCards;
}

function itemsPerPage() {
  if (window.innerWidth <= 768) {
    pagination.setItemsPerPage(9);
    perPagerRozr = 9;
    return perPagerRozr;
  } else {
    pagination.setItemsPerPage(12);
    perPagerRozr = 12;
  }
  return perPagerRozr;
}
