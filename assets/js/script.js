(function ($) {
    "use strict";

/* ---------------------------------------------
carousel
--------------------------------------------- */
$('.slick-carousel').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 4,
      }
    }
  ]
});

/* ---------------------------------------------
tabs
--------------------------------------------- */
  var li_elements = document.querySelectorAll(".navigation ul li");
  var item_elements = document.querySelectorAll(".tab_pane");
  for(var i = 0; i < li_elements.length; i++){
    li_elements[i].addEventListener("click", function (){
      li_elements.forEach(function(li) {
        li.classList.remove("active")
      })
      this.classList.add("active");

      var li_value = this.getAttribute("data-li");
      item_elements.forEach(function (tab_pane) {
        tab_pane.style.display = "none";
      })
      if(li_value == "profile-tab") {
        document.querySelector("." + li_value).style.display = "block";
      }
      else if(li_value == "chats-tab") {
        document.querySelector("." + li_value).style.display = "block";
      }
      else if(li_value == "groups-tab") {
        document.querySelector("." + li_value).style.display = "block";
      }
      else if(li_value == "contacts-tab") {
        document.querySelector("." + li_value).style.display = "block";
      }
      else if(li_value == "setting-tab") {
        document.querySelector("." + li_value).style.display = "block";
      }
      else if(li_value == "theme-tab") {
        document.querySelector("." + li_value).style.display = "block";
      }
      else if(li_value == "logout-tab") {
        document.querySelector("." + li_value).style.display = "block";
      }
    });
  }

/* ---------------------------------------------
sidebar
--------------------------------------------- */
$('.chat-item').on('click', function (e) {
  $(this).toggleClass('open');
  $('.chats').toggleClass('open');
});

$('.chat-item').click(function(){
  $('.chat-item').removeClass("open");
  $(this).addClass("open");
});

$('.user-chat-remove').on("click", function (e) {
    $(".chats").removeClass("open");
    $('.chat-body').removeClass('small-sidebar');
    $('.right-sidebar').removeClass('show');
});

/* ---------------------------------------------
Right sidebar
--------------------------------------------- */
$('.chat-header .user-name, .user-icon').on('click', function (e) {
  $('.right-sidebar').addClass('show');
  $('.chat-body').addClass('small-sidebar');
});

$(".user-profile-hide").on("click", function () {
  $(".right-sidebar").removeClass("show");
  $('.chat-body').removeClass('small-sidebar');
});


/* ---------------------------------------------
Search form
--------------------------------------------- */
$(".chat-search-form a").on("click", function () {
  $(".chat-header .search-form-1").toggleClass("show");
});
$(".chat-search-form a, .chat-header .search-form-1").on("click", function (e) {
  e.stopPropagation();
});
$("body").on("click", function () {
  $(".chat-header .search-form-1").removeClass("show");
});


/* ---------------------------------------------
Screen fullscreen mode
--------------------------------------------- */
if (document.fullscreenEnabled) {
  var btn = document.getElementById("toggle");
  btn.addEventListener("click", function (event) {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    
  }, false);
  document.addEventListener("fullscreenerror", function (event) {
    console.log(event);
  });
}
  
 })(jQuery);
