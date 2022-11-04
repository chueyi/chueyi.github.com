(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const buttonweb = document.querySelector('button-web');
    let mode = 'dark';

    const switchSound  = new Audio('sound/switch.mp3');

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            header.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            header.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
        }
        switchSound.play();
    })

    document.getElementById('button-web').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#illustration').className = 'shrink'
        document.querySelector('#graphicdesign').className = 'shrink'   
        document.querySelector('#nav-web').className = 'showing'
        document.querySelector('#nav-illustration').className = 'hidden'
        document.querySelector('#nav-graphicdesign').className = 'hidden'
        document.querySelector('#webdesign').className = 'expand'
    });

    document.getElementById('button-illustration').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#nav-web').className = 'hidden'
        document.querySelector('#nav-illustration').className = 'showing'
        document.querySelector('#nav-graphicdesign').className = 'hidden'
        document.querySelector('#webdesign').className = 'shrink'
        document.querySelector('#illustration').className = 'expand'
        document.querySelector('#graphicdesign').className = 'shrink'
        document.querySelector('#picture1').className = 'expand-picture'
        document.querySelector('#picture2').className = 'expand-picture'
    });

    document.getElementById('button-graphicdesign').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#nav-web').className = 'hidden'
        document.querySelector('#nav-illustration').className = 'hidden'
        document.querySelector('#nav-graphicdesign').className = 'showing'
        document.querySelector('#webdesign').className = 'shrink'
        document.querySelector('#illustration').className = 'shrink'
        document.querySelector('#graphicdesign').className = 'expand'
    });

})()