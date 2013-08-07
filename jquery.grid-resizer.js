/**
 * Jquery Grid Resizer resizes grid columns for even spacing
 */

(function( $ ) {

    GridResizer = function(containers,childSelector,margin) {

        function resize() {
            containers.each(function(){
                var blocks = $(this).find(childSelector);
                var newWidth = (parseInt($(this).width(),10) - margin*(blocks.length+1) ) / blocks.length;
                blocks.css({
                    "width" : newWidth+"px",
                    "margin-right" : margin+"px",
                    "margin-left" : 0
                }).first().css({
                        "margin-left" : margin+"px"
                    })
            })
        }
        $(document).ready(resize);
        $(window).on("resize",resize);
    }

})( jQuery );