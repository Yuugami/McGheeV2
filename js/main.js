jQuery(document).ready(function ($) {

    //    var $horizontal = $('body');    

    //    $(window).scroll(function () {
    //        var s = $(this).scrollTop(),
    //            d = $(document).width(),
    //            c = $(this).width();
    //        
    //        console.log(s);
    //        console.log(d);
    //        console.log(c);
    //
    //        var scrollPercent = (s / (d - c));
    //
    //        var position = (scrollPercent * ($(document).width() - $horizontal.width()));
    //        
    //        $horizontal.css({
    //            'right': position
    //        });
    //    });

    $('html').mousewheel(function (e, delta) {
        // multiplying by 40 is the sensitivity, 
        // increase to scroll faster.
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
});
