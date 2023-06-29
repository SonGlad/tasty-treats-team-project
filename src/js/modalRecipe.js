import { FechFullRecipe } from './API_request/fechFullRecipe';
import cardModalRecipe from '../templates/modalRecipe.hbs';
import listIngredients from '../templates/recipeIngridients.hbs';
import recipeTags from '../templates/recipe-tags.hbs ';
import { fillStars } from './utils/fill-stars';
import { modalRatingOpCl } from './modalRatingOpCl';
import setLocalStorage from './utils/setLocalStor';
import { heartsFillStorage } from './utils/hertsFillAll';
import { save, load, remove } from './utils/localStorageJSON';
import { rend } from './favorite/favorites_main';

const modalRecipeBackDrop = document.querySelector('.recipe-backdrop');
const modalRecipe = document.querySelector('#modal-recipe');
const ratingBlockTxt = document.querySelector('.rating-block-txt')
const fechFullRecipe = new FechFullRecipe(); //екземпляр класу
let dataArray = load('cardData');

async function handleModalRecipe(favoritData) {
  try {
    disableScroll();

    modalRecipeBackDrop.classList.remove('visible');

    const response = await fechFullRecipe.getRecipe();

    const IDForFavorite = response.data._id; // Визначаємо чи є така картка в локалсторедже і відповідно встановлюємо текст кнопки
    const storedData = load('cardData');
    if (storedData) {
      dataArray = storedData;

      const hasObjectWithIdent = dataArray.some(
        item => item.ident === IDForFavorite
      );
      response.data.btnText = hasObjectWithIdent
        ? 'Remove from favorite'
        : 'Add to favorite';
    } else {
      response.data.btnText = 'Add to favorite';
    }
    //
    response.data.youtubeNorm = response.data.youtube.replace(
      /youtube\.com\/watch\?v=/,
      'youtube.com/embed/'
    );

    const mass = [response.data]; //запихаємо в масив щоб передати у hbs
    modalRecipe.innerHTML = cardModalRecipe(mass);

    const player = document.getElementById('vimeo-player');
    console.log(player);
    const ingridientsList = document.querySelector('.recipe-ingridient');
    ingridientsList.innerHTML = listIngredients(response.data.ingredients);

    const tags = document.querySelector('.tags');
    tags.innerHTML = recipeTags(response.data.tags);

    const giveRating = document.querySelector('.btn-giveARating');
    modalRatingOpCl(giveRating, modalRecipeBackDrop);
    giveRating.id = mass[0]._id;
    
    ratingBlockTxt.textContent = mass[0].description
    setLocalStorage(favoritData);

    fillStars();
    const btnClose = document.querySelector('.btn-close');

    btnClose.addEventListener('click', () => {
      modalRecipeBackDrop.classList.add('visible');
      enableScroll();
      player.src = '';
      if (document.title === 'Favorites') {
        rend();
      }
      heartsFillStorage();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        modalRecipeBackDrop.classList.add('visible');
        if (document.title === 'Favorites') {
          rend();
        }
        heartsFillStorage();
        enableScroll();
      }
    });

    modalRecipeBackDrop.addEventListener('click', e => {
      modalRecipeBackDrop.classList.add('visible');

      heartsFillStorage();
      if (document.title === 'Favorites') {
        rend();
      }
      e.stopPropagation();
      enableScroll();
    });

    modalRecipe.addEventListener('click', event => {
      event.stopPropagation();
    });
  } catch (error) {
    console.log(error);
  }
}

export function eventListener() {
  const btnOpenModal = document.querySelectorAll('.card_btn');
  btnOpenModal.forEach(event => {
    event.addEventListener('click', () => {
      const parentContainer = event.parentNode;
      const targetContainer = parentContainer.parentNode;
      const targetNulContainer = targetContainer.parentNode;
      const src = targetNulContainer.querySelector('.card_background').src;
      const title = targetNulContainer.querySelector('.card_title').textContent;
      const description =
        targetNulContainer.querySelector('.card_description').textContent;
      const starRating =
        targetNulContainer.querySelector('.star-rating_value').textContent;
      const category = targetNulContainer.id;
      const ident = targetNulContainer.querySelector('.card_btn').id;

      const favoritData = {
        category: category,
        src: src,
        title: title,
        description: description,
        starRating: starRating,
        ident: ident,
      };
      fechFullRecipe.ID = event.id; //Отримати з кнопки (see recipe) 6462a8f74c3d0ddd288980d4
      handleModalRecipe(favoritData);
    });
  });
}

// export function eventListenerPopular() {
//   const btnOpenModalPopular = document.querySelectorAll('.popular-img');
//   btnOpenModalPopular.forEach(event => {
//     event.addEventListener('click', () => {
//       fechFullRecipe.ID = event.id;
//       console.log(event.id);
//       console.log(event);
//       handleModalRecipe();
//     });
//   });
// };

export function eventListenerFavorites() {
  const btnOpenModal = document.querySelectorAll('.card_btn');
  let favoritData = {};
  btnOpenModal.forEach(event => {
    event.addEventListener('click', () => {
      const parentContainer = event.parentNode;
      const targetContainer = parentContainer.parentNode;
      const targetNulContainer = targetContainer.parentNode;
      const src = targetNulContainer.querySelector('.card_background').src;
      const title = targetNulContainer.querySelector('.card_title').textContent;
      const description =
        targetNulContainer.querySelector('.card_description').textContent;
      const starRating =
        targetNulContainer.querySelector('.star-rating_value').textContent;
      const category = targetNulContainer.id;
      const ident = targetNulContainer.querySelector('.card_btn').id;

      favoritData = {
        category: category,
        src: src,
        title: title,
        description: description,
        starRating: starRating,
        ident: ident,
      };
      fechFullRecipe.ID = event.id; //Отримати з кнопки (see recipe) 6462a8f74c3d0ddd288980d4
      handleModalRecipe(favoritData);
    });
  });
}

function disableScroll() {
  document.body.classList.add('scroll-lock');
}

function enableScroll() {
  document.body.classList.remove('scroll-lock');
}
