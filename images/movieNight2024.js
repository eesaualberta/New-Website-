var openMovieNight2024 = function (){
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // Build items array
    var items = [];
    for (let i = 1; i <= 67; i++) {
        items.push({
            src: `images/MovieNight2024/${i}.JPG`,
            w: 600,
            h: 400 
        });
    }
    
    var options = {    
      	history: false,
      	focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0
    };
    
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

// Set the button to open the gallery
document.getElementById('btn').onclick = openMovieNight2024;
