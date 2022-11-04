(function(){

    'use script';
    console.log('reading js');

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');
    const bottomArea = document.getElementById('bottomsection');
    const header = document.getElementById('header');
    const rules = document.getElementById('midsection');
    const footer = document.getElementById('footerlink');

    const startSound = new Audio('media/start.mp3');
    const rollSound = new Audio('media/roll.mp3');
    const failSound = new Audio('media/fail.mp3');
    const winSound = new Audio('media/win.mp3');
    const quitSound = new Audio('media/quit.mp3');
    const snakeEyesSound = new Audio('media/snakeeyes.mp3');

    const gameData = {
        dice: ['images/1egg.png', 'images/2egg.png', 'images/3egg.png', 'images/4egg.png', 'images/5egg.png', 'images/6egg.png'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

        startGame.addEventListener('click', function (){
            gameData.index = Math.round(Math.random());
            console.log(gameData.index);
            gameControl.innerHTML = '<h2 id = "gamehasstarted">Game Start!</h2>';
            bottomArea.innerHTML += '<buttton id = "quit"><img src = "images/baconstripquit.png"></buttton>';
            document.querySelector('#scoreandquit').className = 'showing';
            rules.remove();
            header.remove();
            footer.remove();
            startSound.play();

        document.getElementById('quit').addEventListener('click', function(){
            quitSound.play();    
            location.reload()
            });
        
        function setUpTurn() {
            header.innerHTML = '';
            game.innerHTML = `<p>Roll the dice, ${gameData.players[gameData.index]}</p>`;
            actionArea.innerHTML = '<button id = "roll"><img src = "images/baconstriproll.png"></button>';
            document.getElementById('roll').addEventListener('click', function(){
            throwDice();
            rollSound.play();
            });
        };
            setUpTurn();

        function throwDice(){
            rollSound.play();
            actionArea.innerHTML = '';
            gameData.roll1 = Math.floor(Math.random() * 6) + 1;
            gameData.roll2 = Math.floor(Math.random() * 6) + 1;
            game.innerHTML = `<p>Your turn!, ${gameData.players[gameData.index]}!</p>`;
            game.innerHTML += `<img src = "${gameData.dice[gameData.roll1-1]}">
                                <img src = "${gameData.dice[gameData.roll2-1]}">`;
            gameData.rollSum = gameData.roll1 + gameData.roll2;

            if (gameData.rollSum === 2){
                console.log("SNAKE EYES");
                showCurrentScore();
                snakeEyesSound.play();
            }
            else if (gameData.roll1 === 1 || gameData.roll2 === 1){
                console.log("One of the dice was a 1");
                showCurrentScore();
                failSound.play();
            }
            else {
                checkWinningCondition();
                console.log("The game proceeds");
                rollSound.play();
                showCurrentScore();
            }


            if (gameData.rollSum === 2) {
                game.innerHTML += '<p>Oh snaps! Snake eyes!</p>';
                gameData.score[gameData.index] = 0;
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setTimeout(setUpTurn, 2000);
                showCurrentScore();
                snakeEyesSound.play();

            }
            else if(gameData.roll1 === 1 || gameData.roll2 === 1) {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
                setTimeout(setUpTurn, 2000);
                showCurrentScore();
                failSound.play();
            }
            else {
                gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                actionArea.innerHTML = '<button id = "rollagain"><img src = "images/baconstriproll.png"></button><button id = "pass"><img src = "images/baconstrippass.png"></button>'

                document.getElementById('rollagain').addEventListener('click', function() {
                    throwDice();
                    rollSound.play();
                });
                document.getElementById('pass').addEventListener('click', function() {
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                });
                    rollSound.play();
                    showCurrentScore();
                    checkWinningCondition();
                        }
                    };
                });

        function checkWinningCondition() {
            if(gameData.score[gameData.index] > gameData.gameEnd) {
                gameControl.innerHTML = `<h2 id = "winheader">${gameData.players[gameData.index]}
                wins with ${gameData.score[gameData.index]} points!</h2>`;
                
                game.innerHTML = '<p></p>';
                game.innerHTML += `<img src = "${gameData.dice[gameData.roll1-1]}">
                <img src = "${gameData.dice[gameData.roll2-1]}">`;
                gameData.rollSum = gameData.roll1 + gameData.roll2;
                actionArea.innerHTML = '';
                document.getElementById('quit').innerHTML = '<button id = "roll"><img src = "images/baconstripnewgame.png"></button>';
                winSound.play();
            }
            else {
                score.innerHTML = `<p>SCORE<br><br><strong>${gameData.players[0]}:
                ${gameData.score[0]}</strong><br><strong>${gameData.players[1]}:
                ${gameData.score[1]}</strong></p>`;
            }
        }

            function showCurrentScore() {
                score.innerHTML = `<p id = "currentscore">SCORE<br><br><strong>${gameData.players[0]}:
                ${gameData.score[0]}</strong><br><strong>${gameData.players[1]}:
                ${gameData.score[1]}</strong></p>`
            }
}());
        