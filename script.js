document.addEventListener('DOMContentLoaded', function () {
    const openButton = document.querySelector('.open-mobile-menu-btn');
    const closeButton = document.querySelector('.mobile-menu-close-btn');
    const modal = document.querySelector('.mobile-menu');
  
    openButton.addEventListener('click', function () {
      modal.classList.toggle('is-open');
    });
    closeButton.addEventListener('click', function () {
        modal.classList.toggle('is-open');
      });
  });
  
$(document).ready(function () {
  $('.site-links').on('click', function (event) {
    event.preventDefault();
      var targetId = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(targetId).offset().top
      }, 500); 
  });
});
