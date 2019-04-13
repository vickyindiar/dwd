
var clickedNav = false;
var t1 = new TimelineMax({paused: true});

t1.to(".one", 0.8, { y: 12, rotation: 45, ease: Expo.easeInOut, delay: -0.8 })
  .to(".two", 0.8, { opacity:0, delay: -0.8 })
  .to(".three", 0.8, { y: -12, rotation: -45, ease: Expo.easeInOut, delay: -0.8 })
  .to(".menu", 0.8, { top: "0%", ease: Expo.easeInOut, delay: -1 })


t1.staggerFrom(".menu ul li", 1.2, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.3);
t1.reverse();
$(document).on("click", ".toggle-btn", function() { t1.reversed(!t1.reversed());});
$(document).on("click", "a", function() { t1.reversed(!t1.reversed()); delayed = true; });
function whereonclick(){
     clickedNav = true;
     setTimeout(()=>{
          ShowTheToast();
     }, 2500);
};

function initMap() {
     var basofi = {lat:-6.202335, lng: 107.035557};
     var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: basofi
     });
     var marker = new google.maps.Marker({
          position: basofi,
          map: map,
          icon: "assets/img/lokasi-smal.png"
     });
     marker.addListener('click', goToMaps);
}

function goToMaps(){
     window.open("https://www.google.com/maps/search/?api=1&query=-6.202335,107.035557",'_blank');
}

function ShowTheToast() {
     var toastHTML = '<span>Open Maps App</span><button class="btn-flat toast-action"  onclick="javascript: goToMaps()">Click</button>';
     M.toast({html: toastHTML, completeCallback: function(){ showToast = false;}});
}


//====================================> COUNTDOWN

var cD = new Date("Apr 27, 2019 00:00:00").getTime();

var cDFunction = setInterval(() => {
     let now = new Date().getTime();
     let distance = cD - now;
     let d = Math.floor(distance / (1000*60*60*24));
     let h =  Math.floor( (distance % (1000*60*60*24)) / (1000*60*60) );
     let m =  Math.floor( (distance % (1000*60*60)) / (1000*60) );
     let s =  Math.floor( (distance % (1000*60)) / 1000 );

     document.getElementById('countdown').innerHTML = `${d}d  ${h}h  ${m}m ${s}s`;
     if(distance < 0){
          clearInterval(cDFunction);
     document.getElementById('countdown').innerHTML = 'EXPIRED';

     }
}, 1000);

//================================================= STORY

$(document).ready(function(){
     var t2 = new TimelineMax();
     var swiper = new Swiper('.swiper-container', {
          speed: 600,
          parallax: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
     });
     var $svg1 = $('.garis1 svg').drawsvg({ duration: 5000, easing: 'linear' });
     $svg1.drawsvg('animate');
     setTimeout(() => {
          t2.from(".img-circle", 0.5, {opacity:0})
            .from(".img-name svg", 1, {opacity:0})
            .from('.img-floral-1 img', 1,  { width:"0%",  ease:Power2.easeInOut})
            .from('.img-floral-2 img', 1,  {width:"0%",  ease:Power2.easeInOut});
     }, 200);


       TweenMax.from('.garis1 img', 1,  { width:"0%",  ease:Power2.easeInOut})
});




var showToast = false;
$(window).scroll(function() {
     var scroll = $(window).scrollTop(); 
     //console.log(scroll);
     if (scroll == 1 || scroll == 2) { 

     }
     else if(scroll >= 200 && scroll <= 600 ){
          if(!showToast && !clickedNav){
               ShowTheToast();
               showToast = true;
               clickedNav = false;
          }
     } 

});
