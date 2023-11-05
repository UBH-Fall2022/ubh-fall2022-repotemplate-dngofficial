// console.log("Content script is running!");
// const warning = document.createElement("div");
// warning.textContent = "Test Warning Message";
// document.body.appendChild(warning);

// // Function to send a message to the content script to reveal a hidden comment
// function revealComment(commentId) {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         chrome.scripting.executeScript({
//             target: { tabId: tabs[0].id },
//             function: (commentId) => {
//                 const comment = document.getElementById(commentId);
//                 const warningBox = comment.previousElementSibling;
//                 comment.style.display = 'block'; // Show the original comment
//                 warningBox.style.display = 'none'; // Hide the warning box
//             },
//             args: [commentId],
//         });
//     });
// }

// Add a click event listener to the "View" button
// document.addEventListener('click', function (e) {
//     if (e.target && e.target.tagName === 'BUTTON') {
//         revealComment(e.target.dataset.commentId);
//     }
// });
// const myInterval = setInterval(changeComment, 1000)
// function changeComment() {

//     var second = document.querySelector("ytd-comment-thread-renderer:nth-child(2)")
//     var commentRenderer = second.firstElementChild
//     var mainBody = commentRenderer.children[2]
//     var text = mainBody.children[1].children[1].children[1].children[0].children[1]
//     var text_str = text.innerHTML

//     if (second != null) {

//         console.log(second)
//         console.log(commentRenderer)
//         console.log(mainBody)
//         console.log(text)
//         console.log(text_str)
//         text.innerHTML = "im boutta **"


//         //second.style.display = "none";
//         clearInterval(myInterval);
//     }

// }

// function readData(){
//     fetch("./HATESPEECH.json")
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => console.log(data))
// }

// const fetchInterval = setInterval(fetchData, 3000);

// async function fetchData() {
//     const currentUrl = window.location.href;
//     const flaskEndpoint = 'https://youtubefetch.onrender.com/';

//     try {
//         const response = await fetch(flaskEndpoint);
//         if (response.ok) {
//             const data = await response.json();
//             // Handle the received data
//             console.log(data);
//         } else {
//             throw new Error('Request failed');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         // Optionally, you can retry the request or handle errors as needed
//     }
// }

