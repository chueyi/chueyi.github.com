(function(){

    'use script';
    console.log('reading js');


    document.getElementById('madeonbutton').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById("portervideo").className = 'hidden';
        document.getElementById("madeonvideo").className = 'showing';
        document.getElementById("odeszavideo").className = 'hidden';
        document.getElementById("porterbox").className = 'hidden';
        document.getElementById("madeonbox").className = 'showing';
        document.getElementById("odeszabox").className = 'hidden';
    });

    document.getElementById('porterbutton').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById("portervideo").className = 'showing';
        document.getElementById("madeonvideo").className = 'hidden';
        document.getElementById("odeszavideo").className = 'hidden';
        document.getElementById("porterbox").className = 'showing';
        document.getElementById("madeonbox").className = 'hidden';
        document.getElementById("odeszabox").className = 'hidden';
    });
})();