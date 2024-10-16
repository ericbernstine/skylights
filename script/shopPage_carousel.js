document.addEventListener('DOMContentLoaded', (event) => {
    const descriptionBlocks = document.querySelectorAll('.descriptionBlockAlpha, .descriptionBlock'); // Select all description blocks

    descriptionBlocks.forEach(block => {
        const slider = block.querySelector('.slider');
        const slides = slider.querySelectorAll('.slides img');
        const dots = block.querySelectorAll('.carouselNav button'); // Select dots within the current description block
        let slideIndex = 0;

        function showSlide(index) {
            if (index >= slides.length) {
                slideIndex = 0;
            } else if (index < 0) {
                slideIndex = slides.length - 1;
            }

            slides.forEach(slide => {
                slide.classList.remove('displaySlide');
            });
            dots.forEach(dot => {
                dot.classList.remove('curInd');
            });
            slides[slideIndex].classList.add('displaySlide');
            dots[slideIndex].classList.add('curInd');
        }

        slider.querySelector('.prev').onclick = () => {
            dots[slideIndex].classList.remove('curInd');
            slideIndex--;
            showSlide(slideIndex);
            dots[slideIndex].classList.add('curInd');
        };

        slider.querySelector('.next').onclick = () => {
            dots[slideIndex].classList.remove('curInd');
            slideIndex++;
            showSlide(slideIndex);
            dots[slideIndex].classList.add('curInd');
        };

        dots.forEach((dot, i) => {
            dot.onclick = () => {
                dots[slideIndex].classList.remove('curInd');
                slideIndex = i;
                showSlide(slideIndex);
                dots[slideIndex].classList.add('curInd');
            };
        });

        // Initialize the first slide
        showSlide(slideIndex);
    });

    $('.manual').click(() => {
        document.getElementById('descriptionBlock1').scrollIntoView({ behavior: 'smooth' });
    })
    $('.electric').click(() => {
        document.getElementById('descriptionBlock2').scrollIntoView({ behavior: 'smooth' });
    })
    $('.solar').click(() => {
        document.getElementById('descriptionBlock3').scrollIntoView({ behavior: 'smooth' });
    })
    $('.fixed').click(() => {
        document.getElementById('descriptionBlock4').scrollIntoView({ behavior: 'smooth' });
    })
    $('.skyMax').click(() => {
        document.getElementById('descriptionBlock5').scrollIntoView({ behavior: 'smooth' });
    })
    $('.flatRoof').click(() => {
        document.getElementById('descriptionBlock6').scrollIntoView({ behavior: 'smooth' });
    })
});

function popUp(image) {
    const popupImage = document.querySelector('.popup-image img');
    popupImage.src = image.getAttribute('src');
    document.querySelector('.popup-image').style.display = 'block';
}

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
};



