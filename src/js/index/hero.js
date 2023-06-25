import { fetchEvent } from '../../js/API_request/fechEvent'
import TemplateArticles from '../../templates/Hero-events.hbs';
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/swiper-bundle.min.css';

const parentContainer = document.querySelector('.events');

fetchEvent()
  .then(data => {
    parentContainer.insertAdjacentHTML('beforeend', TemplateArticles(data));
    setTimeout(() => {
      const swiper = new Swiper('.swiper',
        {
          modules: [Pagination],
          allowSlideNext: true,
          // If we need pagination
          pagination: {
            el: '.page',
            clickable: true,

          },

        });
    }, 1000);
  });