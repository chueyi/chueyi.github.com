(function(){

    'use script';
    console.log('reading js');

    document.getElementById("button1").addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('title').className = 'showing'
        document.getElementById('overview').className = 'hidden'
        document.getElementById('ux').className = 'hidden'
        document.getElementById('visual').className = 'hidden'
        document.getElementById('ui').className = 'hidden'
        document.getElementById('revisions').className = 'hidden'
        document.getElementById('summary').className = 'hidden'

        document.getElementById('button1').className = 'red';
        document.getElementById('button2').className = 'white';
        document.getElementById('button3').className = 'white';
        document.getElementById('button4').className = 'white';
        document.getElementById('button5').className = 'white';
        document.getElementById('button6').className = 'white';
        document.getElementById('button7').className = 'white';
    })

    document.getElementById("button2").addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('title').className = 'hidden'
        document.getElementById('overview').className = 'showing'
        document.getElementById('ux').className = 'hidden'
        document.getElementById('visual').className = 'hidden'
        document.getElementById('ui').className = 'hidden'
        document.getElementById('revisions').className = 'hidden'
        document.getElementById('summary').className = 'hidden'

        document.getElementById('button1').className = 'white';
        document.getElementById('button2').className = 'red';
        document.getElementById('button3').className = 'white';
        document.getElementById('button4').className = 'white';
        document.getElementById('button5').className = 'white';
        document.getElementById('button6').className = 'white';
        document.getElementById('button7').className = 'white';
    })

    document.getElementById("button3").addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('title').className = 'hidden'
        document.getElementById('overview').className = 'hidden'
        document.getElementById('ux').className = 'showing'
        document.getElementById('visual').className = 'hidden'
        document.getElementById('ui').className = 'hidden'
        document.getElementById('revisions').className = 'hidden'
        document.getElementById('summary').className = 'hidden'

        document.getElementById('button1').className = 'white';
        document.getElementById('button2').className = 'white';
        document.getElementById('button3').className = 'red';
        document.getElementById('button4').className = 'white';
        document.getElementById('button5').className = 'white';
        document.getElementById('button6').className = 'white';
        document.getElementById('button7').className = 'white';
    })

    document.getElementById("button4").addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('title').className = 'hidden'
        document.getElementById('overview').className = 'hidden'
        document.getElementById('ux').className = 'hidden'
        document.getElementById('visual').className = 'showing'
        document.getElementById('ui').className = 'hidden'
        document.getElementById('revisions').className = 'hidden'
        document.getElementById('summary').className = 'hidden'

        document.getElementById('button1').className = 'white';
        document.getElementById('button2').className = 'white';
        document.getElementById('button3').className = 'white';
        document.getElementById('button4').className = 'red';
        document.getElementById('button5').className = 'white';
        document.getElementById('button6').className = 'white';
        document.getElementById('button7').className = 'white';
    })

    document.getElementById("button5").addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('title').className = 'hidden'
        document.getElementById('overview').className = 'hidden'
        document.getElementById('ux').className = 'hidden'
        document.getElementById('visual').className = 'hidden'
        document.getElementById('ui').className = 'showing'
        document.getElementById('revisions').className = 'hidden'
        document.getElementById('summary').className = 'hidden'

        document.getElementById('button1').className = 'white';
        document.getElementById('button2').className = 'white';
        document.getElementById('button3').className = 'white';
        document.getElementById('button4').className = 'white';
        document.getElementById('button5').className = 'red';
        document.getElementById('button6').className = 'white';
        document.getElementById('button7').className = 'white';
    })

    document.getElementById("button6").addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('title').className = 'hidden'
        document.getElementById('overview').className = 'hidden'
        document.getElementById('ux').className = 'hidden'
        document.getElementById('visual').className = 'hidden'
        document.getElementById('ui').className = 'hidden'
        document.getElementById('revisions').className = 'showing'
        document.getElementById('summary').className = 'hidden'

        document.getElementById('button1').className = 'white';
        document.getElementById('button2').className = 'white';
        document.getElementById('button3').className = 'white';
        document.getElementById('button4').className = 'white';
        document.getElementById('button5').className = 'white';
        document.getElementById('button6').className = 'red';
        document.getElementById('button7').className = 'white';
    })

    document.getElementById("button7").addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('title').className = 'hidden'
        document.getElementById('overview').className = 'hidden'
        document.getElementById('ux').className = 'hidden'
        document.getElementById('visual').className = 'hidden'
        document.getElementById('ui').className = 'hidden'
        document.getElementById('revisions').className = 'hidden'
        document.getElementById('summary').className = 'showing'

        document.getElementById('button1').className = 'white';
        document.getElementById('button2').className = 'white';
        document.getElementById('button3').className = 'white';
        document.getElementById('button4').className = 'white';
        document.getElementById('button5').className = 'white';
        document.getElementById('button6').className = 'white';
        document.getElementById('button7').className = 'red';
    })






}());