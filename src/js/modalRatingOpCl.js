export function modalRatingOpCl(giveRating, modalRecipeBackDrop) {
    const ratingBackdrop = document.querySelector('.rating-backdrop');
    
    giveRating.addEventListener('click', () => {
        ratingBackdrop.classList.remove('visible');
        modalRecipeBackDrop.classList.add('visible');
    });     
}