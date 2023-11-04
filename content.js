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

// // Add a click event listener to the "View" button
// document.addEventListener('click', function (e) {
//     if (e.target && e.target.tagName === 'BUTTON') {
//         revealComment(e.target.dataset.commentId);
//     }
// });

const myInterval = setInterval(changeComment, 1000)
function changeComment() {

    var second = document.querySelector("ytd-comment-thread-renderer:nth-child(2)")
    var commentRenderer = second.firstElementChild
    var mainBody = commentRenderer.children[2]
    var text = mainBody.children[1].children[1].children[1].children[0].children[1]
    var text_str = text.innerHTML

    if (second != null) {
        console.log(text_str)
        text.innerHTML = "im boutta **"
        clearInterval(myInterval);
    }
}
// // Iterate through comments and create a warning box for each
// const comments = document.querySelectorAll('.comment');
// comments.forEach((comment, index) => {
//     // Create a div element for the warning box
//     const warningBox = document.createElement('div');
//     warningBox.className = 'warning-box';

//     // Create a warning message
//     const warningMessage = document.createElement('p');
//     warningMessage.textContent = 'This comment may contain hateful content. Click to reveal.';

//     // Create a "View" button
//     const viewButton = document.createElement('button');
//     viewButton.textContent = 'View';
//     viewButton.dataset.commentId = `comment-${index}`; // Add a unique comment ID to the button

//     // Append warning message and "View" button to the warning box
//     warningBox.appendChild(warningMessage);
//     warningBox.appendChild(viewButton);

//     // Hide the original comment and append the warning box
//     comment.style.display = 'none';
//     comment.parentNode.insertBefore(warningBox, comment);
// });
// >>>>>>> a13feb63bae683d8effa40becaf477232e832faf
