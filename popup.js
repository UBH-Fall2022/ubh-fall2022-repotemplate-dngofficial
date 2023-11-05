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
    // const filterToggle = document.getElementById('filter-toggle');
    // const childSafetyToggle = document.getElementById('child-safety-toggle');
    document.querySelector('#child-safety-toggle').addEventListener('change',()=> cToggle())
    document.querySelector('#filter-toggle').addEventListener('change',()=> fToggle())
    var cToggleValue = false;
    var fToggleValue = false;


    function cToggle (){
        console.log("Toggled!")
        document.querySelector("#test").value+="a"
        cToggleValue = !cToggleValue;
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

    // function filterToggleEvent() {
    //     filterValue = !filterValue;
    //     filterToggle.classList.toggle('on', filterValue);
    //     filterToggle.classList.toggle('off', !filterValue);
    //     console.log('Filter is now ' + (filterValue ? 'on' : 'off'));
    // }

    // function childSafetyToggleEvent() {
    //     childSafetyValue = !childSafetyValue;
    //     childSafetyToggle.classList.toggle('on', childSafetyValue);
    //     childSafetyToggle.classList.toggle('off', !childSafetyValue);
    //     console.log('Child Safety Lock is now ' + (childSafetyValue ? 'on' : 'off'));
    // }

    // filterToggle.addEventListener('click', filterToggleEvent);
    // childSafetyToggle.addEventListener('click', childSafetyToggleEvent);

    settingsButton.addEventListener('click', showSettingsPopup);

    backButton.addEventListener('click', hideSettingsPopup);

    toxicitySlider.addEventListener('input', function () {
        const toxicityLevel = toxicitySlider.value;
    });

    filterButton.addEventListener('click', showFilterPage);

    backButton2.addEventListener('click', hideFilterPage);

});