let handburger = document.querySelector('#handburger');
let slidenav = document.querySelector('#slidenav');

let body = document.getElementsByTagName('body');
handburger.addEventListener('click',slidenavshow);
function slidenavshow(){
    slidenav.classList = 'slidenav slidenavshow';
}

let closebtn = document.querySelector('#closebtn');


closebtn.addEventListener('click',slidenavhide);

function slidenavhide(){
    slidenav.classList = 'slidenav';
}
