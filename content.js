function createSpeedReaderUI(selectedText) {
  // Implementieren Sie hier die UI für den Speed-Reader
}

function startSpeedReading(text, wpm) {
  // Implementieren Sie hier die RSVP-Logik
}

browser.runtime.onMessage.addListener((message) => {
  if (message.action === "openSpeedReader") {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      createSpeedReaderUI(selectedText);
    }
  }
});
