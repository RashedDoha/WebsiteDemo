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

function tallyUpdate(elem)
{
    var id = $(elem).attr("id");
    var index = id.substr(5);
    tally = parseInt(index);
}


function tabScroller()
{
    $('#news-' + tally).click();
    tally++;
    if(tally == 5) tally = 1;

}