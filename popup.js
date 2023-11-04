document.addEventListener('DOMContentLoaded', function () {
    var sensitivitySlider = document.getElementById('sensitivity');
  
    // Add an event listener to adjust sensitivity
    sensitivitySlider.addEventListener('input', function () {
      // Get the selected sensitivity level
      var sensitivity = sensitivitySlider.value;
  
      // Save the selected sensitivity to Chrome's storage API
      chrome.storage.sync.set({ sensitivity: sensitivity });
    });
  
    // Retrieve the saved sensitivity level
    chrome.storage.sync.get(['sensitivity'], function (result) {
      if (result.sensitivity) {
        sensitivitySlider.value = result.sensitivity;
      }
    });
  });