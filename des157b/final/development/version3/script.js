// JS here

(function(){

    'use strict';

    Parse.initialize("dXnQbCCMhIThm2mxW0ulzEwTtD51B67cp4rGzf0j","lt0vEry0LBasv2SVUYR7meCPPz8tVcU0m1I2ohO2");
    Parse.serverURL = 'https://parseapi.back4app.com/'

    const newButton1 = document.getElementById('newbtn1');
    const newButton2 = document.getElementById('newbtn2');
    const newButton3 = document.getElementById('newbtn3');
    const newButton4 = document.getElementById('newbtn4');

    const addFriendForm = document.getElementById('add-friend');
    const addFriendForm2 = document.getElementById('add-friend2');
    const addFriendForm3 = document.getElementById('add-friend3');
    const addFriendForm4 = document.getElementById('add-friend4');

    const friendList = document.querySelector('.container1');
    const friendList2 = document.querySelector('.container2');
    const friendList3 = document.querySelector('.container3');
    const friendList4 = document.querySelector('.container4');

    const inputs = document.querySelectorAll("#add-friend input:not([type=submit])");
    const inputs2 = document.querySelectorAll("#add-friend2 input:not([type=submit])");
    const inputs3 = document.querySelectorAll("#add-friend3 input:not([type=submit])");
    const inputs4 = document.querySelectorAll("#add-friend4 input:not([type=submit])");

    document.getElementById('home').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#homepage').className = 'showing'
        document.querySelector('main').className = 'hidden'
        document.querySelector('footer').className = 'hidden'
        document.getElementById('gallery-nav').className = 'hidden'
        document.getElementById("slideshow").className = 'showing';
        document.getElementById("girl-war2").className = 'hidden';
        document.getElementById("girl-art2").className = 'hidden';
        document.getElementById("girl-food2").className = 'hidden';
        document.getElementById("girl-ghost2").className = 'hidden';
    })

    document.getElementById('gallery').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#homepage').className = 'hidden'
        document.querySelector('main').className = 'showing'
        document.getElementById('gallery-nav').className = 'showing'
        document.querySelector('footer').className = 'hidden'
        document.getElementById('add-friend').className = "hidden"
        document.getElementById('add-friend2').className = "hidden"
        document.getElementById('add-friend3').className = "hidden"
        document.getElementById('add-friend4').className = "hidden"
        document.getElementById("slideshow").className = 'showing';
        document.getElementById("girl-war2").className = 'hidden';
        document.getElementById("girl-art2").className = 'hidden';
        document.getElementById("girl-food2").className = 'hidden';
        document.getElementById("girl-ghost2").className = 'hidden';
    })

    document.getElementById('write').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#homepage').className = 'hidden'
        document.querySelector('main').className = 'hidden'
        document.querySelector('footer').className = 'showing'
        document.getElementById('gallery-nav').className = 'hidden'
        document.getElementById("slideshow").className = 'showing';
        document.getElementById("slideshow").className = 'showing';
        document.getElementById("girl-war2").className = 'hidden';
        document.getElementById("girl-art2").className = 'hidden';
        document.getElementById("girl-food2").className = 'hidden';
        document.getElementById("girl-ghost2").className = 'hidden';
    })
    

    //SELECT GALLERY TOPIC
    document.getElementById('selector-food').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('container4').className = 'hidden'
        document.getElementById('container3').className = 'hidden'
        document.getElementById('container1').className = 'showing'
        document.getElementById('container2').className = 'hidden'
        document.getElementById("girl-war2").className = 'hidden';
        document.getElementById("girl-food2").className = 'showing';
        document.getElementById("girl-ghost2").className = 'hidden';
        document.getElementById("slideshow").className = 'hidden';
        document.getElementById("girl-art2").className = 'hidden';
    })

    document.getElementById('selector-art').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('container4').className = 'hidden'
        document.getElementById('container3').className = 'hidden'
        document.getElementById('container2').className = 'showing'
        document.getElementById('container1').className = 'hidden'
        document.getElementById("girl-war2").className = 'hidden';
        document.getElementById("girl-food2").className = 'hidden';
        document.getElementById("girl-ghost2").className = 'hidden';
        document.getElementById("girl-art2").className = 'showing';
        document.getElementById("slideshow").className = 'hidden';
    })

    document.getElementById('selector-war').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('container4').className = 'hidden'
        document.getElementById('container3').className = 'showing'
        document.getElementById('container2').className = 'hidden'
        document.getElementById('container1').className = 'hidden'
        document.getElementById("girl-food2").className = 'hidden';
        document.getElementById("girl-war2").className = 'showing';
        document.getElementById("girl-ghost2").className = 'hidden';
        document.getElementById("slideshow").className = 'hidden';
        document.getElementById("girl-art2").className = 'hidden';
        document.getElementById("slideshow").className = 'hidden';
    })
    
    document.getElementById('selector-ghosts').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('container4').className = 'showing'
        document.getElementById('container3').className = 'hidden'
        document.getElementById('container2').className = 'hidden'
        document.getElementById('container1').className = 'hidden'
        document.getElementById("girl-war2").className = 'hidden';
        document.getElementById("girl-food2").className = 'hidden';
        document.getElementById("girl-ghost2").className = 'showing';
        document.getElementById("girl-art2").className = 'hidden';
        document.getElementById("slideshow").className = 'hidden';
    })

    //EXIT
    document.getElementById('exit1').addEventListener('click', function(event){
        document.getElementById("girl-food2").className = 'hidden';
        document.getElementById("slideshow").className = 'showing';
    })
    document.getElementById('exit2').addEventListener('click', function(event){
        document.getElementById("girl-art2").className = 'hidden';
        document.getElementById("slideshow").className = 'showing';
    })
    document.getElementById('exit3').addEventListener('click', function(event){
        document.getElementById("girl-war2").className = 'hidden';
        document.getElementById("slideshow").className = 'showing';
    })
    document.getElementById('exit4').addEventListener('click', function(event){
        document.getElementById("girl-ghost2").className = 'hidden';
        document.getElementById("slideshow").className = 'showing';
    })
    

    // OPENS FORM
    newButton1.addEventListener('click', function(event) {
        event.preventDefault();
        addFriendForm4.className = 'add-friend-offscreen';
        addFriendForm3.className = 'add-friend-offscreen';
        addFriendForm.className = 'add-friend-onscreen';
        addFriendForm2.className = "add-friend-offscreen";
        document.getElementById("girl-food2").className = 'showing';
        document.getElementById("images-still").className = 'showing';
        document.getElementById("slideshow").className = 'hidden';
    });

    newButton2.addEventListener('click', function(event) {
        event.preventDefault();
        addFriendForm4.className = 'add-friend-offscreen';
        addFriendForm3.className = 'add-friend-offscreen';
        addFriendForm2.className = 'add-friend-onscreen';
        addFriendForm.className = "add-friend-offscreen";
        document.getElementById("girl-art2").className = 'showing';
        document.getElementById("images-still").className = 'showing';
        document.getElementById("slideshow").className = 'hidden';
    });

    newButton3.addEventListener('click', function(event) {
        event.preventDefault();
        addFriendForm4.className = 'add-friend-offscreen';
        addFriendForm3.className = 'add-friend-onscreen';
        addFriendForm2.className = 'add-friend-offscreen';
        addFriendForm.className = "add-friend-offscreen";
        document.getElementById("girl-war2").className = 'showing';
        document.getElementById("slideshow").className = 'hidden';
    });

    newButton4.addEventListener('click', function(event) {
        event.preventDefault();
        addFriendForm4.className = 'add-friend-onscreen';
        addFriendForm3.className = 'add-friend-offscreen';
        addFriendForm2.className = 'add-friend-offscreen';
        addFriendForm.className = "add-friend-offscreen";
        document.getElementById("girl-ghost2").className = 'showing';
        document.getElementById("slideshow").className = 'hidden';
    });

    // SUBMIT AND CLOSES FORM
    addFriendForm.addEventListener('submit', function(event){
        event.preventDefault();
        addFriend();
    });

    addFriendForm2.addEventListener('submit', function(event){
        event.preventDefault();
        addFriend2();
    });

    addFriendForm3.addEventListener('submit', function(event){
        event.preventDefault();
        addFriend3();
    });
    
    addFriendForm4.addEventListener('submit', function(event){
        event.preventDefault();
        addFriend4();
    });

    // BACK4APP

    async function addFriend() {
        const newFriend = {};

        for (let i=0; i<inputs.length; i++) {
            let key = inputs[i].getAttribute('name');
            let value = inputs[i].value;
            newFriend[key] = value;
        }

        if (newFriend.fname != "" && newFriend.lname != "" && newFriend.email != "" && newFriend.story != "" && newFriend.date != "") {
            const newFriendData = new Parse.Object('Story');
            newFriendData.set('fname', newFriend.fname);
            newFriendData.set('lname', newFriend.lname);
            newFriendData.set('email', newFriend.email);
            newFriendData.set('story', newFriend.story);
            newFriendData.set('date', newFriend.date);
            try {
                const result = await newFriendData.save();
                console.log('friends made', result)
                resetFormFields();
                addFriendForm.className = "add-friend-offscreen";
                friendList.innerHTML = '';
                friendList2.innerHTML = '';
                friendList3.innerHTML = '';
                friendList4.innerHTML = '';
                displayFriends();
                displayFriends2(); 
            }
            catch (error) {
                console.error('Error while creating friend:', error);
            }
        }
        else {
            addFriendForm.className = "add-friend-offscreen";
        }
        function resetFormFields() {
            document.getElementById('fname').value = "";
            document.getElementById("lname").value = "";
            document.getElementById('email').value = "";
            document.getElementById('story').value = "";
        }
    }

    async function addFriend2() {
        const newFriend2 = {};

        for (let i=0; i<inputs2.length; i++) {
            let key2 = inputs2[i].getAttribute('name');
            let value2 = inputs2[i].value;
            newFriend2[key2] = value2;
        }

        if (newFriend2.fname != "" && newFriend2.lname != "" && newFriend2.email != "" && newFriend2.story != "" && newFriend2.date != "") {
            const newFriendData2 = new Parse.Object('Story2');
            newFriendData2.set('fname', newFriend2.fname);
            newFriendData2.set('lname', newFriend2.lname);
            newFriendData2.set('email', newFriend2.email);
            newFriendData2.set('story', newFriend2.story);
            newFriendData2.set('date', newFriend2.date);
            try {
                const result2 = await newFriendData2.save();
                console.log('friends made', result2)
                resetFormFields();
                addFriendForm2.className = "add-friend-offscreen";
                friendList.innerHTML = '';
                friendList2.innerHTML = '';
                friendList3.innerHTML = '';
                friendList4.innerHTML = '';
                displayFriends2();
                displayFriends(); 
            }
            catch (error) {
                console.error('Error while creating friend:', error);
            }
        }
        else {
            addFriendForm2.className = "add-friend-offscreen";
        }
    }
    function resetFormFields() {
        document.getElementById('fname').value = "";
        document.getElementById("lname").value = "";
        document.getElementById('email').value = "";
        document.getElementById('story').value = "";
    }

    async function addFriend3() {
        const newFriend3 = {};

        for (let i=0; i<inputs3.length; i++) {
            let key3 = inputs3[i].getAttribute('name');
            let value3 = inputs3[i].value;
            newFriend3[key3] = value3;
        }

        if (newFriend3.fname != "" && newFriend3.lname != "" && newFriend3.email != "" && newFriend3.story != "" && newFriend3.date != "") {
            const newFriendData3 = new Parse.Object('Story3');
            newFriendData3.set('fname', newFriend3.fname);
            newFriendData3.set('lname', newFriend3.lname);
            newFriendData3.set('email', newFriend3.email);
            newFriendData3.set('story', newFriend3.story);
            newFriendData3.set('date', newFriend3.date);
            try {
                const result3 = await newFriendData3.save();
                console.log('friends made', result3)
                resetFormFields();
                addFriendForm3.className = "add-friend-offscreen";
                friendList.innerHTML = '';
                friendList2.innerHTML = '';
                friendList3.innerHTML = '';
                friendList4.innerHTML = '';
                displayFriends3();
                displayFriends2();
                displayFriends(); 
            }
            catch (error) {
                console.error('Error while creating friend:', error);
            }
        }
        else {
            addFriendForm3.className = "add-friend-offscreen";
        }
    }
    function resetFormFields() {
        document.getElementById('fname').value = "";
        document.getElementById("lname").value = "";
        document.getElementById('email').value = "";
        document.getElementById('story').value = "";
    }

    async function addFriend4() {
        const newFriend4 = {};

        for (let i=0; i<inputs4.length; i++) {
            let key4 = inputs4[i].getAttribute('name');
            let value4 = inputs4[i].value;
            newFriend4[key4] = value4;
        }

        if (newFriend4.fname != "" && newFriend4.lname != "" && newFriend4.email != "" && newFriend4.story != "" && newFriend4.date != "") {
            const newFriendData4 = new Parse.Object('Story4');
            newFriendData4.set('fname', newFriend4.fname);
            newFriendData4.set('lname', newFriend4.lname);
            newFriendData4.set('email', newFriend4.email);
            newFriendData4.set('story', newFriend4.story);
            newFriendData4.set('date', newFriend4.date);
            try {
                const result4 = await newFriendData4.save();
                console.log('friends made', result4)
                resetFormFields();
                addFriendForm4.className = "add-friend-offscreen";
                friendList.innerHTML = '';
                friendList2.innerHTML = '';
                friendList3.innerHTML = '';
                friendList4.innerHTML = '';
                displayFriends4();
                displayFriends3();
                displayFriends2();
                displayFriends(); 
            }
            catch (error) {
                console.error('Error while creating friend:', error);
            }
        }
        else {
            addFriendForm4.className = "add-friend-offscreen";
        }
    }
    function resetFormFields() {
        document.getElementById('fname').value = "";
        document.getElementById("lname").value = "";
        document.getElementById('email').value = "";
        document.getElementById('story').value = "";
    }

    //DISPLAY


    async function displayFriends() {
            const friends = Parse.Object.extend('Story');
            const query = new Parse.Query(friends);
            const results = await query.ascending('lastname').find();
            console.log(results);

        results.forEach(function(eachFriend) {
            const id = eachFriend.id;
            const lname = eachFriend.get('lname');
            const fname = eachFriend.get('fname');
            const email = eachFriend.get('email');
            const story = eachFriend.get('story');
            const date = eachFriend.get('date');
            const theListItem = document.createElement('li');

            theListItem.setAttribute('id', `r-${id}`);
            theListItem.innerHTML = `
            <div id = "box-food">
                <div class="titles food">
                <i></i> ${email} by ${fname} ${lname}
                </div>
                <div class="date food">
                <i></i> ${date}
                </div>
                <div class="story food">
                <i></i> ${story}
                </div>
            </div>`

            friendList.append(theListItem);        
        });
        document.getElementById('box-food').addEventListener('click', function(){
            document.getElementById('story-overlay-food').className = 'showing'
        })
    }

    async function displayFriends2() {
            const friends2 = Parse.Object.extend('Story2');
            const query2 = new Parse.Query(friends2);
            const results2 = await query2.ascending('lastname').find();
            console.log(results2);

        results2.forEach(function(eachFriend) {
            const id = eachFriend.id;
            const lname = eachFriend.get('lname');
            const fname = eachFriend.get('fname');
            const email = eachFriend.get('email');
            const story = eachFriend.get('story');
            const date = eachFriend.get('date');
            const theListItem2 = document.createElement('li');

            theListItem2.setAttribute('id', `r-${id}`);
            theListItem2.innerHTML = `
            <div id = "box-art">
                <div class="titles art">
                <i></i> ${email} by ${fname} ${lname}
                </div>
                <div class="date art">
                <i></i> ${date}
                </div>
            <div class="story art">
                <i></i> ${story}
                </div>
            </div>`

            friendList2.append(theListItem2);        
        });
    }

    async function displayFriends3() {
        const friends3 = Parse.Object.extend('Story3');
        const query3 = new Parse.Query(friends3);
        const results3 = await query3.ascending('lastname').find();
        console.log(results3);

    results3.forEach(function(eachFriend) {
        const id = eachFriend.id;
        const lname = eachFriend.get('lname');
        const fname = eachFriend.get('fname');
        const email = eachFriend.get('email');
        const story = eachFriend.get('story');
        const date = eachFriend.get('date');
        const theListItem3 = document.createElement('li');

        theListItem3.setAttribute('id', `r-${id}`);
        theListItem3.innerHTML = `
        <div id = "box-war">
            <div class="titles war">
            <i></i> ${email} by ${fname} ${lname}
            </div>
            <div class="date war">
            <i></i> ${date}
            </div>
        <div class="story war">
            <i></i> ${story}
            </div>
        </div>`

        friendList3.append(theListItem3);        
    });
}

async function displayFriends4() {
    const friends4 = Parse.Object.extend('Story4');
    const query4 = new Parse.Query(friends4);
    const results4 = await query4.ascending('lastname').find();
    console.log(results4);

results4.forEach(function(eachFriend) {
    const id = eachFriend.id;
    const lname = eachFriend.get('lname');
    const fname = eachFriend.get('fname');
    const email = eachFriend.get('email');
    const story = eachFriend.get('story');
    const date = eachFriend.get('date');
    const theListItem4 = document.createElement('li');

    theListItem4.setAttribute('id', `r-${id}`);
    theListItem4.innerHTML = `
    <div id = "box-ghosts">
        <div class="titles ghosts">
        <i></i> ${email} by ${fname} ${lname}
        </div>
        <div class="date ghosts">
        <i></i> ${date}
        </div>
    <div class="story ghosts">
        <i></i> ${story}
        </div>
    </div>`

    friendList4.append(theListItem4);        
});
}


    displayFriends();
    displayFriends2();
    displayFriends3();
    displayFriends4();



})();