/**
 * Created by Jimmy on 01/07/16.
 */

$(document).ready(function(){

    //Expand wells
    $('.project-well').on("click", function() {
        $(this).find("p").slideToggle()
        console.log("Expanding well")
    });


});