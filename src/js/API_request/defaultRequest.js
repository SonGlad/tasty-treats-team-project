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
    this.title = '';
  }
  async fetchRecipes() {
    const url = BASE_URL;
    const params = {
      category: this.category,
      page: this.page,
      limit: this.limit,
      time: this.time,
      area: this.area,
      ingredients: this.ingredients,
      title: this.title,
    };

    const Allrecipes = await axios.get(url, {params});
    return Allrecipes.data;
  }

  setSearchValue(query) {
    this.title = query;
  }
  setCategoryValue(category) {
    this.category = category;
  }
  setTimeValue(time) {
    this.time = time;
  }
  setAreaValue(area) {
    this.area = area;
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
