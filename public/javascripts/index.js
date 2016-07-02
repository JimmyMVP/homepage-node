var hoverColor = 'rgba(0, 0, 200, 0.3)'

$(document).ready(function () {

    var offset = 40;

    $('.navbar li a').click(function(e) {
        position = $($(this).attr('href')).position()
        var top = position.top
        $('html, body').animate({
        scrollTop: top - offset,
        scrollLeft: 0,
        }, 500, "easeInCubic");
    });


    var leaveColor = $(".div-button").css("background-color")

    $(".div-button").hover(
        function () {
            console.log("Hovering")
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