// First modal s
const popup = document.getElementById('myPopup')
const popupToggle =document.getElementById('myBtn')
const popupClose = document.querySelector('.close')
const popupOverlay =document.querySelector('.overlay') 

popupToggle.addEventListener('click', () => {
    popup.style.display="block";
    popupOverlay.classList.add('overlay-active');
    console.log("1")
})
popupClose.addEventListener('click', ()=> {
    popup.style.display="none";
    popupOverlay.classList.remove('overlay-active');
})
window.onclick = function(e){
    if (e.target === popup) {
        popup.style.display = 'none';
    }
    console.log("2")
}

// Second modal 
const popupVP = document.getElementById('modal-vp')
const popupToggle1 =document.getElementById('myBtnVP')
const popupCloseVP = document.querySelector('.closeVP')


popupToggle1.addEventListener('click', () => {
    popupVP.style.display="block";
    popupOverlay.classList.add('overlay-active');
    console.log("3")
})
popupCloseVP.addEventListener('click', ()=> {
    popupVP.style.display="none";
    popupOverlay.classList.remove('overlay-active');
})

// Burger handler

    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav')
    const menuCloseItem = document.querySelector('.header__nav-close')
    const menuLinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
    })
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-active')
    })
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav-active')
            })
        }
    }
