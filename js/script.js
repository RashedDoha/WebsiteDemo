/**
 * Created by Rashed on 01/09/2015.
 */
var listTally = 1;
var fadeInSpeed = 'fast';
$(document).ready(function() {

    $('.image-link').magnificPopup({type:'image'});
    $('#pull-down').click(function(){
       $('#down-menu').slideToggle('slow');
    });




    $('.continue-reading').on('scrollSpy:enter', function() {
        $('#story1').fadeTo(fadeInSpeed, 1);
        $('#story2').fadeTo(fadeInSpeed, 1);
        $('#story3').fadeTo(fadeInSpeed, 1);
    });

    //$('#top-stories-header').on('scrollSpy:enter', function(){
    //    $(this).show('slide', {direction: 'left'}, 1000);
    //});
    //
    //$('#audience-header').on('scrollSpy:enter', function(){
    //    $(this).show('slide', {direction: 'left'}, 1000);
    //});

    $('.continue-reading').scrollSpy();
    //$('#top-stories-header').scrollSpy();
    //$('#audience-header').scrollSpy();
    $('.tiptool').tooltipster();
    //

    setInterval(function() {listScroller()}, 3000);




});

function listScroller()
{
    if(listTally == 5)
    {
        $('#audience-' + listTally).addClass('showItem');
        $('#list-item-' + listTally).removeClass('active');
        listTally = 1;
        $('#list-item-' + listTally).addClass('active');
        $('#audience-' + listTally).removeClass('showItem');


    }
    else
    {
        $('#audience-' + listTally).addClass('showItem');
        $('#list-item-' + listTally).removeClass('active');
        $('#list-item-' + ++listTally).addClass('active');
        $('#audience-' + listTally).removeClass('showItem');


    }


}


