// Function to classify comments as hateful
function classifyComment(commentText) {
    // Implement your AI model classification logic here
    return true; // Replace with your classification result (true for hateful, false for non-hateful)
}

// Iterate through comments and process them
const comments = document.querySelectorAll('.comment');
comments.forEach((comment) => {
    const commentText = comment.textContent;
    if (classifyComment(commentText)) {
        // Create a div element for the warning box
        const warningBox = document.createElement('div');
        warningBox.className = 'warning-box';

        // Create a warning message
        const warningMessage = document.createElement('p');
        warningMessage.textContent = 'This comment may contain hateful content. Click to reveal.';

        // Create a "View" button
        const viewButton = document.createElement('button');
        viewButton.textContent = 'View';
        viewButton.addEventListener('click', () => {
            comment.style.display = 'block'; // Show the original comment
            warningBox.style.display = 'none'; // Hide the warning box
        });

        // Append warning message and "View" button to the warning box
        warningBox.appendChild(warningMessage);
        warningBox.appendChild(viewButton);

        // Hide the original comment and append the warning box
        comment.style.display = 'none';
        comment.parentNode.insertBefore(warningBox, comment);
    }
});

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