$('#scroll').on('click', function(){
        event.preventDefault();
        console.log('clicked it');
        $('html', 'body').animate({
            scrollTop: $( $.attr(this, 'href')).offset().top
        }, 500);
        console.log('scrolled?');
    });