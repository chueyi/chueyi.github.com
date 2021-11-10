(function() {
    'use script';
    console.log('reading.js');

    //For Changing Pictures

    const images = [
        '1.1.jpg',
        '2.1.jpg',
        '3.1.jpg',
        '4.1.jpg',
        '5.1.jpg',
        '1.2.jpg',
        '2.2.jpg',
        '3.2.jpg',
        '4.2.jpg',
        '5.2.jpg',
    ]

    // OVERLAY 1
    document.querySelector('#leftcrow1').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#overlay1').className = 'showing'
    });

    document.querySelector('#rightcrow1').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#overlay1').className = 'showing'
    });

    document.querySelector('.close').addEventListener('click', function(event){
        document.querySelector('#overlay1').className = 'hidden';
    }); 

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.querySelector('#overlay1').className = 'hidden';
        }
    });

    // OVERLAY 2

    document.querySelector('#leftcrow2').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#overlay2').className = 'showing'
    });

    document.querySelector('#rightcrow2').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#overlay2').className = 'showing'
    });

    document.querySelector('.close').addEventListener('click', function(event){
        document.querySelector('#overlay2').className = 'hidden';
    }); 

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.querySelector('#overlay2').className = 'hidden';
        }
    });

    // OVERLAY 3

    document.querySelector('#leftcrow3').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#overlay3').className = 'showing'
    });

    document.querySelector('#rightcrow3').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#overlay3').className = 'showing'
    });

    document.querySelector('.close').addEventListener('click', function(event){
        document.querySelector('#overlay3').className = 'hidden';
    }); 

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.querySelector('#overlay3').className = 'hidden';
        }
    });

    // OVERLAY 4

    document.querySelector('#leftcrow4').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#overlay4').className = 'showing'
    });

    document.querySelector('#rightcrow4').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#overlay4').className = 'showing'
    });

    document.querySelector('.close').addEventListener('click', function(event){
        document.querySelector('#overlay4').className = 'hidden';
    }); 

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.querySelector('#overlay4').className = 'hidden';
        }
    });

        // OVERLAY 4

        document.querySelector('#leftcrow5').addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('#overlay5').className = 'showing'
        });
    
        document.querySelector('#rightcrow5').addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('#overlay5').className = 'showing'
        });
    
        document.querySelector('.close').addEventListener('click', function(event){
            document.querySelector('#overlay5').className = 'hidden';
        }); 
    
        document.addEventListener('keydown', function(event){
            if (event.key === 'Escape') {
                document.querySelector('#overlay5').className = 'hidden';
            }
        });

}());