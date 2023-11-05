document.addEventListener('DOMContentLoaded', function () {


    let masterArray = []

    const wordInput = document.getElementById('word-input');
    const addButton = document.getElementById('add-button');
    const wordList = document.getElementById('word-list');

    const childbutton = document.getElementById('removebutton');


    addButton.addEventListener('click', addWord);
    childbutton.addEventListener('click', removeChild);

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
    {
        if (request.message == "first_child_save")
        {
            chrome.storage.sync.get(['childlockvalue'], function(result) {
                if (result.key == "Childlock: Off")
                {
                    chrome.tabs.sendMessage(tabs[0].id, {message: "unlock_child"});
                }
                else
                {
                    chrome.tabs.sendMessage(tabs[0].id, {message: "lock_child"});

                }

              });        
            }
    });


    


    function removeChild()
    {
        console.log("lock child")
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs)
        {
            console.log(childbutton.innerText)
            if (childbutton.innerText == "Childlock: Off")
            {
            chrome.tabs.sendMessage(tabs[0].id, {message: "lock_child"});
            childbutton.innerText = "Childlock: On"
            console.log("next: " + childbutton.innerText)
            chrome.storage.session.set({'childlockvalue': childbutton.innerText}, function()
            {
                alert("saved child lock on")
            });            
            }
            else
            {
            chrome.tabs.sendMessage(tabs[0].id, {message: "unlock_child"});
            childbutton.innerText = "Childlock: Off"
            console.log("next: " + childbutton.innerText)
            chrome.storage.session.set({'childlockvalue': childbutton.innerText}, function()
            {
                alert("saved child lock off")
            });
              

            }
        });

    }

    function addWord() {
        const word = wordInput.value.trim();


        if (word) {
            const wordItem = document.createElement('div');
            wordItem.className = 'word-item';

            const wordText = document.createElement('span');
            wordText.className = 'word-text';
            wordText.textContent = word;
            masterArray.push(word)
            wordItem.appendChild(wordText);

            const removeButton = document.createElement('div');
            removeButton.className = 'remove-button';
            removeButton.textContent = 'X';
            removeButton.addEventListener('click', function () {

                const wordValue = wordItem.querySelector('.word-text').textContent;
                console.log('Removed: ' + wordValue);
                masterArray = masterArray.filter(function (words) {
                    return words !== wordValue;

                });

                wordList.removeChild(wordItem);
            });
            wordItem.appendChild(removeButton);
            chrome.storage.session.set({'customfilterarray': masterArray}, function()
            {
                console.log(masterArray)
            }
            );




            wordList.appendChild(wordItem);
            wordInput.value = '';
        }
    }
});
