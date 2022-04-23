(function(){

    'use script';
    console.log('reading js');

    const startButton = document.getElementById('startbutton');
    const contButton = document.getElementById('contbutton');
    const finishButton = document.getElementById('submit');
    const replayButton = document.getElementById('replaybutton');
    const logo = document.getElementById('logo');
    const rules = document.getElementById('rules');
    const soundBar = document.getElementById('soundbar');
    const characterSelect = document.getElementById('characterselectscreen');
    const characterCards = document.getElementById('charactercards');
    const characterCardSpot = document.getElementById('charactercardspot');
    const chooseCharacterCard = document.getElementById('card1');
    const finalButton1 = document.getElementById('finalbutton1');
    const finalButton2 = document.getElementById('finalbutton2');
    const randomizer = document.getElementById('randomizer');
    const footer = document.getElementById('footerstuff');
        var randomizerClicked = false;
    const char1 = document.getElementById('seonggihun');
        var char1Clicked = false;
    const char2 = document.getElementById('kangsaebyeok');
        var char2Clicked = false;
    const char3 = document.getElementById('abdulali');
        var char3Clicked = false;
    const char4 = document.getElementById('jiyeong');
        var char4Clicked = false;
    const char5 = document.getElementById('chosangwoo');
        var char5Clicked = false;
    const char6 = document.getElementById('ohilnam');
        var char6Clicked = false;
    const char7 = document.getElementById('jungkook');
        var char7Clicked = false;
    const char8 = document.getElementById('taehyung');
        var char8Clicked = false;
    const myForm = document.querySelector ('#myform');
    const madLib = document.querySelector ('#madlib');
    const madLibCharacter = document.getElementById('madlibcharactersection')
    const randomData = {
        roll: 0
    }

    const characterCard = ['images/1.3.png', 'images/2.3.png', 'images/3.3.png', 'images/4.3.png', 'images/5.3.png', 'images/6.3.png', 'images/7.3.png', 'images/8.3.png']
    const madLibIcons = ['images/1.1.png', 'images/2.1.png', 'images/3.1.png', 'images/4.1.png', 'images/5.1.png', 'images/6.1.png', 'images/7.1.png', 'images/8.1.png']

    const startSound = new Audio('media/start.mp3');
    const selectSound = new Audio('media/select.mp3');
    const selectClickSound = new Audio('media/selectdown.mp3');
    const dynamiteSound = new Audio('media/dynamite.mp3');
    const finishSound = new Audio('media/finish.mp3');

    startButton.addEventListener('click', function(){
        logo.remove();
        rules.remove();
        soundBar.remove();
        footer.remove();
        startSound.play();

        document.querySelector('#characterselectscreen').className = 'showing';
        characterSelect.style.display = 'block';
        contButton.style.display = 'block';
        characterCards.style.display = 'block'
    })

    randomizer.addEventListener('click', function(){
        chooseCharacterCard.remove();
        characterCardRandom = Math.floor(Math.random() * 8);
        randomData.roll = Math.floor(Math.random() * 8) + 1;
        characterCardSpot.innerHTML = `<img src = "${characterCard[characterCardRandom]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[characterCardRandom]}" class = "madlibchars">`

        if (randomData.roll === 8) {
            chooseCharacterCard.remove();
            characterCardSpot.innerHTML = `<img src = "${characterCard[0]}" class = "cards">`;
            madLibCharacter.innerHTML = `<img src = "${madLibIcons[0]}" class = "madlibchars">`
            char1ClickHandler();
        }
        else if (randomData.roll === 7) {
            chooseCharacterCard.remove();
            characterCardSpot.innerHTML = `<img src = "${characterCard[1]}" class = "cards">`;
            madLibCharacter.innerHTML = `<img src = "${madLibIcons[1]}" class = "madlibchars">`
            char2ClickHandler();
            char1False();
        }
        else if (randomData.roll === 6) {
            chooseCharacterCard.remove();
            characterCardSpot.innerHTML = `<img src = "${characterCard[2]}" class = "cards">`;
            madLibCharacter.innerHTML = `<img src = "${madLibIcons[2]}" class = "madlibchars">`
            char3ClickHandler();
            char1False();
            char2False();
        }
        else if (randomData.roll === 5) {
            chooseCharacterCard.remove();
            characterCardSpot.innerHTML = `<img src = "${characterCard[3]}" class = "cards">`;
            madLibCharacter.innerHTML = `<img src = "${madLibIcons[3]}" class = "madlibchars">`
            char4ClickHandler();
            char1False();
            char2False();
            char3False();
        }
        else if (randomData.roll === 4) {
            chooseCharacterCard.remove();
            characterCardSpot.innerHTML = `<img src = "${characterCard[4]}" class = "cards">`;
            madLibCharacter.innerHTML = `<img src = "${madLibIcons[4]}" class = "madlibchars">`
            char5ClickHandler();
            char1False();
            char2False();
            char3False();
            char4False();
        }
        else if (randomData.roll === 3) {
            chooseCharacterCard.remove();
            characterCardSpot.innerHTML = `<img src = "${characterCard[5]}" class = "cards">`;
            madLibCharacter.innerHTML = `<img src = "${madLibIcons[5]}" class = "madlibchars">`
            char6ClickHandler();
            char1False();
            char2False();
            char3False();
            char4False();
            char5False();
        }
        else if (randomData.roll === 2) {
            chooseCharacterCard.remove();
            characterCardSpot.innerHTML = `<img src = "${characterCard[6]}" class = "cards">`;
            madLibCharacter.innerHTML = `<img src = "${madLibIcons[6]}" class = "madlibchars">`
            char7ClickHandler();
            char1False();
            char2False();
            char3False();
            char4False();
            char5False();
            char6False();
        }
        else if (randomData.roll === 1) {
            chooseCharacterCard.remove();
            characterCardSpot.innerHTML = `<img src = "${characterCard[7]}" class = "cards">`;
            madLibCharacter.innerHTML = `<img src = "${madLibIcons[7]}" class = "madlibchars">`
            char8ClickHandler();
            char1False();
            char2False();
            char3False();
            char4False();
            char5False();
            char6False();
            char7False();
        }
    });

    char1.addEventListener('click', function(){
        chooseCharacterCard.remove();
        characterCardSpot.innerHTML = `<img src = "${characterCard[0]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[0]}" class = "madlibchars">`
        char1ClickHandler();
    })
    function char1ClickHandler(){
        char1Clicked = true;
    }
    function char1False(){
        char1Clicked = false;
    }
    
    char2.addEventListener('click', function(){
        chooseCharacterCard.remove();
        characterCardSpot.innerHTML = `<img src = "${characterCard[1]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[1]}" class = "madlibchars">`
        char2ClickHandler();
        char1False();
    })
    function char2ClickHandler(){
        char2Clicked = true;
    }
    function char2False(){
        char2Clicked = false;
    }

    char3.addEventListener('click', function(){
        chooseCharacterCard.remove();
        characterCardSpot.innerHTML = `<img src = "${characterCard[2]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[2]}" class = "madlibchars">`
        char3ClickHandler();
        char1False();
        char2False();
    })
    function char3ClickHandler(){
        char3Clicked = true;
    }
    function char3False(){
        char3Clicked = false;
    }

    char4.addEventListener('click', function(){
        chooseCharacterCard.remove();
        characterCardSpot.innerHTML = `<img src = "${characterCard[3]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[3]}" class = "madlibchars">`
        char4ClickHandler();
        char1False();
        char2False();
        char3False();        
    })
    function char4ClickHandler(){
        char4Clicked = true;
    }
    function char4False(){
        char4Clicked = false;
    }

    char5.addEventListener('click', function(){
        chooseCharacterCard.remove();
        characterCardSpot.innerHTML = `<img src = "${characterCard[4]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[4]}" class = "madlibchars">`
        char5ClickHandler();
        char1False();
        char2False();
        char3False();
        char4False();
    })
    function char5ClickHandler(){
        char5Clicked = true;
    }
    function char5False(){
        char5Clicked = false;
    }

    char6.addEventListener('click', function(){
        chooseCharacterCard.remove();
        characterCardSpot.innerHTML = `<img src = "${characterCard[5]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[5]}" class = "madlibchars">`
        char6ClickHandler();
        char1False();
        char2False();
        char3False();
        char4False();
        char5False();
    })
    function char6ClickHandler(){
        char6Clicked = true;
    }
    function char6False(){
        char6Clicked = false;
    }

    char7.addEventListener('click', function(){
        chooseCharacterCard.remove();
        dynamiteSound.play();
        characterCardSpot.innerHTML = `<img src = "${characterCard[6]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[6]}" class = "madlibchars">`
        char7ClickHandler();
        char1False();
        char2False();
        char3False();
        char4False();
        char5False();
        char6False();
    })
    function char7ClickHandler(){
        char7Clicked = true;
    }
    function char7False(){
        char7Clicked = false;
    }

    char8.addEventListener('click', function(){
        chooseCharacterCard.remove();
        dynamiteSound.play();
        characterCardSpot.innerHTML = `<img src = "${characterCard[7]}" class = "cards">`;
        madLibCharacter.innerHTML = `<img src = "${madLibIcons[7]}" class = "madlibchars">`
        char8ClickHandler();
        char1False();
        char2False();
        char3False();
        char4False();
        char5False();
        char6False();
        char7False();
    })
    function char8ClickHandler(){
        char8Clicked = true;
    }
    function char8False(){
        char8Clicked = false;
    }
    
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
        finishButton.style.display = 'block';
        madLibCharacter.style.display = 'block';
        finalButton1.style.display = 'block';
        }

        else {
            alert ('The Front Man demands you pick a character 🦑🦑🦑');
        }
    });

    finishButton.addEventListener('click', function(event){
        event.preventDefault();
        replayButton.style.display = "block";
        finalButton2.style.display = 'block';
        var adjective1 = document.querySelector('#adjective1').value;
        var number2 = document.querySelector('#number2').value;
        var noun1 = document.querySelector('#noun1').value;
        var noun2 = document.querySelector('#noun2').value;
        var personintheroom = document.querySelector('#personintheroom').value;
        var verb1 = document.querySelector('#verb1').value;
        var noun3 = document.querySelector('#noun3').value;
        var bodypart = document.querySelector('#bodypart').value;

        var myText 
        
        if (adjective1 && number2 && noun1 && noun2 && personintheroom && verb1 && noun3 && char1Clicked === true) {
            myText = `<p class = "madlibtext">Here's Your Story!<br><br>You awaken in a room with many strangers. You must survive a series of <span class = "red">${adjective1}</span> games in order to win <span class = "red">${number2}</span> million dollars. The first activity is to play red light/green light with a giant <span class = "red">${noun1}</span> at the end of the field which shoots anyone who moves. The second game forces you to perfectly cut out a <span class = "red">${noun2}</span> shape from a sugar cookie. In the third game, you must play tug-of-war using your <span class = "red">${bodypart}</span>. In the final game, you must defeat <span class = "red">${personintheroom}</span> by <span class = "red">${verb1}</span> them in the Squid Game. Congratulations, you've won and can spend your earnings on countless amounts of <span class = "red">${noun3}</span>. Your character, Seong Gi Hun, went home and found a movie ticket on his desk left by a "gganbu". (True Ending)</p>`;

            finishSound.play();
            finishButton.style.display = 'none';
            replayButton.style.display = "block";
        }

        else if (adjective1 && number2 && noun1 && noun2 && personintheroom && verb1 && noun3 && char2Clicked === true) {
            myText = `<p class = "madlibtext">Here's Your Story!<br><br>You want to win the Squid Game's money to help your family, so you arm yourself with a <span class = "red">${adjective1}</span> knife and enter the game. You'll have to compete alone because your teammates probably have <span class = "red">${number2}</span> brain cells left. In the first game, you avoid getting shot by bullets made from a <span class = "red">${noun1}</span>. Next, you have to carve shapes from a sugar cookie using a tiny <span class = "red">${noun2}</span>. You make it far but the piece of glass pierced in your <span class = "red">${bodypart}</span> is slowing you down. Before the final game, your character, Kang Sae Byeok, took a nap then got snitched out by <span class = "red">${personintheroom}</span>. She was kicked out but it's okay because she said she had plans to meet with Jiyeong. Play again to find the winner!</p>`;

            finishSound.play();
            finishButton.style.display = 'none';
            replayButton.style.display = "block";
        }
        else if (adjective1 && number2 && noun1 && noun2 && personintheroom && verb1 && noun3 && char3Clicked === true) {
            myText = `<p class = "madlibtext">Here's Your Story!<br><br>After killing your <span class = "red">${adjective1}</span> boss for not paying you for your check of <span class = "red">${number2}</span> thousand dollars, you're thinking about entering the Squid Games to buy your wife the <span class = "red">${noun1}</span> she's always wanted. In the chaotic fight after the second game, you protect your friends with a cold, steel <span class = "red">${noun2}</span> and help them in Tug-of-War by holding it down with your <span class = "red">${bodypart}</span> which helps your puny teammate, <span class = "red">${noun3}</span>, from falling. Your character, Abdul Ali, wandered off during the fourth game and mentioned that he saw a K-Pop star sneaking around. Uhm, play again to find the winner!</p>`;

            finishSound.play();
            finishButton.style.display = 'none';
            replayButton.style.display = "block";
        }
        else if (adjective1 && number2 && noun1 && noun2 && personintheroom && verb1 && noun3 && char4Clicked === true) {
            myText = `<p class = "madlibtext">Here's Your Story!<br><br>After taking revenge against your murderous and <span class = "red">${adjective1}</span> father, you are thrown into jail for <span class = "red">${number2}</span> days but you're released and join the Squid Games to turn your life around. After avoiding getting shot from a giant <span class = "red">${noun1}</span> and surviving a killing spree by protecting yourself with a <span class = "red">${noun2}</span>, you finally make friends with Kang Sae Byeok. You help her and your team win Tug-of-War by using your mighty <span class = "red">${bodypart}</span>. Your character, Jiyeong, quit the game and got on a plane bound for Jeju Island. A bunch of balloons flew across her window during the flight. She's now chilling in a pile of <span class = "red">${noun3}</span> awaiting Kang Sae Byeok. Play again to find the winner!</p>`;

            finishSound.play();
            finishButton.style.display = 'none';
            replayButton.style.display = "block";
        }
        else if (adjective1 && number2 && noun1 && noun2 && personintheroom && verb1 && noun3 && char5Clicked === true) {
            myText = `<p class = "madlibtext">Here's Your Story!<br><br>Even graduating from Seoul National University which is known for its <span class = "red">${adjective1}</span> students, job hunting has been tough and you are now <span class = "red">${number2}</span> thousands of dollars in debt. You decide to participate in the Squid Games in hopes of bringing money and paying back the mob for using their <span class = "red">${noun1}</span>. By using your wit and putting your faith in a <span class = "red">${noun2}</span>, it has lead you far. You sustain a wound to the <span class = "red">${bodypart}</span> from the fifth game's exploding glass and are having second thoughts. Before the final game, your character, Cho Sang Woo, took a bunch of balloons and floated away cause he ain't trying to die. Where's the winner? Play again!</p>`;

            finishSound.play();
            finishButton.style.display = 'none';
            replayButton.style.display = "block";
        }
        else if (adjective1 && number2 && noun1 && noun2 && personintheroom && verb1 && noun3 && char6Clicked === true) {
            myText = `<p class = "madlibtext">Here's Your Story!<br><br>As a(n) <span class = "red">${adjective1}</span> old man, you're not that much of a threat compared to the <span class = "red">${number2}</span> pound competitors. The big <span class = "red">${noun1}</span> growing on your brain hasn't been helping with your dementia either. However, it's been a nice time too because you made friends with a make-believe <span class = "red">${noun2}</span> and Seong Gi Hun. In the third game, you tell your friends to use their <span class = "red">${bodypart}</span> to win Tug-of-War and watch as <span class = "red">${personintheroom}</span> falls to their doom. Later, your character, Oh Ilnam, dipped and went to movie theaters to buy three tickets. Who won the game? Find the true ending by playing again!</p>`;

            finishSound.play();
            finishButton.style.display = 'none';
            replayButton.style.display = "block";
        }
        else if (adjective1 && number2 && noun1 && noun2 && personintheroom && verb1 && noun3 && char7Clicked === true) {
            myText = `<p class = "madlibtext">Here's Your Story!<br><br>Jungkook is investigating the Squid Games which is hiding someone who is known for being <span class = "red">${adjective1}</span>. He must disguise himself within an army of <span class = "red">${number2}</span> thousand pink soldiers by stealing a personal <span class = "red">${noun1}</span> from one of them. Every night he writes notes of the Squid Games on his trusty <span class = "red">${noun2}</span>. Later, he found his target and shot them in the <span class = "red">${bodypart}</span> but was shocked to see that it was actually <span class = "red">${personintheroom}</span>. He finishes the job by <span class = "red">${verb1}</span> them then goes on vacation in Jeju Island to indulge in some <span class = "red">${noun3}</span>. He later recognized two girls who were at the Squid Games.</p>`;

            finishSound.play();
            finishButton.style.display = 'none';
            replayButton.style.display = "block";
        }
        else if (adjective1 && number2 && noun1 && noun2 && personintheroom && verb1 && noun3 && char8Clicked === true) {
            myText = `<p class = "madlibtext">Here's Your Story!<br><br>As the Front Man, Taehyung must oversee the Squid Games and <span class = "red">${adjective1}</span> partcipants but he would rather be at the movie theater. This year, there will be <span class = "red">${number2}</span> million dollars on the line and a prize to take home, a giant <span class = "red">${noun1}</span>. He will also up the ante by making the second game be about cutting shapes out of a cookie made from a <span class = "red">${noun2}</span>. Late in the game, he was shot in the <span class = "red">${bodypart}</span> because <span class = "red">${personintheroom}</span> knows his real identity. However, he eliminated them by vigorously <span class = "red">${verb1}</span> them using <span class = "red">${noun3}</span> then stormed off. Later on, he found a movie ticket on his desk left by "the Host".</p>`;

            finishSound.play();
            finishButton.style.display = 'none';
            replayButton.style.display = "block";
        }
        else {
            alert ('The Front Man demands you finish the story 🦑🦑🦑');
            replayButton.style.display = 'none';
            document.querySelector('#forminput').className = 'showing';
            document.querySelector('#myform').className = 'showing';
            document.querySelector('#submit').className = 'showing';
            document.querySelector('#character1').className = 'showing';
            document.querySelector('#finishbutton').className = 'showing';
            document.querySelector('#madlib').className = 'showing madlib blue';
        }
        madLib.innerHTML = myText
    });

    replayButton.addEventListener('click', function(){
        location.reload();
    })


}());