( function( qdUtils ) {
    var btn = document.getElementById( "btnMore" );
    var quote = document.getElementById( "quote" );
	var buffer = new qdUtils.StringBuffer("Hey Dude");
    function writeQuoteToDom() {
        quote.innerHTML = buffer.toString();
    }

    btn.addEventListener( "click", writeQuoteToDom );

    writeQuoteToDom();
} )( window["qd-utils"].default );
