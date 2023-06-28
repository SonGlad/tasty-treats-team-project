import { save, load, remove } from './localStorageJSON'

export default function setLocalStorage() {
  const hearts = document.querySelectorAll('.card_favourites_btn');


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

    console.log(data)

    let dataArray = [];

    // const storedData = localStorage.getItem('cardData');
    const storedData = load('cardData');
    if (storedData) {
      console.log(storedData)
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
        // localStorage.removeItem('cardData');
        remove('cardData')
      } else {
        // localStorage.setItem('cardData', JSON.stringify(dataArray));
         save('cardData', dataArray);
      }
      return;
    }

    dataArray.push(data);

    // localStorage.setItem('cardData', JSON.stringify(dataArray));
    save('cardData', dataArray);

    console.log(parentContainer);
  }

  hearts.forEach(heart => {
    heart.addEventListener('click', handleClick);
  });
}