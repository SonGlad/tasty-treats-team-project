import { save, load, remove } from './localStorageJSON';


export function heartsFillStorage() {

  const cardFavouritesBtns = document.querySelectorAll('.card_favourites_btn');
  // const storedData = JSON.parse(localStorage.getItem('cardData'));
  const storedData = load('cardData');
  if (storedData){
    const identArray = storedData.map(item => item.ident);

    cardFavouritesBtns.forEach(button => {
      const cardId = button.parentNode.querySelector('.card_btn').id;

      const hertWaihte = button.parentNode.querySelector('.card_heart');

     if (identArray.includes(cardId)) {
      button.classList.add('heart-filled');
      hertWaihte.classList.add('heart-filled')
      }

    })
  }
};
