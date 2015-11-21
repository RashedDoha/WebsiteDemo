/**
 * Created by Rashed on 10/09/2015.
 */
var tally = 2;
$(document).ready(function(){
    setInterval(function() {tabScroller()}, 3000);

    $('.social-icons').children("i").mouseenter(function(){
        $(this).css("font-size", "1.2em");
    });

    $('.social-icons').children("i").mouseleave(function(){
        $(this).css("font-size", "1em");
    })
});


function tabScroller()
{
    if (tally == 1) $('#sports').click();
    else if(tally == 2) $('#academic').click();
    else if(tally == 3) $('#office').click();
    else if(tally == 4) $('#campus').click();
    else if(tally == 5) $('#others').click();
    else if(tally == 6) tally = 1;
    tally++;


}


