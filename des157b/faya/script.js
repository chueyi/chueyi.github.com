(function(){

    'use script';
    console.log('reading js');

    const clickSound = new Audio('media/click.wav');

    document.getElementById('link1').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('characterpanel').className = 'showing'
        clickSound.play();
    })

    document.getElementById('link2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('characterpanel').className = 'hidden'
        clickSound.play();
    })
    

})();