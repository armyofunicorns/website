/* CSS file created by Anthony Hall */

// JQuery ready
$(function(){
    $('#introText').fadeIn(1200);
    dataLayer.push({'opes_cloud': '/o/40599u8kolnobpr'});
      
    $(window).scroll(function(e) {
        console.log('---------------------');
        console.log('scrolling');
        console.log('---------------------');

        // Fade out the navigation
        if ($(window).scrollTop() >= $("nav").height()) $("nav").fadeOut(500);
        else $("nav").fadeIn(500);

        // Capture some page and window values
        // $( ".changeText" ).append( "<div>Handler for .scroll() called.</div>" );
        // let changeTextLoc = document.getElementById('changeText').pageHeight;
        // let changeTextLen = document.documentElement.clientHeight;
        
        // This is the available screen height
        // let windowLengthPx = Math.max(window.screen.height, window.screen.availHeight, 
        //     window.outerHeight, document.documentElement.clientHeight);
        // windowLengthPx = window.screen.height;

        let windowLengthPx = window.screen.height;
        // Fixed value
        console.log("Window length: " + windowLengthPx);

        // This is the current scroll value
        let changeTextLen = window.pageYOffset;
        // console.log("Current Scroll: " + changeTextLen);

        // This is the total page height
        let pageLengthPx = Math.max(document.body.scrollHeight, document.body.offsetHeight, 
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);           
        // Fixed value
        console.log("Page Length: " + pageLengthPx);

        // This is the current scroll length as a percentage of total length
        let percentageLen = Math.round(100-(((pageLengthPx - windowLengthPx) - changeTextLen)/(pageLengthPx - windowLengthPx))*100);
        if (percentageLen > 100) {
            percentageLen = 100;
        }
        // Limit to no more than 100
        // console.log("Percentage Length: " + percentageLen);

        // This is the percentage difference between the window and page
        let winPagePercentage = Math.floor(100-(((pageLengthPx - windowLengthPx)/pageLengthPx)*100));
        // Fixed value
        // console.log('Viewport percentage: ' + winPagePercentage);

        // Change the text on the screen
        let newText = document.getElementById('scrollDiv');
        let newText2 = document.getElementById('totalScrollLen');
        newText.innerHTML = percentageLen + '%';
        newText2.innerHTML = changeTextLen;

        // Now I have to move the text down the page
        // $("#slide").css("top", Math.max(180 - 0.2*window.scrollY, 0) + "px");

        let y = Math.round(window.scrollY);
        // console.log("Window Scrolly: " + y);

        $("#scrollDiv").css({"font-size": 0.8 + "em", "padding-top": 1 + "%", "top": y*winPagePercentage*.0115 + "px"});

        // Fade in sections
        /* Check the location of each desired element */
        
        $('.startHidden').each( function(i){
            // Get my information
            let divBottom = $(this).position().top + $(this).outerHeight();
            console.log ("bottom of object: " + divBottom);
            let divWindow = $(window).scrollTop() + $(window).height();
            console.log ("bottom of window: " + divWindow);
            /* If the object is completely visible in the window, fade it it */
            if( divWindow > divBottom ){
                $(this).animate({'opacity':'1'},1000);    
            }
            
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
 