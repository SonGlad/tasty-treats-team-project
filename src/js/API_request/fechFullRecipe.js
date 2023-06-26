import axios from 'axios';

export class FechFullRecipe {
  #BASE_URL = `https://tasty-treats-backend.p.goit.global/api/recipes`;
  constructor(ID) {
    this.ID = ID;
  }

  async getRecipe() {
    const recipe = await axios.get(`${this.#BASE_URL}/${this.ID}`);
    return recipe;
  }
}
