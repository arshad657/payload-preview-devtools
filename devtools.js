chrome.devtools.panels.create(
  "Payload + Preview", // Name of your custom tab
  null,                // Optional icon path
  "panel.html",        // The HTML page that will render the UI
  function(panel) {
    // Panel created successfully!
  }
);