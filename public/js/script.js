// Custom Script for adding functionalities

// Auto initialize all materialize functions
M.AutoInit();

// custom functions to do when the document is ready (materialize)
$(document).ready(function(){
    // // initialize the carousel
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        duration: 200
      });
    //   Invoke autoplay function
      autoplay();
    //   define autoplay fuction to change the carousel image automatically
      function autoplay() {
          $('.carousel').carousel('next');
          setTimeout(autoplay,5000);
      }
});