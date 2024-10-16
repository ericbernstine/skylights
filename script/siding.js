const vinyl_title = 'Vinyl Siding';
const vinyl_desc = `- This is a test description for the vinyl siding.`;
const aluminum_title = 'Aluminum Siding';
const aluminum_desc = 'This is a description for Aluminum Siding';
const wood_title = 'Fabricated Wood Siding';
const wood_desc = 'this is a test for wood siding';
const stone_title = 'Stone Siding';
const stone_desc = 'this is a test for stone.';
const trim_title = 'Trim & other accessories';
const trim_desc = 'this is a test for trim.';


function popUp(image) {
    const popupImage = document.querySelector('.popup-image img');
    const popupTitle = document.querySelector('.popup-desc h3');
    const popupDesc = document.querySelector('.popup-desc p');

    popupImage.src = image.getAttribute('src');

    switch (image.id) {
        case 'vinyl':
            popupTitle.textContent = vinyl_title;
            popupDesc.textContent = vinyl_desc;
            popupDesc.innerHTML = vinyl_desc.replace(/\n/g, '<br>'); // Replace \n with <br>
            break;
        case 'aluminum':
            popupTitle.textContent = aluminum_title;
            popupDesc.textContent = aluminum_desc;
            popupDesc.innerHTML = aluminum_desc.replace(/\n/g, '<br>'); // Replace \n with <br>
            break;
        case 'wood':
            popupTitle.textContent = wood_title;
            popupDesc.textContent = wood_desc;
            popupDesc.innerHTML = wood_desc.replace(/\n/g, '<br>'); // Replace \n with <br>
            break;
        case 'stone':
            popupTitle.textContent = stone_title;
            popupDesc.textContent = stone_desc;
            popupDesc.innerHTML = stone_desc.replace(/\n/g, '<br>'); // Replace \n with <br>
            break;
        case 'trim':
            popupTitle.textContent = trim_title;
            popupDesc.textContent = trim_desc;
            popupDesc.innerHTML = trim_desc.replace(/\n/g, '<br>'); // Replace \n with <br>
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