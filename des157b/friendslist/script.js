// JS here

(function(){

    'use strict';

    Parse.initialize("pnrlGNztiJOcEPDvGfYVWdofxdpMwQGOBx7ZgFTd","AJg1jerhdInXCqEeBcsgqtYN0ubrQGp7ICxvX87H");
    Parse.serverURL = 'https://parseapi.back4app.com/';

    const newButton = document.getElementById('newbtn');
    const editButtons = document.querySelectorAll('.fa-edit');
    const addFriendForm = document.getElementById('add-friend');
    const editFriendForm = document.getElementById('edit-friend');
    const friendList = document.querySelector('main ol');
    const inputs = document.querySelectorAll("#add-friend input:not([type=submit])");

    // OPENS FORM
    newButton.addEventListener('click', function(event) {
        event.preventDefault();
        addFriendForm.className = 'add-friend-onscreen';
    });

    // SUBMIT AND CLOSES FORM
    addFriendForm.addEventListener('submit', function(event){
        event.preventDefault();
        // addFriendForm.className = 'add-friend-offscreen';
        addFriend();
    });

    async function addFriend() {
        const newFriend = {};

        for (let i=0; i<inputs.length; i++) {
            let key = inputs[i].getAttribute('name');
            let value = inputs[i].value;
            newFriend[key] = value;
        }

        if (newFriend.fname != "" && newFriend.lname != "" && newFriend.email != "") {
            const newFriendData = new Parse.Object('NewFriends');
            newFriendData.set('fname', newFriend.fname);
            newFriendData.set('lname', newFriend.lname);
            newFriendData.set('email', newFriend.email);
            newFriendData.set('facebook', newFriend.facebook);
            newFriendData.set('twitter', newFriend.twitter);
            newFriendData.set('instagram', newFriend.instagram);
            newFriendData.set('linkedin', newFriend.linkedin);
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

    for (let i = 0; i < editButtons.length; i++){
        editButtons[i].addEventListener('click', function(event){
            event.preventDefault();
            editFriendForm.className = 'edit-friend-onscreen'
        })
    };
    
    editFriendForm.addEventListener('submit', function(event){
        event.preventDefault();
        editFriendForm.className = 'edit-friend-offscreen'
    });

    function resetFormFields() {
        document.getElementById('fname').value = "";
        document.getElementById("lname").value = "";
        document.getElementById('email').value = "";
        document.getElementById("fbook").value = "https://facebook.com";
        document.getElementById('twitter').value = "https://twitter.com"
        document.getElementById('insta').value = "https://instagram.com"
        document.getElementById('linkedin').value = "https://linkedin.com"
    }

    async function displayFriends() {
        const friends = Parse.Object.extend('NewFriends');
        const query = new Parse.Query(friends);
        const results = await query.ascending('lastname').find();
        console.log(results);

    results.forEach(function(eachFriend) {
        const id = eachFriend.id;
        const lname = eachFriend.get('lname');
        const fname = eachFriend.get('fname');
        const email = eachFriend.get('email');
        const facebook = eachFriend.get('facebook');
        const twitter = eachFriend.get('twitter');
        const instagram = eachFriend.get('instagram');
        const linkedin = eachFriend.get('linkedin');
        const theListItem = document.createElement('li');

        theListItem.setAttribute('id', `r-${id}`);
        theListItem.innerHTML = `
        <div class="name">
        ${fname} ${lname}
        </div>
        <div class="email">
            <i class="fas fa-envelope-square"></i> ${email}
        </div>
        <div class="social">
            <a href="${facebook}"><i class="fab fa-facebook-square"></i></a>
            <a href="${twitter}"><i class="fab fa-twitter-square"></i></a>
            <a href="${instagram}"><i class="fab fa-instagram"></i></a>
            <a href="${linkedin}"><i class="fab fa-linkedin"></i></a>
        </div>
        <i class="fas fa-edit" id = "e-${id}"></i>
        <i class="fas fa-times-circle" id = "d-${id}"></i>`;

        friendList.append(theListItem);        
        });
    }

    displayFriends();


})();