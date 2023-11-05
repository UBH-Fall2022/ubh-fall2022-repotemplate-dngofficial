document.addEventListener('DOMContentLoaded', function () {
    const mainPage = document.querySelector('.popup');
    const settingsPopup = document.querySelector('.settings-popup');
    const settingsButton = document.getElementById('settings-button');
    const backButton = document.getElementById('back-button');
    const toxicitySlider = document.getElementById('toxicity-slider');

    // Function to show the settings popup and hide the main page
    function showSettingsPopup() {
        mainPage.style.display = 'none'; // Hide the main page
        settingsPopup.style.display = 'block'; // Show the settings popup
    }

    // Function to hide the settings popup and show the main page
    function hideSettingsPopup() {
        settingsPopup.style.display = 'none'; // Hide the settings popup
        mainPage.style.display = 'block'; // Show the main page
    }

    // Add a click event listener to the "Settings" button
    settingsButton.addEventListener('click', showSettingsPopup);

    // Add a click event listener to the "Back" button inside the settings popup
    backButton.addEventListener('click', hideSettingsPopup);

    // Add an input event listener to the toxicity slider
    toxicitySlider.addEventListener('input', function () {
        const toxicityLevel = toxicitySlider.value;
        // Handle the slider value (toxicityLevel) here
        // You can update UI or make requests based on the value
    });
});