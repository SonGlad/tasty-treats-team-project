import {heartsFillStorage} from '../utils/hertsFillAll';

export function cardHearts() {

 const cardFavouritesBtns = document.querySelectorAll('.card_favourites_btn');
  heartsFillStorage()
    cardFavouritesBtns.forEach(button => {
      button.addEventListener('click', () => {
        const icons = button.querySelectorAll('.card_heart');

        icons.forEach(icon => {

          icon.classList.toggle('heart-filled');
        });

        button.blur();
      });
    });
  }