(function(){

    'use script';
    console.log('reading js');

    window.onload = function(){
        document.getElementById('leftsection').className = 'bluegradient1'
        document.getElementById('story-p').className = 'hidden'
        document.getElementById('goals-p').className = 'hidden'
        document.getElementById('characterpanel').className = 'hidden'
        document.getElementById('contact').className = 'hidden'
        document.getElementById('help').className = 'hidden'
        document.getElementById('bluegradient1').className = 'showing'
        document.getElementById('bluegradient2').className = 'hidden'
        document.getElementById('redgradient').className = 'hidden'
        document.getElementById('greengradient').className = 'hidden'
        document.getElementById('farmercharacter1').className = 'hidden'
        document.getElementById('farmercharacter2').className = 'hidden'
        document.getElementById('droughtcharacter').className = 'hidden'
    }

    document.getElementById('button1').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById("intro-p").className = 'hidden';
        document.getElementById("story-p").className = 'showing';
        document.getElementById('bluegradient1').className = 'hidden';
        document.getElementById('greengradient').className = 'showing';
        document.getElementById('watercharacter').className = 'hidden';
        document.getElementById('farmercharacter1').className = 'showing'
        document.getElementById('farmercharacter2').className = 'showing'
    })

    document.getElementById('button2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById("intro-p").className = 'showing';
        document.getElementById("story-p").className = 'hidden';
        document.getElementById('bluegradient1').className = 'showing';
        document.getElementById('greengradient').className = 'hidden';
        document.getElementById('watercharacter').className = 'showing';
        document.getElementById('farmercharacter1').className = 'hidden'
        document.getElementById('farmercharacter2').className = 'hidden'
    })

    document.getElementById('button3').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById("story-p").className = 'hidden';
        document.getElementById("goals-p").className = 'showing';
        document.getElementById('greengradient').className = 'hidden';
        document.getElementById('redgradient').className = 'showing'
        document.getElementById('farmercharacter1').className = 'hidden'
        document.getElementById('farmercharacter2').className = 'hidden'
        document.getElementById('droughtcharacter').className = 'showing'
    })

    document.getElementById('button4').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById("story-p").className = 'showing';
        document.getElementById("goals-p").className = 'hidden';
        document.getElementById('redgradient').className = 'hidden';
        document.getElementById('greengradient').className = 'showing'
        document.getElementById('farmercharacter1').className = 'showing'
        document.getElementById('farmercharacter2').className = 'showing'
        document.getElementById('droughtcharacter').className = 'hidden'
    })

    document.getElementById('button5').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('homepage').className = 'hidden'
        document.getElementById('help').className = 'showing'
        document.getElementById('redgradient').className = 'hidden'
        document.getElementById('bluegradient1').className = 'showing'
    })

    document.getElementById('link1').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('homepage').className = 'showing'
        document.getElementById('characterpanel').className = 'hidden'
        document.getElementById('leftsection').className = 'bluegradient'
        document.getElementById('contact').className = 'hidden'
        document.getElementById('help').className = 'hidden'
        document.getElementById('bluegradient1').className = 'showing';
        document.getElementById('greengradient').className = 'hidden';
        document.getElementById('redgradient').className = 'hidden';
    })

    document.getElementById('link2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('homepage').className = 'hidden'
        document.getElementById('characterpanel').className = 'showing'
        document.getElementById('leftsection').className = 'bluegradient'
        document.getElementById('contact').className = 'hidden'
        document.getElementById('help').className = 'hidden'
        document.getElementById('bluegradient1').className = 'showing';
        document.getElementById('greengradient').className = 'hidden';
        document.getElementById('redgradient').className = 'hidden';
    })

    document.getElementById('link3').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('help').className = 'showing'        
        document.getElementById('contact').className = 'hidden'
        document.getElementById('characterpanel').className = 'hidden'
        document.getElementById('homepage').className = 'hidden'
        document.getElementById('bluegradient1').className = 'showing';
        document.getElementById('greengradient').className = 'hidden';
        document.getElementById('redgradient').className = 'hidden';
    })

    document.getElementById('link4').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('characterpanel').className = 'hidden'
        document.getElementById('contact').className = 'showing'        
        document.getElementById('help').className = 'hidden'
        document.getElementById('homepage').className = 'hidden'
        document.getElementById('bluegradient1').className = 'showing';
        document.getElementById('greengradient').className = 'hidden';
        document.getElementById('redgradient').className = 'hidden';
    })
    
    document.getElementById('drought').addEventListener('mouseover', function(event){
        event.preventDefault();
        document.getElementById('redgradient').className = 'showing';
        document.getElementById('bluegradient1').className = 'hidden';
        document.getElementById('bluegradient2').className = 'hidden';
        document.getElementById('greengradient').className = 'hidden';
        document.getElementById('droughttext').className = 'showing'
    })

    document.getElementById('drought').addEventListener('mouseout', function(event){
        event.preventDefault();
        document.getElementById('redgradient').className = 'hidden';
        document.getElementById('bluegradient1').className = 'showing';
        document.getElementById('bluegradient2').className = 'hidden';
        document.getElementById('greengradient').className = 'hidden';
        document.getElementById('droughttext').className = 'hidden'
    })

    document.getElementById('water').addEventListener('mouseover', function(event){
        event.preventDefault();
        document.getElementById('redgradient').className = 'hidden';
        document.getElementById('bluegradient1').className = 'hidden'
        document.getElementById('bluegradient2').className = 'showing'
        document.getElementById('greengradient').className = 'hidden';
        document.getElementById('watertext').className = 'showing'
    });

    document.getElementById('water').addEventListener('mouseout', function(event){
        event.preventDefault();
        document.getElementById('redgradient').className = 'hidden';
        document.getElementById('greengradient').className = 'hidden';
        document.getElementById('bluegradient1').className = 'showing'
        document.getElementById('bluegradient2').className = 'hidden'
        document.getElementById('watertext').className = 'hidden'
    });

    document.getElementById('farmers').addEventListener('mouseover', function(event){
        event.preventDefault();
        document.getElementById('redgradient').className = 'hidden';
        document.getElementById('bluegradient1').className = 'hidden';
        document.getElementById('bluegradient2').className = 'hidden';
        document.getElementById('greengradient').className = 'showing';
        document.getElementById('farmertext').className = 'showing'
    });

    document.getElementById('farmers').addEventListener('mouseout', function(event){
        event.preventDefault();
        document.getElementById('redgradient').className = 'hidden';
        document.getElementById('bluegradient1').className = 'showing';
        document.getElementById('bluegradient2').className = 'hidden'
        document.getElementById('greengradient').className = 'hidden';
        document.getElementById('farmertext').className = 'hidden'
    });
    

})();