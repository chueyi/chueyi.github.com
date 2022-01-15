(function(){

    'use script';
    console.log('reading js');

    const info = document.getElementById('info');
    const navbar = document.getElementById('navbar');
    const marquee = document.getElementById('marquee');
    const blackoverlay = document.getElementById('blackoverlay');
    const closer = document.getElementById('closingbutton');

    const madeonButton = document.getElementById('madeonbutton')
    const porterButton = document.getElementById('porterbutton')

    const madeonVideo = document.getElementById('madeonvideo')
    const porterVideo = document.getElementById('portervideo')

    const madeonText = document.getElementById('madeontext')
    const porterText = document.getElementById('portertext')

    const madeonBox = document.getElementById('madeonbox')
    const porterBox = document.getElementById('porterbox')

    madeonButton.addEventListener('click', function(){
        porterText.style.visibility = 'hidden';
        porterVideo.style.visibility = 'hidden';
        porterBox.style.visibility = 'hidden';
        madeonVideo.style.visibility = 'visible';
        madeonText.style.visibility = 'visible';
        madeonBox.style.display = 'block';
    })

    porterButton.addEventListener('click', function(){
        madeonVideo.style.visibility = 'hidden';
        madeonText.style.visibility = 'hidden';
        madeonBox.style.display = 'none';
        porterVideo.style.visibility = 'visible';
        porterText.style.visibility = 'visible';
        porterBox.style.visibility = 'visible';
    })

    closer.addEventListener('mouseover', function(){
        info.style.opacity = '0';
        closer.style.opacity = '0';
        navbar.style.opacity = '0';
        marquee.style.opacity = '0';
        blackoverlay.style.opacity = '0';
    })

    closer.addEventListener('mouseout', function(){
        info.style.opacity = '1';
        closer.style.opacity = '1';
        navbar.style.opacity = '1';
        marquee.style.opacity = '1';
        blackoverlay.style.opacity = '1';
    })


})();