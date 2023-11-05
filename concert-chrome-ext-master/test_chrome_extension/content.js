
const myInterval = setInterval(changeComment, 3000);

console.log(document.querySelectorAll("count-text style-scope ytd-comments-header-renderer"))
document.addEventListener('DOMContentLoaded', function () {
    console.log("first child save")
    chrome.tabs.sendMessage(tabs[0].id, {message: "first_child_save"});

});

chrome.runtime.onConnect.addListener(function()
{
    {
        console.log("first child lock save")
        chrome.tabs.sendMessage(tabs[0].id, {message: "first_child_save"});
    }
});



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    if(request.message == "lock_child"){
    document.body.appendChild(document.createElement('style')).textContent = '.ytd-comments { display: none; }';
  
    
    }
    else if(request.message == "unlock_child")
    {
        document.body.appendChild(document.createElement('style')).textContent = '.ytd-comments { display: block; }';

    }
});







    //for (let i = 0; i < cars.length; i++) {
 

    //console.log(document.querySelector("ytd-comments").childElementCount)
  

   /* var title = document.querySelector("ytd-watch-metadata")
    var title_true = document.querySelector("ytd-watch-metadata").children[0].children[0].children[1].children[0]

    var title_text = title_true.innerText


    if (title != null)
    {

        console.log("test_title")
        console.log(title)
        console.log(title_true)
        console.log(title_text)

        var replacements = [
            "Fnaf", 
            "Intro",
            "d",
        ]  

        replacements.forEach(r => { 

        var str = document.querySelector("ytd-watch-metadata").children[0].children[0].children[1].children[0].innerText
        var regex = new RegExp(r, "g");
        console.log(regex)
        var res = str.replace(regex, "***");
        document.querySelector("ytd-watch-metadata").children[0].children[0].children[1].children[0].innerHTML = res;

        console.log(str)
        console.log(res)


        console.log(document.querySelector("ytd-watch-metadata").children[0].children[0].children[1].children[0].innerText)


        })

                console.log(document.querySelector("ytd-watch-metadata").children[0].children[0].children[1].children[0].innerText)




        clearInterval(myInterval);

    } */

    function changeComment() {
        let currentTime = new Date();
        let currentTimeMillis = currentTime.getTime();
        let currentUTCTime = currentTime.toUTCString();

        for (let i = 0; i < 4; i++) {
        
    var index = i; // Replace with your desired integer
    var selector = "ytd-comment-thread-renderer:nth-child(" + index + ")";
    var second = document.querySelector(selector);
    
    if (second != null)
    {    
        var commentRenderer = second.firstElementChild
        var mainBody = commentRenderer.children[2]
        var text = mainBody.children[1].children[1].children[1].children[0].children[1]
        var text_str = text.innerText
        //console.log(second)
        //console.log(commentRenderer)
       // console.log(mainBody)
        //console.log(text)
        console.log(text_str)
        /*var replacements = [
            "the", 
            "is",
            "so",
        ]  
        replacements.forEach(r => { 

        var regex = new RegExp(r, "g");
        var res = text_str.replace(regex, "***");

        text.innerHTML = res*/


        //console.log(res)

        text.innerHTML = "hi hello"
    }
} 



        //second.style.display = "none";
        clearInterval(myInterval);
    }

 

