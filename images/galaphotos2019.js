var openGala2019 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(6).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(7).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(8).jpg', w:600, h: 400},
        {
            src: 'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(1).jpg',
            w: 600,
            h: 400
        },
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(2).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(3).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(4).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(5).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(9).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(10).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(11).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(12).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(13).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(14).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(15).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(16).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(17).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(18).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(19).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(20).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(21).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(22).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(23).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(24).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(25).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(26).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(27).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(28).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(29).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(30).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(31).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(32).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(33).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(34).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(35).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(36).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(37).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(38).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(39).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(40).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(41).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(42).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(43).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(44).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(45).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(46).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(47).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(48).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(49).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(50).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(51).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(52).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(53).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(54).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(55).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(56).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(57).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(58).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(59).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(60).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(61).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(62).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(63).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(64).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(65).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(66).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(67).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(68).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(69).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(70).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(71).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(72).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(73).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(74).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(75).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(76).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(77).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(78).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(79).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(80).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(81).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(82).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(83).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(84).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(85).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(86).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(87).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(88).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(89).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(90).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(91).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(92).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(93).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(94).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(95).jpg', w:600, h: 400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/gala/gala+(96).jpg', w:600, h: 400},
        
    
    ];
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

openPhotoSwipe();

document.getElementById('btn').onclick = openPhotoSwipe;