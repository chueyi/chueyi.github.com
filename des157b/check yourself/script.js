(function() {

    'use script'
    console.log("reading js");

    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');
    const button5 = document.getElementById('button5');
    const button6 = document.getElementById('button6');
    const button7 = document.getElementById('button7');
    const button8 = document.getElementById('button8');
    const button9 = document.getElementById('button9');

    const char1 = document.getElementById('jaypark')
    const char2 = document.getElementById('twice1')
    const char3 = document.getElementById('exo')
    const char4 = document.getElementById('bts')
    const char5 = document.getElementById('heize')
    const char6 = document.getElementById('twice2')
    const char7 = document.getElementById('superm')
    const char8 = document.getElementById('nct')
    const char9 = document.getElementById('baekhyun')

    let globalData;
    async function getData(){
        const myArtists = await fetch('data/data.json');
        const data = await myArtists.json();
        globalData = data;
        console.log(data);
        document.querySelector('#textoutput').innerHTML = outputHTML(data);
    }
    function outputHTML(data){
        const dataPoints = Object.keys(data);
        let html = '<p>';
        html += `<br><br><br>`
        html += '</p>'
        return html;
    }
    getData();

    button1.addEventListener('click', function(){
        char1.style.display = "block"        
        char2.style.display = "none"
        char3.style.display = "none"
        char4.style.display = "none"
        char5.style.display = "none"
        char6.style.display = "none"
        char7.style.display = "none"
        char8.style.display = "none"
        char9.style.display = "none"

        let globalData;
        async function getData(){
            const myArtists = await fetch('data/data.json');
            const data = await myArtists.json();
            globalData = data;
            console.log(data);
            document.querySelector('#textoutput').innerHTML = outputHTML(data);
        }
        function outputHTML(data){
            const dataPoints = Object.keys(data);
            let html = '<p>';
            html += `${data.point1.artist} <br> ${data.point1.song} <br> ${data.point1.website}`
            html += '</p>'
            return html;
        }
        getData();
    })

    button2.addEventListener('click', function(){
        char1.style.display = "none"        
        char2.style.display = "block"
        char3.style.display = "none"
        char4.style.display = "none"
        char5.style.display = "none"
        char6.style.display = "none"
        char7.style.display = "none"
        char8.style.display = "none"
        char9.style.display = "none"

        let globalData;
        async function getData(){
            const myArtists = await fetch('data/data.json');
            const data = await myArtists.json();
            globalData = data;
            console.log(data);
            document.querySelector('#textoutput').innerHTML = outputHTML(data);
        }
        function outputHTML(data){
            const dataPoints = Object.keys(data);
            let html = '<p>';
            html += `${data.point2.artist} <br> ${data.point2.song} <br> ${data.point2.website}`
            html += '</p>'
            return html;
        }
        getData();
    })

    button3.addEventListener('click', function(){
        char1.style.display = "none"        
        char2.style.display = "none"
        char3.style.display = "block"
        char4.style.display = "none"
        char5.style.display = "none"
        char6.style.display = "none"
        char7.style.display = "none"
        char8.style.display = "none"
        char9.style.display = "none"
        let globalData;
        async function getData(){
            const myArtists = await fetch('data/data.json');
            const data = await myArtists.json();
            globalData = data;
            console.log(data);
            document.querySelector('#textoutput').innerHTML = outputHTML(data);
        }
        function outputHTML(data){
            const dataPoints = Object.keys(data);
            let html = '<p>';
            html += `${data.point3.artist} <br> ${data.point3.song} <br> ${data.point3.website}`
            html += '</p>'
            return html;
        }
        getData();
    })

    button4.addEventListener('click', function(){
        char1.style.display = "none"        
        char2.style.display = "none"
        char3.style.display = "none"
        char4.style.display = "block"
        char5.style.display = "none"
        char6.style.display = "none"
        char7.style.display = "none"
        char8.style.display = "none"
        char9.style.display = "none"
        
        let globalData;
        async function getData(){
            const myArtists = await fetch('data/data.json');
            const data = await myArtists.json();
            globalData = data;
            console.log(data);
            document.querySelector('#textoutput').innerHTML = outputHTML(data);
        }
        function outputHTML(data){
            const dataPoints = Object.keys(data);
            let html = '<p>';
            html += `${data.point4.artist} <br> ${data.point4.song} <br> ${data.point4.website}`
            html += '</p>'
            return html;
        }
        getData();
    })

    button5.addEventListener('click', function(){
        char1.style.display = "none"        
        char2.style.display = "none"
        char3.style.display = "none"
        char4.style.display = "none"
        char5.style.display = "block"
        char6.style.display = "none"
        char7.style.display = "none"
        char8.style.display = "none"
        char9.style.display = "none"

        let globalData;
        async function getData(){
            const myArtists = await fetch('data/data.json');
            const data = await myArtists.json();
            globalData = data;
            console.log(data);
            document.querySelector('#textoutput').innerHTML = outputHTML(data);
        }
        function outputHTML(data){
            const dataPoints = Object.keys(data);
            let html = '<p>';
            html += `${data.point5.artist} <br> ${data.point5.song} <br> ${data.point5.website}`
            html += '</p>'
            return html;
        }
        getData();
    })

    button6.addEventListener('click', function(){
        char1.style.display = "none"        
        char2.style.display = "none"
        char3.style.display = "none"
        char4.style.display = "none"
        char5.style.display = "none"
        char6.style.display = "block"
        char7.style.display = "none"
        char8.style.display = "none"
        char9.style.display = "none"

        let globalData;
        async function getData(){
            const myArtists = await fetch('data/data.json');
            const data = await myArtists.json();
            globalData = data;
            console.log(data);
            document.querySelector('#textoutput').innerHTML = outputHTML(data);
        }
        function outputHTML(data){
            const dataPoints = Object.keys(data);
            let html = '<p>';
            html += `${data.point6.artist} <br> ${data.point6.song} <br> ${data.point6.website}`
            html += '</p>'
            return html;
        }
        getData();
    })

    button7.addEventListener('click', function(){
        char1.style.display = "none"        
        char2.style.display = "none"
        char3.style.display = "none"
        char4.style.display = "none"
        char5.style.display = "none"
        char6.style.display = "none"
        char7.style.display = "block"
        char8.style.display = "none"
        char9.style.display = "none"

        let globalData;
        async function getData(){
            const myArtists = await fetch('data/data.json');
            const data = await myArtists.json();
            globalData = data;
            console.log(data);
            document.querySelector('#textoutput').innerHTML = outputHTML(data);
        }
        function outputHTML(data){
            const dataPoints = Object.keys(data);
            let html = '<p>';
            html += `${data.point7.artist} <br> ${data.point7.song} <br> ${data.point7.website}`
            html += '</p>'
            return html;
        }
        getData();
    })

    button8.addEventListener('click', function(){
        char1.style.display = "none"        
        char2.style.display = "none"
        char3.style.display = "none"
        char4.style.display = "none"
        char5.style.display = "none"
        char6.style.display = "none"
        char7.style.display = "none"
        char8.style.display = "block"
        char9.style.display = "none"

        let globalData;
        async function getData(){
            const myArtists = await fetch('data/data.json');
            const data = await myArtists.json();
            globalData = data;
            console.log(data);
            document.querySelector('#textoutput').innerHTML = outputHTML(data);
        }
        function outputHTML(data){
            const dataPoints = Object.keys(data);
            let html = '<p>';
            html += `${data.point8.artist} <br> ${data.point8.song} <br> ${data.point8.website}`
            html += '</p>'
            return html;
        }
        getData();
    })

    button9.addEventListener('click', function(){
        char1.style.display = "none"        
        char2.style.display = "none"
        char3.style.display = "none"
        char4.style.display = "none"
        char5.style.display = "none"
        char6.style.display = "none"
        char7.style.display = "none"
        char8.style.display = "none"
        char9.style.display = "block"

        let globalData;
        async function getData(){
            const myArtists = await fetch('data/data.json');
            const data = await myArtists.json();
            globalData = data;
            console.log(data);
            document.querySelector('#textoutput').innerHTML = outputHTML(data);
        }
        function outputHTML(data){
            const dataPoints = Object.keys(data);
            let html = '<p>';
            html += `${data.point9.artist} <br> ${data.point9.song} <br> ${data.point9.website}`
            html += '</p>'
            return html;
        }
        getData();
    })




    
})();