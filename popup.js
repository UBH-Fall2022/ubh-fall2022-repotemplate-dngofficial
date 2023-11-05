document.addEventListener('DOMContentLoaded', function () {
    const mainPage = document.querySelector('.popup');
    const settingsPopup = document.querySelector('.settings-popup');
    const settingsButton = document.getElementById('settings-button');
    const backButton = document.getElementById('back-button');
    const toxicitySlider = document.getElementById('toxicity-slider');
    const filterButton = document.getElementById('filter-button');
    const filterPage = document.querySelector('.filter');

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

    function showFilterPage() {
        settingsPopup.style.display = 'none';
        filterPage.style.disply = 'block';
    }

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

    filterButton.addEventListener('click', showFilterPage);

    backButton.addEventListener('click', hideFilterPage);
    setDatabase();
});

function setDatabase() {
    const firebaseConfig = {
        apiKey: "AIzaSyDb-PwpSGh9MTLFnUr4o9o0f5cMoNEU-Dg",
        authDomain: "ub-hackathon-2023.firebaseapp.com",
        projectId: "ub-hackathon-2023",
        storageBucket: "ub-hackathon-2023.appspot.com",
        messagingSenderId: "529481299548",
        appId: "1:529481299548:web:4365f31748b6ece11ed899",
        measurementId: "G-3ZSN7JL1QL"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const db = firebase.database();
    console.log("CONNECTED")
    db.ref("/Comments").
        db.ref('/Comments').on('value', (snapshot) => {
            const name = snapshot.val();
            console.log(name);
        });

}