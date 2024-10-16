



function collapseButton(thisId){
    let text = document.getElementById(thisId);
    if (text.textContent.includes('Click for details')){
        text.innerHTML = 'Collapse details';
    } else{
        text.innerHTML = 'Click for details'
    }
}