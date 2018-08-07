$(document).ready(function(){
    var files =
        ["https://giphy.com/embed/3o85xBwvWcj1Z11Gda",
            "https://giphy.com/embed/l41lYa0ujHg2LS5Pi",
            "https://giphy.com/embed/atcqQ5PuX41J6",
            "https://giphy.com/embed/3o6ZsSnCvdD1rMYSM8",
            "https://giphy.com/embed/l0HlMEi55YsfXyzMk"
        ];
    var rand = Math.floor(Math.random()*files.length);
    console.log(rand);
    $('#ifrm').attr('src',files[rand]);
    console.log(files[rand]);
    console.log($('#ifrm'));
});

