var openInjeraNChill2019 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(2).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(3).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(4).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(5).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(6).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(7).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(8).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(9).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(10).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(11).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(12).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(13).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(14).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(15).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(16).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(17).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(18).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(19).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(20).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(21).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(22).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(1).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(23).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(24).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(25).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(26).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(27).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(28).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(29).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(30).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(31).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(32).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(33).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(34).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(35).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(36).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(37).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(38).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(39).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(40).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(41).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(42).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(43).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(44).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(45).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(47).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(48).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(49).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(50).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(51).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(52).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(53).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(54).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(55).jpg', w:600, h:400},
        {src:'https://eesaualberta.s3.ca-central-1.amazonaws.com/images/gallery/injeraandchill2019/ic+(56).jpg', w:600, h:400}
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