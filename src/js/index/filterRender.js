import debounce from "lodash.debounce";
import {fetchAllRecipes} from '../API_request/defaultRequest';
import TemplateArticles from '../../templates/cards.hbs';
import {fillStars} from '../utils/fill-stars';
import { cardHearts } from '../utils/card-hearts';
import setLocalStorage from '../utils/setLocalStor';

// import { log } from "handlebars";

const refs = {
    seacrhInp: document.querySelector('.inp-search'),
    searchBtn: document.querySelector('.btn-search'),
    timeFilter: document.querySelector('#timesearch'),
    areaFilter: document.querySelector('#arealist'),
    ingredientsFilter: document.querySelector('#ingredients'),
    cardsList: document.querySelector('.cards_list'),
    categories: document.querySelector('.category-container'),
    conCards: document.querySelector('.notfound-cook'),
}




const FetchByFilter = new fetchAllRecipes();
FetchByFilter.setLimitValue()
refs.seacrhInp.addEventListener('input', debounce(()=>{

    const query = String(refs.seacrhInp.value.trim());

    searchFetch(query)
    console.log(query);
}, 300));
refs.timeFilter.addEventListener('click', timeFetch);
refs.areaFilter.addEventListener('click', areaFetch);
refs.ingredientsFilter.addEventListener('click', ingredientsFetch);
refs.categories.addEventListener('click', categoriesFetch);

function searchFetch(query) {
    try {
          FetchByFilter.setSearchValue(query)
            renderCards(); 
    } catch(err){

    }
    
  
}

async function renderCards() {

    try{
    const response = await FetchByFilter.fetchRecipes();    
        const results = response.results; 
        refs.cardsList.innerHTML = TemplateArticles(results);
        setLocalStorage();
        fillStars();
        cardHearts();    
        console.log(results);

        if (results.length === 0){
            throw new Error
        }else{
            refs.conCards.classList.add('visually-hidden')
        }

    }catch(err){
        refs.conCards.classList.remove('visually-hidden')

        console.log('No cards found');
    }
   
}

function timeFetch(event){
    try {
    const time = parseInt(event.target.textContent);
        
        console.log(time);
        FetchByFilter.setTimeValue(time);
        renderCards();
    }catch(err){


    }
   

}


function areaFetch(event) {
    try {
          const area = event.target.textContent;
    FetchByFilter.setAreaValue(area);
    renderCards()
    console.log(area);
    } catch(err){

    }
  

}

function ingredientsFetch(event) {
    try {
    const ingredients = String(event.target.id);
        
        FetchByFilter.setIngredientsValue(ingredients);
        renderCards()
        console.log(ingredients);
    } catch(err){

    }
    
}

function categoriesFetch(event) {
    try{
    const categories = event.target.textContent;
        const allCategories = event.target.id;
        console.log(allCategories);
        if (allCategories === 'all-category-btn'){
            FetchByFilter.resetCategorie();
            renderCards();
            // console.log('click');
            return;
        }
        FetchByFilter.setCategoryValue(categories);
        
        renderCards();
    } catch(err){

    }

}


