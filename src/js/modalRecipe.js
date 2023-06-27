import { FechFullRecipe } from './API_request/fechFullRecipe';
import cardModalRecipe from '../templates/modalRecipe.hbs';
import listIngredients from '../templates/recipeIngridients.hbs';
import recipeTags from '../templates/recipe-tags.hbs ';
import {fillStars} from './utils/fill-stars';

const modalRecipeBackDrop = document.querySelector('.recipe-backdrop');
const modalRecipe = document.querySelector('#modal-recipe');

const fechFullRecipe = new FechFullRecipe(); //екземпляр класу


async function handleModalRecipe() {
  modalRecipeBackDrop.classList.remove('visible');
  const response = await fechFullRecipe.getRecipe();
  
  response.data.youtubeNorm = response.data.youtube.replace(
    /youtube\.com\/watch\?v=/,
    'youtube.com/embed/'
    );
    console.log(response.data.youtubeNorm);
    const mass = [response.data]; //запихаємо в масив щоб передати у hbs
    modalRecipe.innerHTML = cardModalRecipe(mass);
    
    const player = document.getElementById('vimeo-player');
    
    const ingridientsList = document.querySelector('.recipe-ingridient');
    ingridientsList.innerHTML = listIngredients(response.data.ingredients);
    
    const tags = document.querySelector('.tags');
    tags.innerHTML = recipeTags(response.data.tags);
    
    
    fillStars();
    const btnClose = document.querySelector('.btn-close');
    btnClose.addEventListener('click', () => {
    modalRecipeBackDrop.classList.add('visible');
    player.src= '-';
    
  });
};

export function eventListener() {
  const btnOpenModal = document.querySelectorAll('.card_btn');
  btnOpenModal.forEach(event => {
    event.addEventListener('click', () => {
      fechFullRecipe.ID = event.id; //Отримати з кнопки (see recipe) 6462a8f74c3d0ddd288980d4
      console.log(event.id);
      handleModalRecipe();
    });
  });
};
