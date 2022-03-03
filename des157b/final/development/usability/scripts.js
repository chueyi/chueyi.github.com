(function () {

    'use strict';
    console.log('reading js');

    Parse.initialize("dXnQbCCMhIThm2mxW0ulzEwTtD51B67cp4rGzf0j","lt0vEry0LBasv2SVUYR7meCPPz8tVcU0m1I2ohO2"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = 'https://parseapi.back4app.com/'

    const list = document.querySelector("ol")
    const inputs = document.querySelectorAll("#add-story input:not([type=submit])")
    const submitButton = document.getElementById('submit');


    // SUBMIT
    submitButton.addEventListener('submit', function(event){
        event.preventDefault();
        addStory();
    })

    // BACK4APP

    async function addStory() {
        const newStory = {};

        for (let i = 0; i<inputs.length; i++) {
            let key = inputs[i].getAttribute('name');
            let value = inputs[i].value;
            newStory[key] = value;
        }
        if (newStory.title != "" && newStory.firstname != "" && newStory.lastname != ""&& newStory.story != ""){
            const newStoryData = new Parse.Object('Stories');
            newStoryData.set('title', newStory.title);
            newStoryData.set('firstname', newStory.firstname);
            newStoryData.set('lastname', newStory.lastname);
            newStoryData.set('story', newStory.story);

        try {
            const result = await newStoryData.save();
            // console.log('story made', result)
            document.getElementById('overlay1').className = 'hidden';
            document.getElementById('panels-section').className = 'showing';
            list.innerHTML = "";
            display();
            }
            catch (error){
                console.error('Error while creating friend:', error);
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
        const results = await query.ascending('firstname').find();
        console.log(results);

    results.forEach(function(eachStory){
        const id = eachStory.id;
        const title = eachStory.get('title');
        const firstname = eachStory.get('firstname');
        const lastname = eachStory.get('lastname');
        const story = eachStory.get('story');
        const theList = document.createElement("li");
            
        theList.setAttribute("id", `r-${id}`);
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



    //NEXT  

    document.getElementById('logo').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('panels-section').className = 'hidden';
        document.getElementById('about').className = 'showing';
        document.getElementById('grid').className = 'hidden';
        document.getElementById('next').className = 'showing';
        document.getElementById('next2').className = 'showing';
        document.getElementById('next3').className = 'hidden';
        document.getElementById('next4').className = 'hidden';
        document.getElementById('next-text').className = 'showing';
        document.getElementById('next-text2').className = 'hidden';
        document.getElementById('write-activate-p').style.fontWeight = "400";
        document.getElementById('gallery-activate-p').style.fontWeight = "400";
    })

    document.getElementById('next').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('panels-section').className = 'showing';
        document.getElementById('next').className = 'hidden';
        document.getElementById('next2').className = 'hidden';
        document.getElementById('next3').className = 'showing';
        document.getElementById('next4').className = 'showing';
        document.getElementById('next-text2').className = 'hidden';
        document.getElementById('next-text').className = 'hidden';
        document.getElementById('about').className = 'hidden';
        document.getElementById('grid').className = 'hidden';
        document.getElementById('write-activate-p').style.fontWeight = "800";
        document.getElementById('gallery-activate-p').style.fontWeight = "400";
    })

    document.getElementById('next-text').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('panels-section').className = 'showing';
        document.getElementById('next').className = 'hidden';
        document.getElementById('next2').className = 'hidden';
        document.getElementById('next3').className = 'showing';
        document.getElementById('next4').className = 'showing';
        document.getElementById('next-text').className = 'hidden';
        document.getElementById('next-text2').className = 'hidden';
        document.getElementById('about').className = 'hidden';
        document.getElementById('grid').className = 'hidden';
        document.getElementById('write-activate-p').style.fontWeight = "800";
        document.getElementById('gallery-activate-p').style.fontWeight = "400";
    })

    document.getElementById('next3').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('panels-section').className = 'hidden';
        document.getElementById('next').className = 'hidden';
        document.getElementById('next2').className = 'hidden';
        document.getElementById('next-text').className = 'hidden';
        document.getElementById('next-text2').className = 'hidden';
        document.getElementById('about').className = 'hidden';
        document.getElementById('grid').className = 'showing';
        document.getElementById('write-activate-p').style.fontWeight = "400";
        document.getElementById('gallery-activate-p').style.fontWeight = "800";
    })

    document.getElementById('next-text').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('panels-section').className = 'showing';
        document.getElementById('next').className = 'hidden';
        document.getElementById('next2').className = 'hidden';
        document.getElementById('next-text').className = 'hidden';
        document.getElementById('next-text2').className = 'showing';
        document.getElementById('about').className = 'hidden';
        document.getElementById('grid').className = 'hidden';
        document.getElementById('write-activate-p').style.fontWeight = "800";
        document.getElementById('gallery-activate-p').style.fontWeight = "400";
    })
    
    document.getElementById('next-text2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('panels-section').className = 'hidden';
        document.getElementById('next').className = 'hidden';
        document.getElementById('next2').className = 'hidden';
        document.getElementById('next3').className = 'hidden';
        document.getElementById('next4').className = 'hidden';
        document.getElementById('next-text').className = 'hidden';
        document.getElementById('next-text2').className = 'hidden';
        document.getElementById('about').className = 'hidden';
        document.getElementById('grid').className = 'showing';
        document.getElementById('write-activate-p').style.fontWeight = "400";
        document.getElementById('gallery-activate-p').style.fontWeight = "800";
    })

    document.getElementById('write-activate').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('panels-section').className = 'showing';
        document.getElementById('about').className = 'hidden';
        document.getElementById('grid').className = 'hidden';
        document.getElementById('next').className = 'hidden';
        document.getElementById('next2').className = 'hidden';
        document.getElementById('next3').className = 'showing';
        document.getElementById('next4').className = 'showing';
        document.getElementById('next-text').className = 'hidden';
        document.getElementById('next-text2').className = 'showing';
        document.getElementById('write-activate-p').style.fontWeight = "800";
        document.getElementById('gallery-activate-p').style.fontWeight = "400";
    })

    document.getElementById('gallery-activate').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('panels-section').className = 'hidden';
        document.getElementById('about').className = 'hidden';
        document.getElementById('grid').className = 'showing';
        document.getElementById('next').className = 'hidden';
        document.getElementById('next2').className = 'hidden';
        document.getElementById('next3').className = 'hidden';
        document.getElementById('next4').className = 'hidden';
        document.getElementById('next-text').className = 'hidden';
        document.getElementById('next-text2').className = 'hidden';
        document.getElementById('write-activate-p').style.fontWeight = "400";
        document.getElementById('gallery-activate-p').style.fontWeight = "800";
    })


    // OVERLAY1    

    document.getElementById('panel1').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay1').className = 'showing';
        document.getElementById('panels-section').className = 'hidden';
        document.getElementById('next3').className = 'hidden';
        document.getElementById('next4').className = 'hidden';
        document.getElementById('next-text2').className = 'hidden';
    })

    document.getElementById('close1').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay1').className = 'hidden';
        document.getElementById('panels-section').className = 'showing';
        document.getElementById('next3').className = 'showing';
        document.getElementById('next4').className = 'showing';
        document.getElementById('next-text2').className = 'showing';
    })

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.getElementById('overlay1').className = 'hidden';
            document.getElementById('panels-section').className = 'showing';
            document.getElementById('next3').className = 'showing';
            document.getElementById('next4').className = 'showing';
            document.getElementById('next-text2').className = 'showing';
        }
    });

    // OVERLAY2

    document.getElementById('panel2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay2').className = 'showing';
        document.getElementById('panels-section').className = 'hidden';
        document.getElementById('next3').className = 'hidden';
        document.getElementById('next4').className = 'hidden';
        document.getElementById('next-text2').className = 'hidden';
    })

    document.getElementById('close2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay2').className = 'hidden';
        document.getElementById('panels-section').className = 'showing';
        document.getElementById('next3').className = 'showing';
        document.getElementById('next4').className = 'showing';
        document.getElementById('next-text2').className = 'showing';
    })

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.getElementById('overlay2').className = 'hidden';
            document.getElementById('panels-section').className = 'showing';
            document.getElementById('next3').className = 'showing';
            document.getElementById('next4').className = 'showing';
            document.getElementById('next-text2').className = 'showing';
        }
    });

    // OVERLAY3

    document.getElementById('panel3').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay3').className = 'showing';
        document.getElementById('panels-section').className = 'hidden';
        document.getElementById('next3').className = 'hidden';
        document.getElementById('next4').className = 'hidden';
        document.getElementById('next-text2').className = 'hidden';
    })

    document.getElementById('close3').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay3').className = 'hidden';
        document.getElementById('panels-section').className = 'showing';
        document.getElementById('next3').className = 'showing';
        document.getElementById('next4').className = 'showing';
        document.getElementById('next-text2').className = 'showing';
    })

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.getElementById('overlay3').className = 'hidden';
            document.getElementById('panels-section').className = 'showing';
            document.getElementById('next3').className = 'showing';
            document.getElementById('next4').className = 'showing';
            document.getElementById('next-text2').className = 'showing';
        }
    });

    // OVERLAY4

    document.getElementById('panel4').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay4').className = 'showing';
        document.getElementById('panels-section').className = 'hidden';
        document.getElementById('next3').className = 'hidden';
        document.getElementById('next4').className = 'hidden';
        document.getElementById('next-text2').className = 'hidden';
    })

    document.getElementById('close4').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay4').className = 'hidden';
        document.getElementById('panels-section').className = 'showing';
        document.getElementById('next3').className = 'showing';
        document.getElementById('next4').className = 'showing';
        document.getElementById('next-text2').className = 'showing';
    })

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.getElementById('overlay4').className = 'hidden';
            document.getElementById('panels-section').className = 'showing';
            document.getElementById('next3').className = 'showing';
            document.getElementById('next4').className = 'showing';
            document.getElementById('next-text2').className = 'showing';
        }
    });
    
})();