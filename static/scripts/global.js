$("a").on("click", function(e){
    if(this.hash.length > 1){
        if (this.hash.substr(0,1) == "#") {
            e.preventDefault();
            $('html, body').animate({
                scrollTop	: $(this.hash).offset().top - 60
            },{
                easing		: "easeInCirc",
                duration	: 500
            });
        }
    }
});
function stickNav() {
    if ( $(window).scrollTop() >= $('main').offset().top - 60) {
        $('header').addClass("nav-top").removeClass("nav-bottom");
    }
    else {
        $('header').addClass("nav-bottom").removeClass("nav-top");
    }
}
$(window).on("scroll", function() {
    stickNav();
});
$(window).on("load", function() {
    stickNav();
});
$(window).on("resize", function() {
    stickNav();
});