let link = 'https://www.instagram.com/p/CK9eIrLn6ja/';
$( "#start" ).click(function() {
    let bla = $('#post-link').val();
    if (bla === link) {
        setTimeout(function(){
            $( ".bg-1" ).removeClass( "open" );
            $( ".bg-1" ).addClass( "close" );
            $( ".bg-2" ).removeClass( "close" );
            $( ".bg-2" ).addClass( "open" );
        }, 2000);
        setTimeout(function(){
            $( ".settings-form" ).removeClass( "settings-close" );
            $( ".settings-form" ).addClass( "settings-open" );
        }, 1000);

    }

});
$( "#gift-start" ).click(function() {
    $( ".loader" ).removeClass( "loader-close" );
    $( ".loader" ).addClass( "loaders-open" );
    setTimeout(function(){
        $( ".loader" ).addClass( "loader-close" );
        $( ".result" ).removeClass( "result-close" );
        $( ".result" ).addClass( "result-open" );
    }, 5000);
});
