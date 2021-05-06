/* CSS file created by Anthony Hall */

// JQuery ready
$(document).ready(function() {
    console.log('window ready');
      
    $(window).scroll(function() {
        console.log('scrolling');
        $('section').each(function(i) {
            $(this).delay((i + 1) * 150).fadeIn(250);
        });
    });

    // Fade in function
    $(window).load(function() {
        console.log('window loaded');
    });
});

// Overlay for modal
function on() {
    document.getElementById("contactOverlay").style.display = "block";
}

function off() {
    document.getElementById("contactOverlay").style.display = "none";
}