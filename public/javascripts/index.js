var hoverColor = 'rgba(0, 0, 200, 0.3)'

$(document).ready(function () {

    var offset = 40;

    $('.navbar li a').click(function(e) {
        href = $(this).attr('href')
        if(href.indexOf('#') != -1 && window.location.pathname == '/' ) {
            e.preventDefault()
            var position = $(href).position()
            var top = position.top
            var top = position.top
            $('html, body').animate({
                scrollTop: top - offset,
                scrollLeft: 0,
            }, 500, "easeInCubic");
            return
        } else if(href.indexOf('#') != -1) {
            window.location.href = '/' + href
        } 

    });


    var leaveColor = $(".div-button").css("background-color")

    $(".div-button").hover(
        function () {
            $(this).animate({backgroundColor: hoverColor }, 500)
        }, function() {
            $(this).stop().animate({backgroundColor: leaveColor}, 500)
        }
    );


    $(".inactive").on("click", function(e) {


    	$(this).removeClass("inactive").addClass("active")


    });

    $("h1").on("click", function(e) {

        $(this).effect('bounce')


    })


});