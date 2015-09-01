/**
 * Created by Rashed on 01/09/2015.
 */

$(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
    $('#pull-down').click(function(){
       $('#down-menu').slideToggle('slow');
    });
});


