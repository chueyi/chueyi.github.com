(function () {

    'use strict';
    console.log('reading js');

    Parse.initialize("dXnQbCCMhIThm2mxW0ulzEwTtD51B67cp4rGzf0j","lt0vEry0LBasv2SVUYR7meCPPz8tVcU0m1I2ohO2"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = 'https://parseapi.back4app.com/'

    const list = document.querySelector("main ol")
    const inputs = document.querySelectorAll("#add-story input:not([type=submit])")
    const submitButton = document.getElementById('submit');


    // SUBMIT
    submitButton.addEventListener('click', function(event){
        event.preventDefault();
        addStory();
        console.log('pressed')
    })

    // BACK4APP

    async function addStory() {
        const newStory = {};

        for (let i=0; i<inputs.length; i++) {
            let key = inputs[i].getAttribute('name');
            let value = inputs[i].value;
            newStory[key] = value;
        }

        if (newStory.title != "" && newStory.firstname != "" && newStory.lastname != "" ){
            const newStoryData = new Parse.Object('Stories');
            newStoryData.set('title', newStory.title);
            newStoryData.set('firstname', newStory.firstname);
            newStoryData.set('lastname', newStory.lastname);

            try {
                const result = await newStoryData.save();
                console.log('story made', result)
                document.getElementById('overlay1').className = 'hidden';
                document.getElementById('panels-section').className = 'showing';
                list.innerHTML = "";
                display();
            }
            catch (error){
                console.error(error);
            }
        }
        else {
            document.getElementById('overlay1').className = 'hidden';
            document.getElementById('panels-section').className = 'showing';
        }
    }

    async function display() {
        const stories = Parse.Object.extend('Stories');
        const query = new Parse.Query(stories);
        const results = await query.ascending('lastname').find();
        console.log(results);

    results.forEach(function(eachStory){
        const id = eachStory.id;
        const title = eachStory.get('title');
        const firstname = eachStory.get('firstname');
        const lastname = eachStory.get('lastname');
        const theList = document.createElement("li");
            
        theList.setAttribute("id", `r-${id}`);
        theList.innerHTML = `
            <div class = "gallery-box">
                <p class = "gallery-content gallery-title">${title}</p>
                <p class = "gallery-content gallery-name">${firstname} ${lastname}</p>
            </div>`

            list.append(theList);
        })
    }
    display();  
    
    
})();