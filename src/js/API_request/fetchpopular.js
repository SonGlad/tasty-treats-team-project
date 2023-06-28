import axios from 'axios';

const POPULAR_URL = `https://tasty-treats-backend.p.goit.global/api/recipes/popular`;

export const fetchPopular = async () => {
    try {
      const response = await axios.get(POPULAR_URL );
  
      if (response.status === 404) {
        throw new Error(response.status);
      };
  
      return response.data;
      
    } catch (error) {
      console.log(error);
    };
};