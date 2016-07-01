var hoverColor = 'rgba(0, 0, 200, 0.3)'

$(document).ready(function () {


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

});