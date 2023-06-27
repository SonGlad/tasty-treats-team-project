export default function setLocalStorage() {
  const hearts = document.querySelectorAll('.card_favourites_btn');
  console.log(hearts);

  function handleClick(event) {
    const parentContainer = event.currentTarget.parentNode;
    const src = parentContainer.querySelector('.card_background').src;
    const title = parentContainer.querySelector('.card_title').textContent;
    const description = parentContainer.querySelector('.card_description').textContent;
    const starRating = parentContainer.querySelector('.star-rating_value').textContent;
    const category = parentContainer.id;

    const data = {
      category: category,
      src: src,
      title: title,
      description: description,
      starRating: starRating
    };

    let dataArray = [];

    const storedData = localStorage.getItem('cardData');
    if (storedData) {
      dataArray = JSON.parse(storedData);
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
        localStorage.removeItem('cardData');
      } else {
        localStorage.setItem('cardData', JSON.stringify(dataArray));
      }
      return;
    }

    dataArray.push(data);

    localStorage.setItem('cardData', JSON.stringify(dataArray));

    console.log(parentContainer);
  }

  hearts.forEach(heart => {
    heart.addEventListener('click', handleClick);
  });
}