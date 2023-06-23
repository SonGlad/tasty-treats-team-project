import { fetchEvent } from '../../js/API_request/fechEvent'
import TemplateArticles from '../../templates/Hero-events.hbs';
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/swiper-bundle.min.css';

const swiper = new Swiper('.swiper',
  {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});

const parentContainer = document.querySelector('.events');

fetchEvent()
  .then(data => {
    console.log(data);
    parentContainer.insertAdjacentHTML('beforeend', TemplateArticles(data));
  })