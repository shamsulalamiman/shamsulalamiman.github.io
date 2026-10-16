// Dark / light switch. The choice is remembered in this browser.
// (The small script in each page's <head> applies it early, so the page never flashes the wrong colours.)
const root = document.documentElement;                          // the <html> element
const button = document.querySelector('[data-theme-toggle]');
const themeColor = document.querySelector('meta[name="theme-color"]');
const COLORS = { dark: '#1B1B1B', light: '#FFFFFF' };           // browser bar colour on phones

function applyTheme(theme) {
  root.dataset.theme = theme;                                   // CSS reads data-theme="light"
  themeColor.setAttribute('content', COLORS[theme]);
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  button.setAttribute('aria-label', label);                     // for screen readers
  button.title = label;                                         // tooltip on hover
}

applyTheme(root.dataset.theme === 'light' ? 'light' : 'dark');   // dark is the default
button.hidden = false;                                          // the button only appears when JavaScript works

button.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) { }    // remember the choice
});
