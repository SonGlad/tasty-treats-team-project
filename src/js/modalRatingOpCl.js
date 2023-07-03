const  ratingEmailBtn = document.querySelector(".rating-email-btn");


export function modalRatingOpCl(giveRating, modalRecipeBackDrop) {
    const ratingBackdrop = document.querySelector('.rating-backdrop');
    
    giveRating.addEventListener('click', () => {
        ratingEmailBtn.id = giveRating.id
        
        ratingBackdrop.classList.remove('visible');
        modalRecipeBackDrop.classList.add('visible');
    });     
};