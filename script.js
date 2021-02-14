let link = 'https://www.instagram.com/p/CK9eIrLn6ja/';
$( "#start" ).click(function() {
    let bla = $('#post-link').val();
    if (bla === link) {
        $( ".stats" ).removeClass( "close" );
        $( ".stats" ).addClass( "open" );
        $( ".bg-1" ).removeClass( "open" );
        $( ".bg-1" ).addClass( "close" );
        $( ".bg-2" ).removeClass( "close" );
        $( ".bg-2" ).addClass( "open" );
    }

});
