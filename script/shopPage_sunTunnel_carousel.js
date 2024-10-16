// FLEX DATA
let flex_slide1_title = 'Low Profile TGF';
let flex_slide1_desc = `- Low profile flashing provides an integrated look with the roof line. 
\n - Pivoting tube system and flexible tube for a quick and easy installation.
\n - Impact models available for hurricane prone areas.`;
let flex_slide2_title = 'Pitched TMF'
let flex_slide2_desc = `-Pitched flashing provides optimum angle for gathering light from all roof directions.
\n - Tile flashing available.
\n - Impact models available for hurricane prone areas.`;

// RIGID DATA
let rigid_slide1_title = 'Pitched TMR';
let rigid_slide1_desc = `- Pitched flashing provides optimum angle for gathering light from all roof directions.
\n - 99.99% silver reflective layer with a 20-year tunnel warranty, total reflectance +98%.`;
let rigid_slide2_title = 'Low Profile TGR';
let rigid_slide2_desc = `- Low profile flashing provides an integrated look with the roof line.
\n - Pivoting tunnel system and flexible tunnel for a quick and easy installation.`;
let rigid_slide3_title = 'Flat Glass TLR';
let rigid_slide3_desc = `- Low profile glass design creates sleek appearance on any roofline.
\n - Perfect for developments where local ordinances do not allow acrylic dome tubular skylights.
\n - Available in 14” rigid only.`
let rigid_slide4_title = 'Curb Mount TCR';
let rigid_slide4_desc = `- One piece metal curb mounted flashing. 
\n - Low profile dome - acrylic or polycarbonate.
\n - Available in 14" rigid.`





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
        case 'flex_slide1':
            popupTitle.textContent = flex_slide1_title;
            popupDesc.textContent = flex_slide1_desc;
            popupDesc.innerHTML = flex_slide1_desc.replace(/\n/g, '<br>'); // Replace \n with <br>
            break;
        case 'flex_slide2':
            popupTitle.textContent = flex_slide2_title;
            popupDesc.textContent = flex_slide2_desc;
            popupDesc.innerHTML = flex_slide2_desc.replace(/\n/g, '<br>'); // Replace \n with <br>
            break;
        case 'rigid_slide1':
            popupTitle.textContent = rigid_slide1_title;
            popupDesc.textContent = rigid_slide1_desc;
            popupDesc.innerHTML = rigid_slide1_desc.replace(/\n/g, '<br>'); // Replace \n with <br>
            break;
        case 'rigid_slide2':
            popupTitle.textContent = rigid_slide2_title;
            popupDesc.textContent = rigid_slide2_desc;
            popupDesc.innerHTML = rigid_slide2_desc.replace(/\n/g, '<br>'); // Replace \n with <br>
            break;
        case 'rigid_slide3':
            popupTitle.textContent = rigid_slide3_title;
            popupDesc.textContent = rigid_slide3_desc;
            popupDesc.innerHTML = rigid_slide3_desc.replace(/\n/g, '<br>'); // Replace \n with <br>
            break;
        case 'rigid_slide4':
            popupTitle.textContent = rigid_slide4_title;
            popupDesc.textContent = rigid_slide4_desc;
            popupDesc.innerHTML = rigid_slide4_desc.replace(/\n/g, '<br>'); // Replace \n with <br>
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