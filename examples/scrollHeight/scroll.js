(function (){

    //The default scroll level where to update
    var updateAt = 0.9;

    //On scroll
    window.addEventListener("scroll",scrollDetected);
    
    function scrollDetected(){
        //Area viewable based on browser window height
        var viewableArea = document.documentElement.clientHeight;
        var bodyHeight = document.height;

        //How many pixels has the scrollbar moved in Y - 0 if no scrollbar in Y active
        var scrollAt = window.scrollY;

        //The amount of pixels you can scroll through
        var scrollablePixels = bodyHeight-viewableArea;

        //Percentage scrolled through
        var percentageScrolled = (scrollAt*1)/scrollablePixels;

        if(percentageScrolled >= updateAt){
            $.getJSON("examples/scrollHeight/ipsum.json",function(response){
                $("#scrollContent").append("<p>" + response.content + "</p>");
                setTimeout(scrollDetected, 250);
            });
        }
    };

    //Add the click event listener to the scroll sections
    var scrollSections = document.getElementsByClassName("scrollSection");
    var itemCount = scrollSections.length;
    for(var i=0;i<itemCount;i++){
        scrollSections[i].addEventListener("click",setScroll);
    };

    //When a colored area gets clicked
    function setScroll(event){
        var element = event.target;

        if (element.getAttribute("id") === "scrollOff"){
            window.removeEventListener("scroll",scrollDetected);
        }
        else{
            window.addEventListener("scroll",scrollDetected);
            updateAt = element.getAttribute("setScroll");
        }
    }

    //set up the reset mechanism
    $("#resetScrollBtn").on("click",function(){
        $("#scrollContent").html("");
    })
})();