const roofwindow1_title = 'Top-hinged roof window'
const roofwindow1_desc = `- Suitable for 15° to 55° roof pitch. 
\n - Enjoy panoramic views - while increasing your energy efficiency and natural ventilation.
\n - Convenient bottom handle for operation. 
\n - Increase the amount of natural light in your rooms.`;
const roofwindow2_title = 'Center-pivot roof window';
const roofwindow2_desc = `- Suitable for 15° to 90° roof pitch. 
\n - Convenient – even with furniture placed beneath the roof window. 
\n - Easy to open and quick to close with the top control bar. 
\n - Low installation allows for more flexibility and better views.`;
const roofwindow3_title = 'Roof access roof window';
const roofwindow3_desc = `- Easy access to outdoors
\n - Suitable for 15° to 85° roof pitch
\n - FK06 model swings open 90° angle to satisfy egress requirements for emergency escape`;
const roofwindow4_title = 'Roof Balcony';
const roofwindow4_desc = `- Enjoy a balcony instantly - VELUX Roof Balcony goes from roof window to balcony in seconds.  
\n - Roof window or balcony? You decide: the top half opens like a traditional roof window.
\n - Required roof pitch of 35°- 53°
\n - Bring the outside in with more natural daylight and fresh air`;

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
    $('.flexible').click(() => {
        document.getElementById('descriptionBlock1').scrollIntoView({ behavior: 'smooth' });
    })
    $('.rigid').click(() => {
        document.getElementById('descriptionBlock2').scrollIntoView({ behavior: 'smooth' });
    })
});

function popUp(image) {
    const popupImage = document.querySelector('.popup-image img');
    const popupTitle = document.querySelector('.popup-desc h3');
    const popupDesc = document.querySelector('.popup-desc p');

    popupImage.src = image.getAttribute('src');

    switch (image.id) {
        case 'roofwindow1':
            popupTitle.textContent = roofwindow1_title;
            popupDesc.textContent = roofwindow1_desc;
            popupDesc.innerHTML = roofwindow1_desc.replace(/\n/g, '<br>'); // Replace \n with <br>
            break;
        case 'roofwindow2':
            popupTitle.textContent = roofwindow2_title;
            popupDesc.textContent = roofwindow2_desc;
            popupDesc.innerHTML = roofwindow2_desc.replace(/\n/g, '<br>'); // Replace \n with <br>
            break;
        case 'roofwindow3':
            popupTitle.textContent = roofwindow3_title;
            popupDesc.textContent = roofwindow3_desc;
            popupDesc.innerHTML = roofwindow3_desc.replace(/\n/g, '<br>'); // Replace \n with <br>
            break;
        case 'roofwindow4':
            popupTitle.textContent = roofwindow4_title;
            popupDesc.textContent = roofwindow4_desc;
            popupDesc.innerHTML = roofwindow4_desc.replace(/\n/g, '<br>'); // Replace \n with <br>
            break;
        default:
            popupTitle.textContent = '';
            popupDesc.textContent = '';
    }

    document.querySelector('.popup-image').style.display = 'block';
}

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
};