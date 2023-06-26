import debounce from "lodash.debounce";
import {fetchAllRecipes} from '../API_request/defaultRequest'
import TemplateArticles from '../../templates/cards.hbs';
const refs = {
    seacrhInp: document.querySelector('.inp-search'),
    searchBtn: document.querySelector('.btn-search'),
    timeFilter: document.querySelector('#timesearch'),
    areaFilter: document.querySelector('#arealist'),
    ingredientsFilter: document.querySelector('#ingredients'),
    cardsList: document.querySelector('.cards_list'),
    categories: document.querySelector('.category-container'),
    
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
    // FetchByFilter.setLimitValue()
    FetchByFilter.setSearchValue(query)
    renderCards()
 
}

async function renderCards() {
    const response = await FetchByFilter.fetchRecipes();    
    const results = response.results; 
    refs.cardsList.innerHTML = TemplateArticles(results)    
    console.log(results);
}

function timeFetch(event){
    const time = parseInt(event.target.textContent);
    
    console.log(time);
    FetchByFilter.setTimeValue(time);
    renderCards()
}


function areaFetch(event) {
    const area = event.target.textContent;
    FetchByFilter.setAreaValue(area);
    renderCards()
    console.log(area);

}

function ingredientsFetch(event) {
    const ingredients = String(event.target.id);
    
    FetchByFilter.setIngredientsValue(ingredients);
    renderCards()
    console.log(ingredients);
}

function categoriesFetch(event) {
    const categories = event.target.textContent;
    const allCategories = event.target.id;
    console.log(allCategories);
    if (allCategories === 'all-category-btn'){
        renderCards();
        return;
    }
    FetchByFilter.setCategoryValue(categories);
    
    renderCards();
    
}


