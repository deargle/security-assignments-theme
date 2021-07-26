const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const navbar = document.getElementById('navbar-main');

const link_css_theme = document.getElementById('css-theme');

function _setDark() {
  link_css_theme.href = dark_css_file;
  navbar.classList.add('navbar-dark', 'bg-primary');
  navbar.classList.remove('navbar-light', 'bg-light');
  localStorage.setItem('theme', 'dark');
}

function _setLight() {
  link_css_theme.href = light_css_file;
  navbar.classList.add('navbar-light', 'bg-light');
  navbar.classList.remove('navbar-dark', 'bg-primary');
  localStorage.setItem('theme', 'light');
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    if (currentTheme === 'dark') {
      _setDark()
      toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
      _setDark()
    }
    else {
      _setLight()
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
