(function(){
    "use strict";
    console.log('reading js');

        var pageTop;
        var bodyTag = document.querySelector('html');

        window.addEventListener('scroll', function(){
            pageTop = window.pageYOffset;

            switch(true){
                case pageTop < 500: bodyTag.className = "one"; break;
                case pageTop < 1000: bodyTag.className = "two"; break;
                case pageTop < 1500: bodyTag.className = "three"; break;
                case pageTop < 2000: bodyTag.className = "four"; break;
                default: bodyTag.className="five";
            }
        })
}());