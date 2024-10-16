let nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'),
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning');

let timeRunning = 10000; // Set to 15 seconds
let timeAutoNext = 10000; // Set to 15 seconds

nextBtn.onclick = function () {
    showSlider('next');
}

prevBtn.onclick = function () {
    showSlider('prev');
}
let runTimeOut;

let runNextAuto = setTimeout(() => {
    nextBtn.click();
}, timeAutoNext);

function resetTimeAnimation() {
    runningTime.style.animation = 'none';
    runningTime.offsetHeight; /* trigger reflow */
    runningTime.style.animation = null;
    runningTime.style.animation = `runningTime ${timeAutoNext / 1000}s linear 1 forwards`; // Adjust animation duration
}

function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add('next');
    } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add('prev');
    }

    clearTimeout(runTimeOut);

    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation(); // Reset the running time animation
}

// Start the initial animation
resetTimeAnimation();

//Send Mail Function.
function SendMail() {
    var params = {
        from_name: document.getElementById('from_name').value,
        from_email: document.getElementById('from_email').value,
        message: document.getElementById('message').value,
    }
    emailjs.send("service_mdxx8j6", 'template_tr4waei', params)
        .then(function (res) {
            alert("Success, your message has been sent.");
            // Reset the input fields
            document.getElementById('from_name').value = '';
            document.getElementById('from_email').value = '';
            document.getElementById('message').value = '';
        })
        .catch(function (err) {
            alert("Email failed to send. Please refresh your page and try again.");
            console.error('Error:', err);
        });
}


function scrollGallery(){
    document.getElementById('gallerySection').scrollIntoView({ behavior: 'smooth' });
}

function scrollShop(){
    document.getElementById('shopSection').scrollIntoView({ behavior: 'smooth' });
}

function scrollReviews(){
    document.getElementById('testimonialSponsorSection').scrollIntoView({ behavior: 'smooth' });
}


function changeActive() {
    let burger = document.getElementById('burger');
    burger.classList.toggle('open');
}