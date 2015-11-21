/**
 * Created by Rashed on 10/09/2015.
 */
var tally = 2;
$(document).ready(function(){
    $('.carousel').carousel();
    setInterval(function() {tabScroller()}, 3000);

    $('.social-icons').children("i").mouseenter(function(){
        $(this).css("font-size", "1.2em");
    });

    $('.social-icons').children("i").mouseleave(function(){
        $(this).css("font-size", "1em");
    })

    $('.bxSlider').bxSlider();
});


function tabScroller()
{
    $('#news-' + tally).click();
    tally++;
    if(tally == 4) tally = 1;

}


