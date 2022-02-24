(function () {

    'use strict';
    console.log('reading js');

    // OVERLAY1    

    document.getElementById('panel1').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay1').className = 'showing';
        document.getElementById('panels-section').className = 'hidden';
        // document.getElementById('panel1').className = 'move';
    })

    document.getElementById('close1').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay1').className = 'hidden';
        document.getElementById('panels-section').className = 'showing';
        // document.getElementById('panel1').className = 'moveback';
    })

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.getElementById('overlay1').className = 'hidden';
            document.getElementById('panels-section').className = 'showing';
            // document.getElementById('panel1').className = 'moveback';
        }
    });

    // OVERLAY2

    document.getElementById('panel2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay2').className = 'showing';
        document.getElementById('panels-section').className = 'hidden';
    })

    document.getElementById('close2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay2').className = 'hidden';
        document.getElementById('panels-section').className = 'showing';
    })

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.getElementById('overlay2').className = 'hidden';
            document.getElementById('panels-section').className = 'showing';
        }
    });

    // OVERLAY3

    document.getElementById('panel3').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay3').className = 'showing';
        document.getElementById('panels-section').className = 'hidden';
    })

    document.getElementById('close3').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay3').className = 'hidden';
        document.getElementById('panels-section').className = 'showing';
    })

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.getElementById('overlay3').className = 'hidden';
            document.getElementById('panels-section').className = 'showing';
        }
    });

    // OVERLAY4

    document.getElementById('panel4').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay4').className = 'showing';
        document.getElementById('panels-section').className = 'hidden';
    })

    document.getElementById('close4').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay4').className = 'hidden';
        document.getElementById('panels-section').className = 'showing';
    })

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.getElementById('overlay4').className = 'hidden';
            document.getElementById('panels-section').className = 'showing';
        }
    });
    
})();