function myFunction(x) {
   x.classList.toggle("change");
   document.body.classList.toggle('lock');
   document.querySelector('.html').classList.toggle('lock');
   document.querySelector('.menu').classList.toggle('active');
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
         } else {
            if (!animItem.classList.contains('anim-no-hide')) {
               animItem.classList.remove('on-vision');
            }
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
function validate() {
   let name = document.getElementById('name')
   let phone = document.getElementById('phone')
   let choise = document.getElementById('choise')
   let msg = document.getElementById('sms')
   let submit = document.getElementById('submit');

   submit.addEventListener("click", (e) => {
      e.preventDefault()
      if (name.value == '' || phone.value == '' || choise.value == '' || msg == '') {
         inputEmpty();
      }
      else {
         emailSend(name.value, phone.value, choise.value, msg.value);
         success();
      }
   })
}
validate();

function emailSend(name, phone, choise, msg) {
   emailjs.send("service_phekdo4", "template_qvwzvz7", {
      name_user: name,
      phone_user: phone,
      choise_user: choise,
      sms: msg,
   });
}

function success() {
   swal({
      title: "Jo'natildi",
      text: "Xabaringiz yetib bordi!",
      icon: "success",
      button: "OK",
   });
   const form = document.getElementById("myForm");
   form.reset();
}

function error() {
   swal({
      title: "Xatolik!",
      text: "Xabar jo'natilmadi!",
      icon: "error",
      button: "Ok",
   });
}
function inputEmpty() {
   swal({
      title: "Xatolik!",
      text: "Formalar to'ldirilmagan",
      icon: "error",
      button: "Ok",
   });
}

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