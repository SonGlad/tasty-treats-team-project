import { FechFullRecipe } from './API_request/fechFullRecipe';
import cardModalRecipe from '../templates/modalRecipe.hbs';
import listIngredients from '../templates/recipeIngridients.hbs';
import recipeTags from '../templates/recipe-tags.hbs ';

const modalRecipeBackDrop = document.querySelector('.recipe-backdrop');
const modalRecipe = document.querySelector('#modal-recipe');
const btnClose = document.querySelector('.btn-close');
const btnOpenModal = document.querySelector('.all-category-button');

const fechFullRecipe = new FechFullRecipe(); //екземпляр класу

btnOpenModal.addEventListener('click', handleModalRecipe); //відкриття модалки + малювання розмітки

async function handleModalRecipe() {
  modalRecipeBackDrop.classList.remove('visible');

  fechFullRecipe.ID = '6462a8f74c3d0ddd288980d4'; //Отримати з кнопки (see recipe)
  const response = await fechFullRecipe.getRecipe();
  response.data.yotubeNorm = response.data.youtube.replace(
    /youtu.be/,
    'www.youtube.com/embed'
  );
  const mass = [response.data]; //запихаємо в масив щоб передати у hbs
  // modalRecipe.insertAdjacentHTML('beforeend', cardModalRecipe(mass));
  modalRecipe.innerHTML = cardModalRecipe(mass);

  const ingridientsList = document.querySelector('.recipe-ingridient');
  // ingridientsList.insertAdjacentHTML(
  //   'beforeend',
  //   listIngredients(response.data.ingredients)
  // );
  ingridientsList.innerHTML = listIngredients(response.data.ingredients);

  const tags = document.querySelector('.tags');
  // tags.insertAdjacentHTML('beforeend', recipeTags(response.data.tags));
  tags.innerHTML = recipeTags(response.data.tags);

  btnClose.addEventListener('click', () => {
    modalRecipeBackDrop.classList.add('visible');
  });
}
