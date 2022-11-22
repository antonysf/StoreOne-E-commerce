let myButton = document.getElementById("scrollBtn");

window.onscroll = function () {
    showBtn()
};



function showBtn() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
};

function topScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

//copia menu mobile

function copiaMenu() {
    //copia .departments
    var dptcategoria = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptcategoria.innerHTML;


    //copia nav / nav
    var mainNave = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNave.innerHTML;


    //copia header top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML

}
copiaMenu();

//monstrar menu mobile
const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addclass = document.querySelector('.site');
menuButton.addEventListener('click', function () {
    addclass.classList.toggle('showmenu')
});
closeButton.addEventListener('click', function () {
    addclass.classList.remove('showmenu')
});

//monstrar sub menu no mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
};

//slider

const swiper = new Swiper('.swiper', {
    loop: true,


    pagination: {
        el: '.swiper-pagination',
    },

});

// mostra busca

const buscaButton = document.querySelector('.t-search'),
    tClose = document.querySelector('.search-close'),
    mostraClass = document.querySelector('.site')

buscaButton.addEventListener('click', function () {
    mostraClass.classList.toggle('mostra-busca')
});

tClose.addEventListener('click', function () {
    mostraClass.classList.remove('mostra-busca')
});


//mostra dpt menu

const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
    dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function () {
    dptClass.classList.toggle('showdpt')
});


//image slider

var productThumb = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
});

var productBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productThumb,
    }
});

//estoque de produtos barra

var stocks = document.querySelectorAll('.products .stock');
for (let x = 0; x < stocks.length; x++) {
    let stock = stocks[x].dataset.stock,
        available = stocks[x].querySelector('.qty-available').innerHTML,
        sold = stocks[x].querySelector('.qty-sold').innerHTML,
        percent = sold * 100 / stock;

    stocks[x].querySelector('.available').style.width = percent + '%';
};

//Mostra carinho ao clicar

const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if (!divPopup.classList.contains('show')) {
            divPopup.classList.add('show');
        }
    }, 250)
});

//Fechar ao clicar quando clicar fora

document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divtoShow);
    if (!isClosest && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show')
    }
});


//mostrar modal ao carregar
window.onload = function () {
    document.querySelector('.site').classList.toggle('showmodal')
}
document.querySelector('.modalclose').addEventListener('click', function () {
    document.querySelector('.site').classList.remove('showmodal')
});