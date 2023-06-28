export function removeFavorites (){
  cardFavouritesBtns = document.querySelectorAll('.card_favourites_btn');

  cardFavouritesBtns.forEach(button => {
    button.addEventListener('click', () => {
    renderBox.innerHTML = '';
    favoriteButtonList.innerHTML = '';
      rend();
    });
  });
};