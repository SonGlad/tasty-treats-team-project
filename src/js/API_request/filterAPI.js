import axios from 'axios'
import {fetchAllRecipes} from './defaultRequest';

const AREA_URL = 'https://tasty-treats-backend.p.goit.global/api/areas';

export class  searchAPI {
    constructor() {
    this.areaUrl = 'https://tasty-treats-backend.p.goit.global/api/areas',
    this.ingredientsUrl = 'https://tasty-treats-backend.p.goit.global/api/ingredients'
    }
    // getTime() {
    // }
    async getArea(){
        const area = await axios.get(this.areaUrl)
        return area.data
    }
    getIngredients(){
    }
};