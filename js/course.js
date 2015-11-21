/**
 * Created by Rashed on 06/10/2015.
 */

var tally = 2;
$(document).ready(function(){

    setInterval(function() {tabScroller()}, 3000);
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
    });
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