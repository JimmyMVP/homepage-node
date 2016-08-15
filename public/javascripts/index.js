var hoverColor = 'rgba(0, 0, 200, 0.3)'


$(document).ready(function () {


    //Gooogle analytics part
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-82494716-1', 'auto');
  ga('send', 'pageview');


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