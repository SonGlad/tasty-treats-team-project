import axios from 'axios'

const AREA_URL = 'https://tasty-treats-backend.p.goit.global/api/areas';
const INGREDIENTS_URL = 'https://tasty-treats-backend.p.goit.global/api/ingredients';

export class  searchAPI {
    constructor() {
    this.areaUrl = AREA_URL ,
    this.ingredientsUrl = INGREDIENTS_URL
    };

    async getArea(){
        try{
            const area = await axios.get(this.areaUrl);

            return area.data;

        }catch(error){
            console.log(error);
        };
    };

    async getIngredients(){
        try{
            const ingredients = await axios.get(this.ingredientsUrl);

            return ingredients.data;

        }catch(error){
            console.log(error);
        };
    };   
};