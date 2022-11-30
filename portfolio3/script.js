(function() {
    'use strict';
    console.log('reading js');


    window.onload = function(){
        document.getElementById("web-section").className = 'hidden';
    }

    document.getElementById('toplogo').addEventListener('click', function(event){
        event.preventDefault();
        location.reload();
    })

    document.getElementById('tab-home').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById("webdesign").className = 'hidden';
        document.getElementById("illustration").className = 'hidden';
        document.getElementById("boxill1").className = 'hidden';
        document.getElementById("boxill2").className = 'hidden';
    })

    document.getElementById('tab-web').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById("web-section").className = 'showing';
    })

    document.getElementById('tab-graphics').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById("webdesign").className = 'hidden';
    })

    document.getElementById('tab-illustration').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById("webdesign").className = 'hidden';
    })

})()