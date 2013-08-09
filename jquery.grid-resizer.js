/**
 * Jquery Grid Resizer resizes grid columns for even spacing
 */

(function( $ ) {

    GridResizer = function(containers,childSelector,margin,widthCallback) {

        function resize() {
            containers.each(function(){
                var blocks = $(this).find(childSelector);
                var newWidth = (Math.floor(window.getComputedStyle($(this)[0]).width.replace(/px+$/,'')) - margin*(blocks.length+1) ) / blocks.length;
                blocks.css({
                    "width" : newWidth+"px",
                    "margin-right" : margin+"px",
                    "margin-left" : 0
                }).first().css({
                        "margin-left" : margin+"px"
                    })
                if ( widthCallback ) {
                    widthCallback(newWidth,newWidth*blocks.length+margin*(blocks.length+1));
                }
            })
        }
        $(document).ready(resize);
        $(window).on("resize",resize);
    }

})( jQuery );