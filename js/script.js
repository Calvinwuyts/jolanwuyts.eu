$('#scroll').on('click', function(){
        event.preventDefault();
        console.log('clicked it');
        $('html', 'body').animate({
            scrollTop: $( $.attr(this, 'href')).offset().top
        -100}, 500);
        console.log('scrolled?');
    });

$(document).on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    -100}, 500);
});
