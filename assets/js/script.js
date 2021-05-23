/* CSS file created by Anthony Hall */

// JQuery ready
$(function(){
    dataLayer.push({'opes_cloud': '/o/40599u8kolnobpr'});
      
    $(window).scroll(function(e) {
        // Fade out the navigation on scroll down the page
        if ($(window).scrollTop() >= $("nav").height()) $("nav").fadeOut(500);
        else $("nav").fadeIn(500);

        // This is the available screen height
        let xF = window.innerHeight;

        // This is the current scroll value
        let zC = document.documentElement.scrollTop || document.body.scrollTop;

        // This is the total page height        
        let yF = document.body.scrollHeight;

        // Determines the total page length
        let zF = (yF - xF);

        // Determines the percentage the user has scrolled down the page
        let zCV1 = Math.ceil(100-((zF - zC)/zF)*100);
        let zCV2 = zCV1;
        zCVA = zCV1 * .05;
        zCV2 = Math.ceil(zCV1 - zCVA);

        // Change the text on the screen
        let newText = document.getElementById('scrollDiv');
        newText.innerHTML = zCV1 + '%';
        let newText2 = document.getElementById('totalScrollLen');
        newText2.innerHTML = zC;

        $("#scrollDiv").css({"font-size": 0.5 + "em", "padding-top": 1 + "%", "padding-bottom": 1 + "%", "top": zCV2 + "%"});

        // Fade in sections as I scroll down the page
        $('.startHidden').each(function(i){
            console.log(i);
            // Captain, where are we now?
            let divBottom = $(this).position().top + $(this).outerHeight();
            let divWindow = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( divWindow > divBottom ){
                $(this).animate({'opacity':'1'},1000);    
            }
        }); 

    });

    window.onload = (event) => {
        console.log('Page is fully loaded');
        
    };
});

// Events for modal overlay
function on(whichPage) {
    console.log(whichPage);
    if (whichPage === 1) {
        document.getElementById("aboutModal").style.display = "block";
    } else if (whichPage === 2) {
        document.getElementById("projectsModal").style.display = "block";
    } else {
        document.getElementById("contactModal").style.display = "block";
    }
        
}

function off(whichPage) {
    console.log(whichPage);
    if (whichPage === 1) {
        document.getElementById("aboutModal").style.display = "none";
    } else if (whichPage === 2) {
        document.getElementById("projectsModal").style.display = "none";
    } else {
        document.getElementById("contactModal").style.display = "none";
    }
}

// Event to jump the page to top
function jumpToTop() {
    // document.getElementById("backToTop").onclick = function() {
    window.scrollTo(0,0);
};

// Event to animate something
// Parking this code here because I don't want to lose it
// var id = setInterval(frameAnima, 5);

// function frameAnima() {
//   if (/* test for finished */) {
//     clearInterval(id);
//   } else {
//     /* code to change the element style */ 
//   }
// }
 