
import favoriTesCards from '../../templates/favorites_cards.hbs';
import favoritesCategory from '../../templates/favoritesCategory.hbs';
import {fillStars} from '../utils/fill-stars';
import {cardHearts} from '../utils/card-hearts';
import setLocalStorage from '../utils/setLocalStor';
import { save, load, remove } from '../utils/localStorageJSON'


const renderBox = document.querySelector('.favorite-render-cards')
const favoriteButtonList = document.querySelector('.categories-list')
const storedData = load('cardData');

function rend() {
  const uniqueCategories = [];
  const categorySet = new Set();
  // const storedData = localStorage.getItem('cardData');

  const displayNone = document.querySelector('.no-recipe-content')
  if (storedData) {
    displayNone.style.display = "none"
  } else { displayNone.style.display = "flex" }

  if (storedData) {

    storedData.forEach(item => {
      if (!categorySet.has(item.category)) {
        categorySet.add(item.category);
        uniqueCategories.push({ category: item.category });
      }

    });
  }

   if (categorySet.size !== 0 && !categorySet.has("All categories")) {
    uniqueCategories.unshift({ category: "All categories" });
  }

  renderBox.insertAdjacentHTML('beforeend', favoriTesCards(storedData));
  favoriteButtonList.insertAdjacentHTML('beforeend', favoritesCategory(uniqueCategories));

  setLocalStorage();
  fillStars();
  cardHearts();
  filtrFavoriteCard()
  removeFavorites ()
}

rend()

function filtrFavoriteCard() {

  const cardsListItems = document.querySelectorAll('.card_favourites');
  const cardsLisCategory = document.querySelectorAll('.categories-btn');


  cardsLisCategory.forEach(category => {
    category.addEventListener('click', (event) => {
      const clickedCategory = event.target.textContent;

      cardsListItems.forEach(item => {
        if (clickedCategory === "All categories" || item.id === clickedCategory) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function removeFavorites (){
const cardFavouritesBtns = document.querySelectorAll('.card_favourites_btn');

cardFavouritesBtns.forEach(button => {
  button.addEventListener('click', () => {

  renderBox.innerHTML = '';
  favoriteButtonList.innerHTML = '';

  rend();
  });
});}