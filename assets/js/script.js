/* CSS file created by Anthony Hall */

// JQuery ready
$(function(){
    // $('#introText').fadeIn(1200);
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
        let xF = window.innerHeight;
        // console.log("Window length: " + windowLengthPx);

        // This is the current scroll value
        // let changeTextLen = window.scrollY;
        let zC = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log("Current Scroll: " + changeTextLen);

        // This is the total page height
        // let pageLengthPx = Math.max(document.body.scrollHeight, document.body.offsetHeight, 
        //     document.body.clientHeight);           
        let yF = document.body.scrollHeight;
        // console.log("Page Length: " + pageLengthPx);

        // Determines the total page length
        let zF = (yF - xF);
        // zFN = zF * 0.02;
        // zF = zF - zFN;

        // Determine the percentage difference between the page and screen lengths
        // let yFA = Math.floor(100-((yF - xF)/yF)*100);
        // yFA = yFA * 0.01;

        // Determines the percentage the user has scrolled down the page
        let zCV1 = Math.ceil(100-((zF - zC)/zF)*100);
        let zCV2 = zCV1;
        zCVA = zCV1 * .05;
        zCV2 = Math.ceil(zCV1 - zCVA);

        // Determines the scrollY so that 100% is at the bottom of the page
        // let zCA = Math.floor(zCV*yFA);

        // This is the current scroll length as a percentage of total length
        // let percentageLen = Math.round(100-(((pageLengthPx - windowLengthPx) - changeTextLen)/(pageLengthPx - windowLengthPx))*100);
        // if (percentageLen > 100) {
        //     percentageLen = 100;
        // }
        // Limit to no more than 100
        // console.log("Percentage Length: " + percentageLen);

        // This is the percentage difference between the window and page
        // let winPagePercentage = Math.floor(100-(((pageLengthPx - windowLengthPx)/pageLengthPx)*100));
        // console.log('Viewport percentage: ' + winPagePercentage);

        // let progress = (document.body.scrollTop / ( document.body.scrollHeight - window.innerHeight )) * 100;

        // Change the text on the screen
        let newText = document.getElementById('scrollDiv');
        newText.innerHTML = zCV1 + '%';
        let newText2 = document.getElementById('totalScrollLen');
        newText2.innerHTML = zC;
        
        // let testText1 = document.getElementById('dpSHeight');
        // testText1.innerHTML = xF + '---';
        // let testText2 = document.getElementById('dpCPosition');
        // testText2.innerHTML = zCA + '---';
        // let testText3 = document.getElementById('dpPLength');
        // testText3.innerHTML = yF + '---';
        // let testText4 = document.getElementById('dpTLength');
        // testText4.innerHTML = zF + '---';

        // Now I have to move the text down the page
        // $("#slide").css("top", Math.max(180 - 0.2*window.scrollY, 0) + "px");

        // let y = Math.round(window.scrollY);
        // console.log("Window Scrolly: " + y);

        $("#scrollDiv").css({"font-size": 0.5 + "em", "padding-top": 1 + "%", "padding-bottom": 1 + "%", "top": zCV2 + "%"});

        // Fade in sections as I scroll down the page
        /* Check the location of each desired element */
        $('.startHidden').each(function(i){
            console.log(i);
            // Get my information
            let divBottom = $(this).position().top + $(this).outerHeight();
            // console.log ("bottom of object: " + divBottom);
            let divWindow = $(window).scrollTop() + $(window).height();
            // console.log ("bottom of window: " + divWindow);
            /* If the object is completely visible in the window, fade it it */
            if( divWindow > divBottom ){
                $(this).animate({'opacity':'1'},1000);    
            }
        }); 

    });

    window.onload = (event) => {
        console.log('page is fully loaded');
        
    };
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
 