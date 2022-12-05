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
        document.getElementById('workbox').style.display = "block"
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

    anime({
        targets: '.svg path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1200,
        delay: function(el, i) { return i * 20 },
        direction: 'alternate',
        loop: false
      });

    let svgmorning = document.getElementById('svg-morning'),
        svgevening = document.getElementById('svg-evening'),
        background = document.querySelector('body'),
        top = document.getElementById('top'),
        toplogo = document.getElementById('toplogo'),
        workbox = document.getElementById('workbox'),
        hamburger = document.getElementById('hamburger'),
        bar = document.getElementById('bar'),
        buttonclose = document.getElementById('button-close'),
        bottomtitle = document.getElementById('bottom-title'),
        today,
        h;

    function time() {
        today = new Date,
        h = today.getHours();

        if (h>=18 || h<5) {
            svgmorning.style.display = "none"
            svgevening.style.display = "block"
            background.style.backgroundColor = "black"
            background.style.color = "white"
            top.style.backgroundColor = "black"
            toplogo.style.color = "white"
            hamburger.style.backgroundColor = "white"
            hamburger.style.borderRadius = "5px"
            bar.style.backgroundColor = "black"
            workbox.style.backgroundColor = "black"
            buttonclose.style.color = "black"
            buttonclose.style.backgroundColor = "white"
            bottomtitle.style.webkitTextStrokeColor = "white"

            document.getElementsByClassName('worklinks')[0].style.color = 'white';
            document.getElementsByClassName('worklinks')[0].style.border = 'solid 1.5px white';
            document.getElementsByClassName('worklinks')[0].style.backgroundColor = 'black';
            document.getElementsByClassName('worklinks')[1].style.color = 'white';
            document.getElementsByClassName('worklinks')[1].style.backgroundColor = 'black';
            document.getElementsByClassName('worklinks')[1].style.border = 'solid 1.5px white';
            document.getElementsByClassName('worklinks')[2].style.color = 'white';
            document.getElementsByClassName('worklinks')[2].style.backgroundColor = 'black';
            document.getElementsByClassName('worklinks')[2].style.border = 'solid 1.5px white';
            document.getElementsByClassName('worklinks')[3].style.color = 'white';
            document.getElementsByClassName('worklinks')[3].style.border = 'solid 1.5px white';
            document.getElementsByClassName('worklinks')[3].style.backgroundColor = 'black';

            function myFunction(x) {
                if (x.matches) {
                    document.getElementsByClassName('worklinks')[0].style.border = 'solid 0px white';
                    document.getElementsByClassName('worklinks')[1].style.border = 'solid 0px white';
                    document.getElementsByClassName('worklinks')[2].style.border = 'solid 0px white';
                    document.getElementsByClassName('worklinks')[3].style.border = 'solid 0px white';
                    top.style.background = 'transparent'
                } else {
                    document.getElementsByClassName('worklinks')[0].style.border = 'solid 1.5px white';
                    document.getElementsByClassName('worklinks')[1].style.border = 'solid 1.5px white';
                    document.getElementsByClassName('worklinks')[2].style.border = 'solid 1.5px white';
                    document.getElementsByClassName('worklinks')[3].style.border = 'solid 1.5px white';
                    top.style.background = 'black'
                }
                
              }

              var x = window.matchMedia("(max-width: 800px)")
              myFunction(x)
              x.addListener(myFunction) 

        }
        else if (h>=5 || h<18) {
            svgmorning.style.display = "block"
            svgevening.style.display = "none"
        }
        else {
            svgmorning.style.display = "block"
            svgevening.style.display = "none"
        }
    }
    time();

      myFunction(x)
      x.addListener(myFunction) 
      

})()