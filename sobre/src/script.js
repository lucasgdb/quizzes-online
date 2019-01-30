const root = document.querySelector(':root'),
  metaThemeColor = document.querySelector('meta[name=theme-color]'),
  metaMSThemeColor = document.querySelector('meta[name=msapplication-navbutton-color]'),
  icon = document.querySelector('link[rel=icon]')

M.Sidenav.init(document.querySelectorAll('.sidenav'));
M.Materialbox.init(document.querySelectorAll('.materialboxed'));

if (innerWidth >= 1024)
  document.querySelector('#card').className = 'card horizontal'

function darkTheme() {
  localStorage.setItem('darktheme', 'true')
  metaThemeColor.setAttribute('content', '#2962ff')
  metaMSThemeColor.setAttribute('content', '#2962ff')
  icon.setAttribute('href', '../images/logo_dark.png')
  root.style.setProperty('--corFundo', '#242b38')
  root.style.setProperty('--corFundo2', '#2a3342')
  root.style.setProperty('--corFundoScroll', '#2a3342')
  root.style.setProperty('--corScroll', '#2962ff')
  root.style.setProperty('--corScrollHover', '#0b4cff')
  root.style.setProperty('--corFundo3', '#2962ff')
  root.style.setProperty('--corFundoActive', '#0b4cff')
  root.style.setProperty('--corTexto', 'white')
}

function lightTheme() {
  localStorage.removeItem('darktheme')
  metaThemeColor.setAttribute('content', '#009688')
  metaMSThemeColor.setAttribute('content', '#009688')
  icon.setAttribute('href', '../images/logo_light.png')
  root.style.setProperty('--corFundo', 'white')
  root.style.setProperty('--corFundo2', 'white')
  root.style.setProperty('--corFundoScroll', '#ededed')
  root.style.setProperty('--corScroll', '#929292')
  root.style.setProperty('--corScrollHover', 'grey')
  root.style.setProperty('--corFundo3', '#009688')
  root.style.setProperty('--corFundoActive', '#007267')
  root.style.setProperty('--corTexto', 'black')
}
if (localStorage.getItem('darktheme') === 'true')
  darkTheme()
else lightTheme()

window.onload = () => {
  document.querySelector('#preloader').className = 'hide'
  document.querySelector('#nav').className = ''
  document.querySelector('#container').className = 'container'
}