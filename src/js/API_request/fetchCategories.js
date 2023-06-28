import axios from 'axios';

const CATEGORIE_URL ='https://tasty-treats-backend.p.goit.global/api/categories';

export async function fetchCategories() {
  try{
    const categories = await axios.get(CATEGORIE_URL);
    
    return categories.data;

  }catch(error){
    console.log(error);
  };
};
