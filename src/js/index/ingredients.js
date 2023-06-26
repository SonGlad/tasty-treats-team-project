import {searchAPI} from '../API_request/filterAPI'
import TemplateIngridients from '../../templates/ingredients.hbs'


const SearchAPI = new searchAPI();

const ingredients = document.querySelector('#ingredients')

getIngredients();
async function getIngredients(){
    try{
        const ingredientsApi = await SearchAPI.getIngredients();
        ingredients.insertAdjacentHTML('beforeend', TemplateIngridients(ingredientsApi));
    } 
    catch(err){
        console.log(err);
    }
}