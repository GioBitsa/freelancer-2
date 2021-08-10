

// dropdowns

const dropDownBtns1 = document.querySelectorAll('.section-5 .content .item .title .dropDownBtns1 svg')
const dropDownBtns2 = document.querySelectorAll('.section-5 .content .item .title .dropDownBtns2 svg')
const dropDownBtns3 = document.querySelectorAll('.section-5 .content .item .title .dropDownBtns3 svg')
const dropDownBtns4 = document.querySelectorAll('.section-5 .content .item .title .dropDownBtns4 svg')
const dropDownBtns5 = document.querySelectorAll('.section-5 .content .item .title .dropDownBtns5 svg')

const dropDown1 = document.getElementById('myDropDown1');
const dropDown2 = document.getElementById('myDropDown2');
const dropDown3 = document.getElementById('myDropDown3');
const dropDown4 = document.getElementById('myDropDown4');
const dropDown5 = document.getElementById('myDropDown5');

dropDownBtns1.forEach(btn => {
    btn.addEventListener('click', () => {
        makeDropDown(dropDownBtns1, dropDown1)
    })
})
dropDownBtns2.forEach(btn => {
    btn.addEventListener('click', () => {
        makeDropDown(dropDownBtns2, dropDown2)
    })
})
dropDownBtns3.forEach(btn => {
    btn.addEventListener('click', () => {
        makeDropDown(dropDownBtns3, dropDown3)
    })
})
dropDownBtns4.forEach(btn => {
    btn.addEventListener('click', () => {
        makeDropDown(dropDownBtns4, dropDown4)
    })
})
dropDownBtns5.forEach(btn => {
    btn.addEventListener('click', () => {
        makeDropDown(dropDownBtns5, dropDown5)
    })
})

function makeDropDown(btns, dropDown){
    if (btns[0].classList.contains('show')){
        btns[0].classList.remove('show')
        btns[1].classList.add('show')
        dropDown.classList.add('show')
    }else{
        btns[1].classList.remove('show')
        btns[0].classList.add('show')
        dropDown.classList.remove('show')
    }
}




// scroll up btn

const scrollUpBtn = document.querySelector('footer .content .scroll-up');

scrollUpBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// bar

const open = document.getElementById('open')
const close = document.getElementById('close')
const nav = document.querySelector('header .header ul')

open.addEventListener('click', () => {
    open.classList.add('close');
    close.classList.add('show');
    nav.classList.add('show');
})

close.addEventListener('click', () => {
    close.classList.remove('show');
    open.classList.remove('close');
    nav.classList.remove('show')
})


// preloader

$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').delay(350).fadeOut('slow'); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
  })
