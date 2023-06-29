function modalRating() {
    const refs = {
        closeBtnModal: document.querySelector('.btn-close-rating'),
        ratingBackdrop: document.querySelector('.rating-backdrop'),
        ratingEmailBtn: document.querySelector('.rating-email-btn'),
    }

    refs.closeBtnModal.addEventListener('click', () => {
        refs.ratingBackdrop.classList.add('visible');
        changeColor(0);
    });

    refs.ratingEmailBtn.addEventListener('click', () => {
        refs.ratingBackdrop.classList.add('visible');

        changeColor(0); // !!!!!!!!!!!!!!!!! при отправке на backend должы обновиться звезды, но и отправиться
    
    });

    refs.ratingBackdrop.addEventListener('click', (evt) => {
        if (evt.target === refs.ratingBackdrop) {
            refs.ratingBackdrop.classList.add('visible');
        }
    });

    document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
            changeColor(0);
            refs.ratingBackdrop.classList.add('visible');
        }
    });

    const stars = document.querySelectorAll('.rating-star input[type="radio"]');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const starCount = parseInt(star.value);
            changeColor(starCount);
        });
    });
}

function changeColor(starCount) {
    const stars = document.querySelectorAll('.rating-star input[type="radio"]');

    for (let i = 0; i < stars.length; i++) {
        const starLabel = stars[i].nextElementSibling;
        const starSVG = starLabel.querySelector('.star-rating');
        if (i < starCount) {
            starSVG.classList.add('active');
        } else {
            starSVG.classList.remove('active');
        }
    }
}

modalRating();
