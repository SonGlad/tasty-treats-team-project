export function fillStars() {
    const starRatings = document.querySelectorAll('.card_star-rating');
    starRatings.forEach(starRating => {
      // Получаем рейтинг из элемента <p> с классом 'star-rating_value'
      const rating = parseFloat(
        starRating.querySelector('.star-rating_value').textContent
      );
  
      // Округляем рейтинг до ближайшего целого числа
      const roundedRating = Math.round(rating);
  
      // Получаем все звездочки (элементы <svg>) внутри текущего 'card_star-rating'
      const stars = starRating.querySelectorAll('.star');
  
      // Проходимся по каждой звезде и добавляем класс 'filled', если ее индекс меньше округленного рейтинга
      stars.forEach((star, index) => {
        if (index < roundedRating) {
          star.classList.add('filled');
        }
      });
    });
  }