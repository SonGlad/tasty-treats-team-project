import { fetchEvent } from '../../js/API_request/fechEvent';
import TemplateArticles from '../../templates/Hero-events.hbs';
import Swiper, { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const parentContainer = document.querySelector('.events');

fetchEvent()
  .then(data => {
    parentContainer.insertAdjacentHTML('beforeend', TemplateArticles(data));

    const swiper = new Swiper('.swiper', {
      modules: [Pagination, Navigation, Autoplay],
      allowSlideNext: true,
      pagination: {
        el: '.page',
        clickable: true,
      },
      autoplay: {
        delay: 1500,
      },
      speed: 800,
      loop: true,
    });
  }
);
