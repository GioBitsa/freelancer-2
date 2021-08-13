
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
