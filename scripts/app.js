$(document).ready(function() {

console.log('Im working!');
//function to call particles.json
particlesJS.load('particles-js', 'scripts/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

$('.homeLnk').on('click',function(){
  console.log('clicked jQuery works');
})
//scroll function
$(".navBar").find("a").on('click',function(e) {
  e.preventDefault();
  console.log('clicked the nav bar');
  var section = $(this).attr("href");
  $("html, body").animate({
      scrollTop: $(section).offset().top
  });
});


//google maps api to show sf area 
var map;
var googleMap = function () {
  console.log('map!');
    map = new google.maps.Map(document.getElementById("contact-me"), {
      center: {lat: 37.790921, lng: -122.401219},
      zoom: 18
    });
    marker = new google.maps.Marker({
      position: map.center,
      map: map,
    })
}

googleMap();

});