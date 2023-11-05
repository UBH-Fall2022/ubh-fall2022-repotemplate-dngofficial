document.addEventListener('DOMContentLoaded', function () {
    const mainPage = document.querySelector('.popup');
    const settingsPopup = document.querySelector('.settings-popup');
    const settingsButton = document.getElementById('settings-button');
    const backButton = document.getElementById('back-button');
    const toxicitySlider = document.getElementById('toxicity-slider');
    const filterButton = document.getElementById('filter-button');
    const backButton2 = document.getElementById('back-button2');
    const filterPage = document.querySelector('.filter');
    document.querySelector('#child-safety-toggle').addEventListener('change', () => cToggle());
    document.querySelector('#filter-toggle').addEventListener('change', () => fToggle());
    var cToggleValue = false;
    var fToggleValue = false;


    function cToggle() {
        console.log("Toggled!");
        document.querySelector("#test").value += "a";
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (cToggleValue == false) {
                chrome.tabs.sendMessage(tabs[0].id, { message: "lock_child" });
                cToggleValue = true;
            } else {
                chrome.tabs.sendMessage(tabs[0].id, { message: "unlock_child" });
                cToggleValue = false;
            }
        })
    }

    function fToggle() {
        fToggleValue = !fToggleValue;
    }

    const toxicityLevelValue = document.getElementById('toxicity-level-value');

    // Add an input event listener to the toxicity slider
    toxicitySlider.addEventListener('input', function () {
        const value = parseFloat(toxicitySlider.value).toFixed(2);
        toxicityLevelValue.textContent = value;
    });

    function showSettingsPopup() {
        mainPage.style.display = 'none';
        settingsPopup.style.display = 'block';
    }

    function hideSettingsPopup() {
        settingsPopup.style.display = 'none';
        mainPage.style.display = 'block';
    }

    function showFilterPage() {
        settingsPopup.style.display = 'none';
        filterPage.style.display = 'block';
    }

    function hideFilterPage() {
        filterPage.style.display = 'none';
        settingsPopup.style.display = 'block';
    }

    settingsButton.addEventListener('click', showSettingsPopup);

    backButton.addEventListener('click', hideSettingsPopup);

    toxicitySlider.addEventListener('input', function () {
        const toxicityLevel = toxicitySlider.value;
    });

    filterButton.addEventListener('click', showFilterPage);

    backButton2.addEventListener('click', hideFilterPage);


    const wordInput = document.getElementById('word-input');
    const addButton = document.getElementById('add-button');
    const wordList = document.getElementById('word-list');

    addButton.addEventListener('click', addWord);

    function addWord() {
        const word = wordInput.value.trim();
        if (word) {
            const wordItem = document.createElement('div');
            wordItem.className = 'word-item';

            const wordText = document.createElement('span');
            wordText.className = 'remove-button';
            wordText.textContent = word;
            wordItem.appendChild(wordText);

            wordText.addEventListener('click', function () {
                const wordValue = wordItem.querySelector('.remove-button').textContent;
                console.log('Removed: ' + wordValue);

                wordList.removeChild(wordItem);
            });
            wordList.appendChild(wordItem);
            wordInput.value = '';
        }
    }



});