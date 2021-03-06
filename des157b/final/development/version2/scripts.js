(function () {

    'use strict';
    console.log('reading js');

    Parse.initialize("dXnQbCCMhIThm2mxW0ulzEwTtD51B67cp4rGzf0j","lt0vEry0LBasv2SVUYR7meCPPz8tVcU0m1I2ohO2"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = 'https://parseapi.back4app.com/'

    const list = document.querySelector("ol")
    // const inputs = document.querySelectorAll("#add-story input:not([type=submit])")


    // SUBMIT
    // document.getElementById('submit').addEventListener('click', function(event){
    //     event.preventDefault();
    //     addStory();
    // })

    // BACK4APP
    async function display() {
        const stories = Parse.Object.extend('Stories');
        const query = new Parse.Query(stories);
        const results = await query.ascending('firstname').find();
        console.log(results);

        results.forEach(function(eachStory){
            const id = eachStory.id;
            const title = eachStory.get('title');
            const firstname = eachStory.get('firstname');
            const lastname = eachStory.get('lastname');
            const story = eachStory.get('story');

            const theList = document.createElement("li");
            theList.setAttribute("id", `r=${id}`);
            theList.innerHTML = `
            <div class = "gallery-box">
            <p class = "gallery-content gallery-title">${title}</p>
            <p class = "gallery-content gallery-name">${firstname} ${lastname}</p>
            <p class = "gallery-content gallery-story">${story}</p>
        </div>`

        list.append(theList);
        })
    }
    display();

    // async function addStory() {
    //     const newStory = {};

    //     for (let i = 0; i<inputs.length; i++) {
    //         let key = inputs[i].getAttribute('name');
    //         let value = inputs[i].value;
    //         newStory[key] = value;
    //     }
    //     if (newStory.title != "" && newStory.firstname != "" && newStory.lastname != ""&& newStory.story != ""){
    //         const newStoryData = new Parse.Object('Stories');
    //         newStoryData.set('title', newStory.title);
    //         newStoryData.set('firstname', newStory.firstname);
    //         newStoryData.set('lastname', newStory.lastname);
    //         newStoryData.set('story', newStory.story);
    //     }
    //     else {
    //         document.getElementById('overlay1').className = 'hidden';
    //         document.getElementById('panels-section').className = 'showing';
    //     }
    //     try {
    //         const result = await newStoryData.save();
    //         document.getElementById('overlay1').className = 'hidden';
    //         document.getElementById('panels-section').className = 'showing';
    //         list.innerHTML = "";
    //         display();
    //     }
    //     catch (error){
    //         console.error('Error while creating friend:', error);
    //     }
    // }


    // OVERLAY1    

    document.getElementById('panel1').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay1').className = 'showing';
        document.getElementById('panels-section').className = 'hidden';
        // document.getElementById('panel1').className = 'move';
    })

    document.getElementById('close1').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay1').className = 'hidden';
        document.getElementById('panels-section').className = 'showing';
        // document.getElementById('panel1').className = 'moveback';
    })

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.getElementById('overlay1').className = 'hidden';
            document.getElementById('panels-section').className = 'showing';
            // document.getElementById('panel1').className = 'moveback';
        }
    });

    // OVERLAY2

    document.getElementById('panel2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay2').className = 'showing';
        document.getElementById('panels-section').className = 'hidden';
    })

    document.getElementById('close2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay2').className = 'hidden';
        document.getElementById('panels-section').className = 'showing';
    })

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.getElementById('overlay2').className = 'hidden';
            document.getElementById('panels-section').className = 'showing';
        }
    });

    // OVERLAY3

    document.getElementById('panel3').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay3').className = 'showing';
        document.getElementById('panels-section').className = 'hidden';
    })

    document.getElementById('close3').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay3').className = 'hidden';
        document.getElementById('panels-section').className = 'showing';
    })

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.getElementById('overlay3').className = 'hidden';
            document.getElementById('panels-section').className = 'showing';
        }
    });

    // OVERLAY4

    document.getElementById('panel4').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay4').className = 'showing';
        document.getElementById('panels-section').className = 'hidden';
    })

    document.getElementById('close4').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay4').className = 'hidden';
        document.getElementById('panels-section').className = 'showing';
    })

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.getElementById('overlay4').className = 'hidden';
            document.getElementById('panels-section').className = 'showing';
        }
    });
    
})();