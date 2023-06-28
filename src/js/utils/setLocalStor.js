import { save, load, remove } from './localStorageJSON'
let favoritData
export default function setLocalStorage(favoritData) {
  console.log(favoritData)
  if (!favoritData) {
    const hearts = document.querySelectorAll('.card_favourites_btn');
    const seeRecipyForSet = document.querySelectorAll('.card_btn');


    function handleClick(event) {
      const parentContainer = event.currentTarget.parentNode;
      const src = parentContainer.querySelector('.card_background').src;
      const title = parentContainer.querySelector('.card_title').textContent;
      const description = parentContainer.querySelector('.card_description').textContent;
      const starRating = parentContainer.querySelector('.star-rating_value').textContent;
      const category = parentContainer.id;
      const ident = parentContainer.querySelector('.card_btn').id;

      const data = {
        category: category,
        src: src,
        title: title,
        description: description,
        starRating: starRating,
        ident: ident,
      };


      let dataArray = [];


      const storedData = load('cardData');

      if (storedData) {
        dataArray = storedData;
      }

      const index = dataArray.findIndex(item =>
        item.src === data.src &&
        item.title === data.title &&
        item.description === data.description &&
        item.starRating === data.starRating
      );

      if (index !== -1) {
        dataArray.splice(index, 1);

        if (dataArray.length === 0) {
          remove('cardData')
        } else {
          save('cardData', dataArray);
        }
        return;
      }

      dataArray.push(data);

      save('cardData', dataArray);

    }

    hearts.forEach(heart => {
      heart.addEventListener('click', handleClick);
    });
  } else {

    let dataArray = [];
    const target = document.querySelector('.btn-addToFavorite')
    if (target) {

      target.addEventListener('click', () => {
      const storedData = load('cardData');
      if (target.textContent === "Add to favorite") {
      target.textContent = "Remove from favorite"
        } else {
      target.textContent = "Add to favorite"
        }

      if (storedData) {
          dataArray = storedData;
          console.log(dataArray)
          const index = dataArray.findIndex(item =>
            item.src === favoritData.src &&
            item.title === favoritData.title &&
            item.description === favoritData.description &&
            item.starRating === favoritData.starRating
          );

          if (index !== -1) {
            dataArray.splice(index, 1);

            if (dataArray.length === 0) {
              remove('cardData')
            } else {
              save('cardData', dataArray);
            }
            return;
          }
        }

        dataArray.push(favoritData);

        save('cardData', dataArray);

      })
    }
  }
  return;
};
