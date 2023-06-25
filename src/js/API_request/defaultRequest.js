import axios from 'axios';
const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes';

export class fetchAllRecipes {
  constructor() {
    this.page = 1;
    this.query = '';
    this.area = '';
    this.time = '';
    this.ingredients = '';
    this.category = '';
  }
  async fetchRecipes() {
    const Allrecipes = await axios.get(
      `${BASE_URL}?category=${this.category}&page=${this.page}&limit=${this.limit}&time=${this.time}&area=${this.area}&ingredients=${this.ingredients}`
    );
    return Allrecipes.data;
  }

  setSearchValue(query) {
    this.query = query;
  }
  setCategoryValue(category) {
    this.category = category;
  }
  setTimeValue(time) {
    this.time = time;
  }
  setAreaValue(area) {
    this.time = area;
  }
  setIngredientsValue(ingredients) {
    this.ingredients = ingredients;
  }
  setLimitValue() {
    if (window.innerWidth < 768) {
      this.limit = 6;
      console.log(this.limit);
      return;
    } else if (window.innerWidth < 1280) {
      this.limit = 8;
      console.log(this.limit);
      return;
    } else {
      this.limit = 9;
      console.log(this.limit);
      return;
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
