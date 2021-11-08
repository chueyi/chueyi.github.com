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


    document.querySelector('#button2').addEventListener('click', function(event) {
        event.preventDefault;
        document.querySelector('#rightcrow1').className = 'hidden'
        document.getElementById('rightcrow2')
    })

    // For Overlays
    document.querySelector('#leftcrow1').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#overlay').className = 'showing'
    });

    document.querySelector('#rightcrow1').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#overlay').className = 'showing'
    });

    document.querySelector('.close').addEventListener('click', function(event){
        document.querySelector('#overlay').className = 'hidden';
    }); 

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.querySelector('#overlay').className = 'hidden';
        }
    });

}());