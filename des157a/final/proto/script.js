(function(){
    'use script';
    console.log('reading.js');

    document.querySelector('#submit').addEventListener('click', function() {
        document.querySelector('#forminput').style.display = 'none';
        // document.querySelector('#myform').style.display = 'none';
        // document.querySelector('#submit').style.display = 'none';
        // document.querySelector('#character1').style.display = 'none';
        document.querySelector('#madlib').className = 'showing madlib blue';
    });

    var myForm = document.querySelector ('#myform');
    var madLib = document.querySelector ('#madlib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        var number1 = document.querySelector('#number1').value;
        var adjective1 = document.querySelector('#adjective1').value;
        var number2 = document.querySelector('#number2').value;
        var noun1 = document.querySelector('#noun1').value;
        var noun2 = document.querySelector('#noun2').value;
        var personintheroom = document.querySelector('#personintheroom').value;
        var verb1 = document.querySelector('#verb1').value;
        var noun3 = document.querySelector('#noun3').value;
        var bodypart = document.querySelector('#bodypart').value;

        var myText 
        
        if (number1 && adjective1 && number2 && noun1 && noun2 && personintheroom && verb1 && noun3) {
            myText = `You awaken in a room with ${number1} other people. You must survive a series of ${adjective1} games in order to win ${number2} million dollars. The first activity is to play red light/green light with a giant ${noun1} at the end of the field which shoots down anyone who moves. The second game forces you to perfectly cut out a ${noun2} shape from a sugar cookie. In the third game, you must play tug-of-war using your ${bodypart}. In the final game, you must defeat ${personintheroom} by ${verb1} them in the dangerous Squid Game. Congratulations, you've won and can spend your earnings on countless amounts of ${noun3}.`;
        }
        else {
            myText = "Please finish all the empty boxes first"
            document.querySelector('#forminput').className = 'showing';
            document.querySelector('#myform').className = 'showing';
            document.querySelector('#submit').className = 'showing';
            document.querySelector('#character1').className = 'showing';
            document.querySelector('#madlib').className = 'showing madlib blue';
        }

        madLib.innerHTML = myText
    });
}());