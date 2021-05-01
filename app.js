window.addEventListener('load', () => {
// -------------------------------------------------MENU BOSHLANISHI----------------------
    let a = document.querySelector('.toggler');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const navbar = document.querySelector('.nav');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    navbar.style.display = 'block';
    // navbar.style.top = '0';
    openMenu.style.display = 'none'
    // closeMenu.style.opacity = '1';
    navbar.style.transform = 'translateX(0%)';
}

function close() {
    openMenu.style.display = 'block';
    
    navbar.style.transform = 'translateX(-100%)';
    // navbar.style.display = 'none';
    console.log('salom');
}
// -------------------------------------------------MENU TUGASHI----------------------------------


// -----------------------------------------------OPEN-CON BOSHLANISHI----------------------------


    let home = document.querySelector('.home');
    let icon1 = document.querySelector('.icon1');
    let icon2 = document.querySelector('.icon2');
    let icon3 = document.querySelector('.icon3');
    let icon4 = document.querySelector('.icon4');
    let openHome = document.querySelector('.open-home');
    let closeHome = document.querySelector('.close-home');

    openHome.addEventListener('click', showHome);
    closeHome.addEventListener('click', noneHome);

    function showHome() {
        icon1.style.transform = `translateX(-145px)`;
        icon2.style.transform = `translateX(-131px) translateY(-57px)`;
        icon3.style.transform = `translateX(-99px) translateY(-110px)`;
        icon4.style.transform = `translateX(-47px) translateY(-142px)`;
        closeHome.style.display = 'block';
        openHome.style.display = 'none';
    }

    function noneHome() {
        icon1.style.transform = `translateX(0px)`;
        icon2.style.transform = `translateX(0px) translateY(0px)`;
        icon3.style.transform = `translateX(0px) translateY(0px)`;
        icon4.style.transform = `translateX(0px) translateY(0px)`;
        closeHome.style.display = 'none';
        openHome.style.display = 'block';
    }

// -----------------------------------------------OPEN-CON tugashi----------------------------


// -----------------------------------------------rasmning ochilishi-------------------------

    let openImg = document.querySelectorAll('.wrapper-body2-box-img');

    openImg.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.add('wrapper-body2-box-img-active');  
            item.classList.add('bobo')
        })
    })

// document.addEventListener('mousemove', function(e){
//     let span = document.querySelector('.heart'),
//         heart = document.querySelector('.heart-child'),
//         size = Math.random() * 100;
//         x = e.offsetX,
//         y = e.offsetY;
//     heart.style.left = x + 'px';
//     heart.style.top = y + 'px';
//     heart.style.width = 20 + size + 'px';
//     heart.style.height = 20 + size + 'px';
//     span.appendChild(heart);

//     setTimeout(function() {
//         heart.remove();
//     }, 2000)
        
    
// })

// --------------------------------------------------------------slider------------------------------------


})

