/* CSS file created by Anthony Hall */

// JQuery ready
$(document).ready(function() {
    console.log('window ready');
      
    $(window).scroll(function() {
        console.log('---------------------');
        console.log('scrolling');
        console.log('---------------------');

        // Capture some page and window values
        // $( ".changeText" ).append( "<div>Handler for .scroll() called.</div>" );
        // var changeTextLoc = document.getElementById('changeText').pageHeight;
        

        // var changeTextLen = document.documentElement.clientHeight;
        
        // This is the available screen height
        // var windowLengthPx = Math.max(window.screen.height, window.screen.availHeight, 
        //     window.outerHeight, document.documentElement.clientHeight);

        var windowLengthPx = window.screen.height;
        // Fixed value
        console.log("Window length: " + windowLengthPx);

        // This is the current scroll value
        var changeTextLen = window.pageYOffset;
        console.log("Current Scroll: " + changeTextLen);

        // This is the total page height
        var pageLengthPx = Math.max(document.body.scrollHeight, document.body.offsetHeight, 
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);           
        // Fixed value
        console.log("Page Length: " + pageLengthPx);

        // This is the current scroll length as a percentage of total length
        var percentageLen = Math.round(100-(((pageLengthPx - windowLengthPx) - changeTextLen)/(pageLengthPx - windowLengthPx))*100);
        if (percentageLen > 100) {
            percentageLen = 100;
        }
        // Limit to no more than 100
        console.log("Percentage Length: " + percentageLen);

        // This is the percentage difference between the window and page
        var winPagePercentage = Math.floor(100-(((pageLengthPx - windowLengthPx)/pageLengthPx)*100));
        // Fixed value
        console.log('Viewport percentage: ' + winPagePercentage);


        // Change the text on the screen
        var newText = document.getElementById('scrollDiv');
        var newText2 = document.getElementById('totalScrollLen');
        newText.innerHTML = percentageLen + '%';
        newText2.innerHTML = changeTextLen;

        // Now I have to move the text down the page
        // $("#slide").css("top", Math.max(180 - 0.2*window.scrollY, 0) + "px");

        var y = Math.round(window.scrollY);
        console.log("Window Scrolly: " + y);

        $("#scrollDiv").css({"font-size": 0.8 + "em", "padding-top": 1 + "%", "top": y*winPagePercentage*.0122 + "px"});
    });

    // Fade in function
    $(window).load(function() {
        console.log('window loaded');
        $('section').each(function(i) {
            console.log(i);
            $(this).delay((i + 1) * 150).fadeIn(100);
        });
    });
});

// Overlay for modal
function on() {
    document.getElementById("contactOverlay").style.display = "block";
}

function off() {
    document.getElementById("contactOverlay").style.display = "none";
}

// Jump to top
function jumpToTop() {
    // document.getElementById("backToTop").onclick = function() {
    
    console.log('got here');
    window.scrollTo(0,0);
};
 