import axios from 'axios';
import Pagination from 'tui-pagination';
import TestPagination from './API_request/testPagination';
const container = document.getElementById('pagination');

const options = {
  totalItems: 0,
  itemsPerPage: 8,
  visiblePages: window.innerWidth < 768 ? 2 : 3,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn current-page">{{page}}</a>',
    currentPage: '<span class="tui-page-btn tui-is-selected">{{page}}</span>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(container, options);
const testPagination = new TestPagination();
const page = pagination.getCurrentPage();

const api = testPagination;
async function ob() {
  const res = await api.getTreats(page);
  pagination.reset(res.data.totalPages);
}
ob();

pagination.on('afterMove', async e => {
  const currentPage = e.page;
  const res = await api.getTreats(currentPage);
});
