"use strict";
$(document).ready(function(){

    $("#hidden-menu").click(function(){
        $(".left_asaid").addClass("visible");
        
    })
    $(".fa-times").click(function(){
        $(".left_asaid").removeClass("visible")

    })
})