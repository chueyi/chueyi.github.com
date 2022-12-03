(function() {
    'use strict';
    console.log('reading js');
    AOS.init();

    function gohome() {
        window.location.href = "index.html"
    }

    window.onload = function() {
        document.getElementById('workbox').style.top = "-1000px"
    }

    document.getElementById('toplogo').addEventListener('click', function(event){
        event.preventDefault();
        gohome();
    })

    document.getElementById('bottomlogo').addEventListener('click', function(event){
        event.preventDefault();
        gohome();
    })

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("top").style.top = "0";
        } else {
            document.getElementById("top").style.top = "-200px";
        }
    prevScrollpos = currentScrollPos;   
    }

    document.getElementById('button-close').addEventListener('click', function(event){
        document.getElementById('workbox').style.top = "-1000px"
        document.getElementById('hamburger').className = "showing"
    })

    document.getElementById('hamburger').addEventListener('click', function(event){
        document.getElementById('workbox').style.top = "0px"
        document.getElementById('hamburger').className = "hidden"
    })

    document.getElementById('tab-home').addEventListener('click', function(event){
        document.getElementById('workbox').style.top = "-1000px"
        document.getElementById('hamburger').className = "showing"
    })

    document.getElementById('tab-web').addEventListener('click', function(event){
        document.getElementById('workbox').style.top = "-1000px"
        document.getElementById('hamburger').className = "showing"
    })

    document.getElementById('tab-graphics').addEventListener('click', function(event){
        document.getElementById('workbox').style.top = "-1000px"
        document.getElementById('hamburger').className = "showing"
    })

    document.getElementById('tab-illustration').addEventListener('click', function(event){
        document.getElementById('workbox').style.top = "-1000px"
        document.getElementById('hamburger').className = "showing"
    })



})()