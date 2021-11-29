(function(){
    const startButton = document.getElementById('startbutton');
    const contButton = document.getElementById('contbutton');
    const replayButton = document.getElementById('replaybutton');
    const logo = document.getElementById('logo');
    const rules = document.getElementById('rules');
    const soundBar = document.getElementById('soundbar');
    const characterSelect = document.getElementById('characterselectscreen');
    const characterCards = document.getElementById('charactercards');
    const characterCardSpot = document.getElementById('charactercardspot');
    const chooseCharacterCard = document.getElementById('card1');
    const randomizer = document.getElementById('randomizer');
    const char1 = document.getElementById('seonggihun');
    const char2 = document.getElementById('kangsaebyeok');
    const char3 = document.getElementById('abdulali');
    const char4 = document.getElementById('jiyeong');
    const char5 = document.getElementById('chosangwoo');
    const char6 = document.getElementById('ohilnam');
    const char7 = document.getElementById('jungkook');
    const char8 = document.getElementById('taehyung');
    const myForm = document.querySelector ('#myform');
    const madLib = document.querySelector ('#madlib');
    const madLibCharacter = document.getElementById('madlibcharactersection')

    const characterCard = ['images/1.3.png', 'images/2.3.png', 'images/3.3.png', 'images/4.3.png', 'images/5.3.png', 'images/6.3.png', 'images/7.3.png', 'images/8.3.png']
    const madLibIcons = ['images/1.1.png', 'images/2.1.png', 'images/3.1.png', 'images/4.1.png', 'images/5.1.png', 'images/6.1.png', 'images/7.1.png', 'images/8.1.png']

    const startSound = new Audio('media/start.mp3');
    const selectSound = new Audio('media/select.mp3');
    const selectClickSound = new Audio('media/selectdown.mp3');
    const dynamiteSound = new Audio('media/dynamite.mp3');

    startButton.addEventListener('click', function(){
        logo.remove();
        rules.remove();
        soundBar.remove();
        startSound.play();

        document.querySelector('#characterselectscreen').className = 'showing';
        characterSelect.style.display = 'block';
        contButton.style.display = 'block';
        characterCards.style.display = 'block'
    })

    randomizer.addEventListener('click', function(){
        chooseCharacterCard.remove();
        characterCardRandom = Math.floor(Math.random() * 8)
        characterCardSpot.innerHTML = `<img src = "${characterCard[characterCardRandom]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[characterCardRandom]}" class = "madlibchars">`
    });

    char1.addEventListener('click', function(){
        chooseCharacterCard.remove();
        characterCardSpot.innerHTML = `<img src = "${characterCard[0]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[0]}" class = "madlibchars">`
    })
    
    char2.addEventListener('click', function(){
        chooseCharacterCard.remove();
        characterCardSpot.innerHTML = `<img src = "${characterCard[1]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[1]}" class = "madlibchars">`
    })

    char3.addEventListener('click', function(){
        chooseCharacterCard.remove();
        characterCardSpot.innerHTML = `<img src = "${characterCard[2]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[2]}" class = "madlibchars">`
    })

    char4.addEventListener('click', function(){
        chooseCharacterCard.remove();
        characterCardSpot.innerHTML = `<img src = "${characterCard[3]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[3]}" class = "madlibchars">`
    })

    char5.addEventListener('click', function(){
        chooseCharacterCard.remove();
        characterCardSpot.innerHTML = `<img src = "${characterCard[4]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[4]}" class = "madlibchars">`
    })

    char6.addEventListener('click', function(){
        chooseCharacterCard.remove();
        characterCardSpot.innerHTML = `<img src = "${characterCard[5]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[5]}" class = "madlibchars">`
    })

    char7.addEventListener('click', function(){
        chooseCharacterCard.remove();
        dynamiteSound.play();
        characterCardSpot.innerHTML = `<img src = "${characterCard[6]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[6]}" class = "madlibchars">`
    })

    char8.addEventListener('click', function(){
        chooseCharacterCard.remove();
        dynamiteSound.play();
        characterCardSpot.innerHTML = `<img src = "${characterCard[7]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[7]}" class = "madlibchars">`
    })
    
    document.querySelectorAll(".characterselect").forEach(function(item) {
        item.addEventListener('mouseover', function(){
            selectSound.play();
        })
    });

    document.querySelectorAll(".characterselect").forEach(function(item) {
        item.addEventListener('mouseout', function(){
            selectSound.pause();
            selectSound.currentTime = 0;
        })
    });

    var characterClicked = false;
    function characterClickHandler(){
        characterClicked = true;
    }

    document.querySelectorAll(".characterselect").forEach(function(item) {
        item.addEventListener('click', function(){
            selectClickSound.play();
            characterClickHandler();
        })
    });

    contButton.addEventListener('click', function(){
        if (characterClicked === true){
        characterSelect.remove();
        characterCards.remove();
        startSound.play();
        madLib.style.display = 'block';
        myForm.style.display = 'block';
        madLibCharacter.style.display = 'block';
        }

        else {
            alert ('The Front Man demands you pick a character ʕ•ᴥ•ʔ');
        }
    });

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
            alert ('The Front Man demands you finish the story ʕ•ᴥ•ʔ');
            document.querySelector('#forminput').className = 'showing';
            document.querySelector('#myform').className = 'showing';
            document.querySelector('#submit').className = 'showing';
            document.querySelector('#character1').className = 'showing';
            document.querySelector('#madlib').className = 'showing madlib blue';

        }
        madLib.innerHTML = myText
    });

    replayButton.addEventListener('click', function(){
        location.reload();
    })


}());