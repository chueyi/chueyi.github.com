(function(){
    const startButton = document.getElementById('startbutton');
    const logo = document.getElementById('logo');
    const rules = document.getElementById('rules');
    const soundBar = document.getElementById('soundbar');
    const pinkSide = document.getElementById('pinkside');
    const blueSide = document.getElementById('blueside');
    const characterSelect = document.getElementById('characterselectscreen');
    const roster = {
        characterRoster: ['images/1.2.png', 'images/2.2.png', 'images/3.2.png', 'images/4.2.png', 'images/5.2.png', 'images/6.2.png', 'images/7.2.png', 'images/8.2.png']
    }

    const startSound = new Audio('media/start.mp3');

    startButton.addEventListener('click', function(){
        logo.remove();
        rules.remove();
        soundBar.remove();
        startSound.play();

        document.querySelector('#characterselectscreen').className = 'showing';
    })

    // function setUpCharacters() {
    //     characterSelect.innerHTML =
    //             '<img src = "images/1.2.png" alt = "seonggihun" id = "seonggihun" class = "characterselect">'
    //             '<img src = "images/2.2.png" alt = "kangsaebyeok" id = "kangsaebyeok" class = "characterselect">'
    //             '<img src = "images/3.2.png" alt = "abdulali" id = "abdulali" class = "characterselect">'
    //             '<img src = "images/4.2.png" alt = "jiyeong" id = "jiyeong" class = "characterselect">'
    //             '<img src = "images/5.2.png" alt = "chosangwoo" id = "chosangwoo" class = "characterselect">'
    //             '<img src = "images/6.2.png" alt = "ohilnam" id = "ohilnam" class = "characterselect">'
    //             '<img src = "images/7.2.png" alt = "jungkook" id = "jungkook" class = "characterselect">'
    //             '<img src = "images/8.2.png" alt = "taehyung" id = "taehyung" class = "characterselect">' 
    // }

    setUpCharacters();



}());