var openGameNight2024 = function (){
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // Build items array
    var items = [];
    for (let i = 1; i <= 70; i++) {
        const imgNumber = String(i).padStart(4, '0');
        items.push({
            src: `images/fallgamenight2024/IMG_${imgNumber}.JPG`,
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
document.getElementById('btn').onclick = openGameNight2024;
