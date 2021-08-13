

const methods = document.querySelectorAll('.section-4 .content table tr td .method .choose p');

const paypals = document.querySelectorAll('.section-4 .content table tr td .paypal')

const cryptos = document.querySelectorAll('.section-4 .content table tr td .crypto')

methods[0].addEventListener('click', () => {
    enableActive(methods[0]);
    cryptos.forEach(item => {
        if(item.classList.contains('show')){
            item.classList.remove('show');
        }
    })
    paypals.forEach(item => {
        item.classList.add('show');
    })
})

methods[1].addEventListener('click', () => {
    enableActive(methods[1]);
    paypals.forEach(item => {
        if(item.classList.contains('show')){
            item.classList.remove('show');
        }
    })
    cryptos.forEach(item => {
        item.classList.add('show');
    })
})

function enableActive(target){
    methods.forEach(method => {
        method.classList.remove('active');
    })
    target.classList.add('active')
}