import axios from 'axios';

export default class TreatsApi {
  constructor() {}
  getTreats(page) {
    return axios.get(
      `https://tasty-treats-backend.p.goit.global/api/recipes/`,
      {
        params: {
          page,
          limit: 8,
        },
      }
    );
  }
}
