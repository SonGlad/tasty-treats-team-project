function modalRating() {
    const refs = {
        closeBtnModal: document.querySelector('.btn-close-rating'),
        ratingBackdrop: document.querySelector('.rating-backdrop'),
        ratingEmailBtn: document.querySelector('.rating-email-btn'),
    }

    refs.closeBtnModal.addEventListener('click', () => {
        refs.ratingBackdrop.classList.add('visible');
    });

    refs.ratingEmailBtn.addEventListener('click', () => {
        refs.ratingBackdrop.classList.add('visible');
    });
}
modalRating();

function changeColor(starCount) {
    const stars = document.querySelectorAll('.rating-star input[type="radio"]');

    for (let i = 0; i < stars.length; i++) {
        const starLabel = stars[i].nextElementSibling;
        const starSVG = starLabel.querySelector('.star');
        if (i < starCount) {
            starSVG.classList.add("active");
        } else {
            starSVG.classList.remove("active");
        }
    }
}


