// options.js
document.getElementById('save').addEventListener('click', () => {
  const wpm = document.getElementById('wpm').value;
  const theme = document.getElementById('theme').value;
  browser.storage.sync.set({wpm, theme});
});

// Laden der gespeicherten Einstellungen
browser.storage.sync.get(['wpm', 'theme'], (result) => {
  document.getElementById('wpm').value = result.wpm || 300;
  document.getElementById('theme').value = result.theme || 'light';
});
