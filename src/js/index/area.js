import {searchAPI} from '../API_request/filterAPI'
import TemplateArea from '../../templates/area.hbs'


const SearchAPI = new searchAPI();

const areasList = document.querySelector('#arealist');

areas();
async function areas(){
    try{
        const area = await SearchAPI.getArea();
        areasList.insertAdjacentHTML('beforeend', TemplateArea(area));
    } 
    catch(err) {
        console.log(err);
    }
}