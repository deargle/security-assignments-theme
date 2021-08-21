// expects `dark_css_file` to be set elsewhere
const dark_link_css_theme = document.getElementById('dark-css-theme');
let toggleSwitch;
let navbar;

function _setDark() {
  if (!dark_link_css_theme.href.includes(dark_css_file)) {
    dark_link_css_theme.href = dark_css_file;
  }
  if (navbar) {
    navbar.classList.add('navbar-dark', 'bg-primary');
    navbar.classList.remove('navbar-light', 'bg-light');
  }
}

function _setLight() {
  dark_link_css_theme.href = "";
  if (navbar) {
    navbar.classList.add('navbar-light', 'bg-light');
    navbar.classList.remove('navbar-dark', 'bg-primary');
  }
}

function set_current_theme(){
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
  if (currentTheme) {
    if (currentTheme === 'dark') {
      _setDark()
      if (toggleSwitch) {
        toggleSwitch.checked = true;
      }
    }
  }
}
// do it once so that it sets CSS before page loads
set_current_theme();

function switchTheme(e) {
    if (e.target.checked) {
      localStorage.setItem('theme', 'dark');
      _setDark()
    }
    else {
      localStorage.setItem('theme', 'light');
      _setLight()
    }
}

document.addEventListener("DOMContentLoaded", function() {
  toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  navbar = document.getElementById('navbar-main');
  toggleSwitch.addEventListener('change', switchTheme, false);
  // do it again so that it gets the nav this time
  set_current_theme();
});
