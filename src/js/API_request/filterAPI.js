import axios from 'axios'
import {fetchAllRecipes} from './defaultRequest';

const AREA_URL = 'https://tasty-treats-backend.p.goit.global/api/areas';
const INGREDIENTS_URL = 'https://tasty-treats-backend.p.goit.global/api/ingredients';

export class  searchAPI {
    constructor() {
    this.areaUrl = AREA_URL ,
    this.ingredientsUrl = INGREDIENTS_URL
    }

    async getArea(){
        const area = await axios.get(this.areaUrl)
        return area.data
    }
    async getIngredients(){
        const ingredients = await axios.get(this.ingredientsUrl)  
        return ingredients.data
    }
    
};