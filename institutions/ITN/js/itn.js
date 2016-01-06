/**
 * Created by Rashed on 10/09/2015.
 */

$(document).ready(function(){
    $('#header').show('slide', {direction: 'left'}, 1000);
    $('.image-link').magnificPopup({type:'image'});

    $('.tiptool').tooltipster();

    $('.activity-icon').css("border-radius", "50%");

    $('.activity-icon').mouseenter(function(){
       $(this).css("background-color", "#3B679E");
        $(this).children("i").css("color", "white");
    });

    $('.activity-icon').mouseleave(function(){
        $(this).css("background-color", "transparent");
        $(this).children("i").css("color", "#3B679E");
    });

    $('.social-icons').children("i").mouseenter(function(){
        $(this).css("font-size", "1.2em");
    });

    $('.social-icons').children("i").mouseleave(function(){
        $(this).css("font-size", "1em");
    });
});

