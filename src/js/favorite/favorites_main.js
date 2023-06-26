
import favoriTesCards from '../../templates/favorites_cards.hbs';
import favoritesCategory from '../../templates/favoritesCategory.hbs';


const renderBox = document.querySelector('.favorite-render-cards')
console.log(renderBox)
const favoriteButtonList = document.querySelector('.categories-list')


function rend() {
  const storedData = localStorage.getItem('cardData');

  if (storedData) {
    const displayNone = document.querySelector('.no-recipe-content')
    console.log(displayNone)
    displayNone.style.display = "none"
  }
  dataArray = JSON.parse(storedData);


  renderBox.insertAdjacentHTML('beforeend', favoriTesCards(dataArray));
  favoriteButtonList.insertAdjacentHTML('beforeend', favoritesCategory(dataArray));
  const cardsListItems = document.querySelectorAll('.card_container')


  console.log(dataArray)
}

rend()