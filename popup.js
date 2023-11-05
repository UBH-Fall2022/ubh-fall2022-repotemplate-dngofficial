document.addEventListener('DOMContentLoaded', function () {
    const mainPage = document.querySelector('.popup');
    const settingsPopup = document.querySelector('.settings-popup');
    const settingsButton = document.getElementById('settings-button');
    const backButton = document.getElementById('back-button');
    const toxicitySlider = document.getElementById('toxicity-slider');
    const filterButton = document.getElementById('filter-button');
    const backButton2 = document.getElementById('back-button2');
    const filterPage = document.querySelector('.filter');
    const wordInput = document.getElementById('word-input');
    const addButton = document.getElementById('add-button');
    const wordList = document.getElementById('word-list');
    const filterToggle = document.getElementById('filter-toggle');
    
    if (filterToggle) {
        // Call the check() and uncheck() functions based on your requirements
        check(); // To check the filter toggle initially

        // Add a change event listener to the filter toggle
        filterToggle.addEventListener('change', function (event) {
            if (event.target.checked) {
                console.log('Filter is enabled');
                // You can perform actions wshen the filter is enabled
            } else {
                console.log('Filter is disabled');
                // You can perform actions when the filter is disabled
            }
        });
    }

    // Function to show the settings popup and hide the main page
    function showSettingsPopup() {
        mainPage.style.display = 'none';
        settingsPopup.style.display = 'block';
    }

    // Function to hide the settings popup and show the main page
    function hideSettingsPopup() {
        settingsPopup.style.display = 'none';
        mainPage.style.display = 'block';
    }

    // Function to show the filter page
    function showFilterPage() {
        settingsPopup.style.display = 'none';
        filterPage.style.display = 'block';
    }

    // Function to hide the filter page
    function hideFilterPage() {
        filterPage.style.display = 'none';
        settingsPopup.style.display = 'block';
    }

    // Add a click event listener to the "Settings" button
    settingsButton.addEventListener('click', showSettingsPopup);

    // Add a click event listener to the "Back" button inside the settings popup
    backButton.addEventListener('click', hideSettingsPopup);

    // Add an input event listener to the toxicity slider
    toxicitySlider.addEventListener('input', function () {
        const toxicityLevel = toxicitySlider.value;
        // You can update UI or make requests based on the value
    });

    // Add a click event listener to the "Custom Filter" button
    filterButton.addEventListener('click', showFilterPage);

    // Add a click event listener to the "Back" button inside the filter page
    backButton2.addEventListener('click', hideFilterPage);

    addButton.addEventListener('click', addWord);

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
            wordItem.appendChild(wordText);

            const removeButton = document.createElement('div');
            removeButton.className = 'remove-button';
            removeButton.textContent = 'X';
            removeButton.addEventListener('click', function () {

                const wordValue = wordItem.querySelector('.word-text').textContent;
                console.log('Removed: ' + wordValue);

                wordList.removeChild(wordItem);
            });
            wordItem.appendChild(removeButton);

            wordList.appendChild(wordItem);
            wordInput.value = '';
        }
    }

    function check() {
        document.getElementById('filter-toggle').checked = true;
    }
    
    function uncheck() {
        document.getElementById('filter-toggle').checked = false;
    }

});