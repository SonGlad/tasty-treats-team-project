import { save, load, remove } from './localStorageJSON';


export function heartsFillStorage() {

  const cardFavouritesBtns = document.querySelectorAll('.card_favourites_btn');

  let storedData = load('cardData');
  if (storedData) {

    const identArray = storedData.map(item => item.ident);

    cardFavouritesBtns.forEach(button => {

      const cardId = button.parentNode.querySelector('.card_btn').id;
      const hertWaihte = button.parentNode.querySelector('.card_heart');

     if (identArray.includes(cardId)) {
      button.classList.add('heart-filled');
      hertWaihte.classList.add('heart-filled');
     } else {
      button.classList.remove('heart-filled');
      hertWaihte.classList.remove('heart-filled');
      }

    })
  } else {
    cardFavouritesBtns.forEach(button => {
      const hertWaihte = button.parentNode.querySelector('.card_heart');
      button.classList.remove('heart-filled');
      hertWaihte.classList.remove('heart-filled');
    })

  }
};
