// Function to send a message to the content script to reveal a hidden comment
function revealComment(commentId) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: (commentId) => {
                const comment = document.getElementById(commentId);
                const warningBox = comment.previousElementSibling;
                comment.style.display = 'block'; // Show the original comment
                warningBox.style.display = 'none'; // Hide the warning box
            },
            args: [commentId],
        });
    });
}

// Add a click event listener to the "View" button
document.addEventListener('click', function (e) {
    if (e.target && e.target.tagName == 'BUTTON') {
        revealComment(e.target.dataset.commentId);
    }
});