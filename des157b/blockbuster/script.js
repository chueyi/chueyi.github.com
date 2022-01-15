(function(){

    'use script';
    console.log('reading js');

    const madeonButton = document.getElementById('madeonbutton')
    const porterButton = document.getElementById('porterbutton')
    const madeonVideo = document.getElementById('madeonvideo')
    const porterVideo = document.getElementById('portervideo')

    porterButton.addEventListener('click', function(){
        madeonVideo.style.visibility = 'hidden';
        porterVideo.style.visibility = 'visible';
    })

    madeonButton.addEventListener('click', function(){
        porterVideo.style.visibility = 'hidden';
        madeonVideo.style.visibility = 'visible';
    })


})();