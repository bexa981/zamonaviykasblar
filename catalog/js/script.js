function myFunction(x) {
   x.classList.toggle("change");
   document.body.classList.toggle('lock');
   document.querySelector('.html').classList.toggle('lock');
   document.querySelector('.menu').classList.toggle('active');
   mainVideo.pause();
}




const animItems = document.querySelectorAll('.anim-items');
if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('on-vision');
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }

   setTimeout(() => {
      animOnScroll();
   }, 300);
}
/*------------------------*/
const iconMenu = document.querySelector('.menu');
const menuBody = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

         if (iconMenu.classList.contains('active')) {
            document.body.classList.remove('lock');
            iconMenu.classList.remove('active');
            menuBody.classList.remove('active');
            document.querySelector('.html').classList.remove('lock');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}
//Abdukarimxonov G'aybullo 7.10.2022
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }

}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
         }
      });
   }
}

function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
         bodyUnlock();

      }
   }
}

function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWith + 'px';

   if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddingValue;
      }
   }

   body.style.paddingRight = lockPaddingValue;
   body.classList.add('lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}


function bodyUnlock() {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
         }
      }

      body.style.paddingRight = '0px';
      body.classList.remove('lock');

   }, timeout);
   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
   }
}),

   (function () {

      // проверяем поддержку
      if (!Element.prototype.closest) {

         // реализуем
         Element.prototype.closest = function (css) {
            var node = this;

            while (node) {
               if (node.matches(css)) return node;
               else node = node.parentElement;
            }
            return null;
         };
      }

   })();
(function () {

   // проверяем поддержку
   if (!Element.prototype.matches) {

      // определяем свойство
      Element.prototype.matches = Element.prototype.matchesSelector ||
         Element.prototype.webkitMatchesSelector ||
         Element.prototype.mozMatchesSelector ||
         Element.prototype.msMatchesSelector;

   }

})();

 function bugalteriya(){
   window.location.href='https://classroom.google.com/c/NTI4NzQwNTY1NzI0?cjc=b7nmbvq'
 }
 function excel(){
   window.location.href='https://classroom.google.com/u/1/c/NTc5MjkxOTYxMjgz'
 }
 function frontend(){
   window.location.href='https://classroom.google.com/c/NTU1MTIxMzc0MDMx?cjc=7gnxcox'
 }
 function grafikDizayn(){
   window.location.href='https://classroom.google.com/c/NTY5MTA3NTAxMjIy?cjc=fzwaeoq'
 }
 function inglizTili(){
   window.location.href='https://classroom.google.com/c/NTU2MTEzMzE2ODM0?cjc=kvvzw5t'
 }
 function java(){
   window.location.href='https://classroom.google.com/c/NTY5MTEyOTUwNzc4?cjc=e7mgkro'
 }

// function tasdiqlash() {
//    let login = document.getElementById('login').value;
//    let parol = document.getElementById('parol').value;

//    if (login === 'frontend' && parol == 7777) {
//       window.location.href = 'https://classroom.google.com/c/NTU1MTIxMzc0MDMx?cjc=7gnxcox';
//    } else if (login === 'buxgalteriya' && parol == 7777) {
//       window.location.href = 'https://classroom.google.com/c/NTI4NzQwNTY1NzI0?cjc=b7nmbvq';
//    } else if (login === 'english' && parol == 7777) {
//       window.location.href = 'https://classroom.google.com/c/NTU2MTEzMzE2ODM0?cjc=kvvzw5t';
//    } else if (login === 'frontend' && parol == 1111) {
//       window.location.href = 'https://classroom.google.com/c/NTYxMzk0MjE5NDE1?cjc=mfnragb';
//    } else if (login === 'dizayn' && parol == 7777) {
//       window.location.href = 'https://classroom.google.com/c/NTY5MTA3NTAxMjIy?cjc=fzwaeoq';
//    } else if (login === 'java' && parol == 1111) {
//       window.location.href = 'https://classroom.google.com/c/NTY5MTEyOTUwNzc4?cjc=e7mgkro';
//    }
//    else if(login=== 'excel' && parol == 7777){
//        window.location.href='https://classroom.google.com/u/1/c/NTc5MjkxOTYxMjgz'
//    }
//    else {
//       alert('Xato parol kiritingiz')
//    }

// }
document.querySelector("form").addEventListener("submit", (event) => {
   event.preventDefault();
});

"use strict"
/*----------------------------*/
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   },
};
/*--------------------------*/
if (isMobile.any()) {
   document.body.classList.add('_touch');

   let menuArrows = document.querySelectorAll('.menu__arrow');
   if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener("click", function (e) {
            menuArrow.parentElement.classList.toggle('_active');
         });
      }
   }

} else {
   document.body.classList.add('_pc');
}