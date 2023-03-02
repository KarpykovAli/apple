const btn = document.querySelector('.menu__btn');
const header__menu = document.querySelector('.header__menu');

btn.addEventListener('click', ()=>{
    header__menu.classList.toggle('menu__open')
});


document.getElementById('main__button').onclick = function () {
    document.getElementById('choice').scrollIntoView({behavior: 'smooth'});
}

document.getElementById('manu__link1').onclick = function () {
    document.getElementById('new').scrollIntoView({behavior: 'smooth'});
}
document.getElementById('manu__link2').onclick = function () {
    document.getElementById('choice').scrollIntoView({behavior: 'smooth'});
}
document.getElementById('manu__link3').onclick = function () {
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
}