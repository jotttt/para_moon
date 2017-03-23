/*jshint browser: true, jquery: true*/
$(document).on('click','.moonTxt',function() {
    $('body').addClass('activated');
    //var w = $('body').removeClass('activated').addClass('works');
    setTimeout( function(){
        $('body').removeClass('activated').addClass('working');
    }, 2000);
     setTimeout( function(){
        $('body').addClass('done');
    }, 6000);
});
