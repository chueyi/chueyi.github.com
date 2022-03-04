// JS here

(function(){

    'use strict';

    Parse.initialize("dXnQbCCMhIThm2mxW0ulzEwTtD51B67cp4rGzf0j","lt0vEry0LBasv2SVUYR7meCPPz8tVcU0m1I2ohO2");
    Parse.serverURL = 'https://parseapi.back4app.com/'

    const newButton1 = document.getElementById('newbtn1');
    const newButton2 = document.getElementById('newbtn2');
    const addFriendForm = document.getElementById('add-friend');
    const addFriendForm2 = document.getElementById('add-friend2');
    const friendList = document.querySelector('main .container1');
    const friendList2 = document.querySelector('main .container2');
    const inputs = document.querySelectorAll(".forms input:not([type=submit])");

    // OPENS FORM
    newButton1.addEventListener('click', function(event) {
        event.preventDefault();
        addFriendForm.className = 'add-friend-onscreen';
    });

    newButton2.addEventListener('click', function(event) {
        event.preventDefault();
        addFriendForm2.className = 'add-friend-onscreen';
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

    // BACK4APP

    async function addFriend() {
        const newFriend = {};

        for (let i=0; i<inputs.length; i++) {
            let key = inputs[i].getAttribute('name');
            let value = inputs[i].value;
            newFriend[key] = value;
        }

        if (newFriend.fname != "" && newFriend.lname != "" && newFriend.email != "" && newFriend.story != "") {
            const newFriendData = new Parse.Object('Story');
            newFriendData.set('fname', newFriend.fname);
            newFriendData.set('lname', newFriend.lname);
            newFriendData.set('email', newFriend.email);
            newFriendData.set('story', newFriend.story);
            try {
                const result = await newFriendData.save();
                console.log('friends made', result)
                resetFormFields();
                addFriendForm.className = "add-friend-offscreen";
                friendList.innerHTML = '';
                displayFriends(); 
            }
            catch (error) {
                console.error('Error while creating friend:', error);
            }
        }
        else {
            addFriendForm.className = "add-friend-offscreen";
        }
    }

    async function addFriend2() {
        const newFriend2 = {};

        for (let i=0; i<inputs.length; i++) {
            let key2 = inputs[i].getAttribute('name');
            let value2 = inputs[i].value;
            newFriend2[key2] = value2;
        }

        if (newFriend2.fname != "" && newFriend2.lname != "" && newFriend2.email != "" && newFriend2.story != "") {
            const newFriendData2 = new Parse.Object('Story');
            newFriendData2.set('fname', newFriend2.fname);
            newFriendData2.set('lname', newFriend2.lname);
            newFriendData2.set('email', newFriend2.email);
            newFriendData2.set('story', newFriend2.story);
            try {
                const result2 = await newFriendData2.save();
                console.log('friends made', result2)
                resetFormFields();
                addFriendForm2.className = "add-friend-offscreen";
                friendList.innerHTML = '';
                displayFriends2(); 
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
        const theListItem = document.createElement('li');

        theListItem.setAttribute('id', `r-${id}`);
        theListItem.innerHTML = `
        <div class="titles">
        <i></i> ${email}
        </div>
        <div class="name">
        ${fname} ${lname}
        </div>
        <div class="story">
        <i></i> ${story}
        </div>`

        friendList.append(theListItem);        
        });
    }

    async function displayFriends2() {
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
        const theListItem = document.createElement('li');

        theListItem.setAttribute('id', `r-${id}`);
        theListItem.innerHTML = `
        <div class="titles2">
        <i></i> ${email}
        </div>
        <div class="name">
        ${fname} ${lname}
        </div>
        <div class="story">
        <i></i> ${story}
        </div>`

        friendList2.append(theListItem);        
        });
    }

    displayFriends();
    displayFriends2();



})();