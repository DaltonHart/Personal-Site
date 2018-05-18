$(document).ready(function() {

console.log('Im working!');
//function to call particles.json
particlesJS.load('particles-js', 'scripts/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

$('.homeLnk').on('click',function(){
  console.log('clicked jQuery works');
})

});