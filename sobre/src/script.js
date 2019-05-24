"use strict"

const root = document.querySelector(':root'),
	metaThemeColor = document.querySelector('meta[name=theme-color]'),
	metaMSThemeColor = document.querySelector('meta[name=msapplication-navbutton-color]'),
	icon = document.querySelector('link[rel=icon]')

if (innerWidth >= 1024)
	document.querySelector('#card').className = 'card horizontal'

function darkTheme() {
	metaThemeColor.setAttribute('content', '#2962ff')
	metaMSThemeColor.setAttribute('content', '#2962ff')
	icon.setAttribute('href', '../images/logo_dark.png')
	document.body.setAttribute('data-theme', 'dark')
}

if (localStorage.getItem('darktheme')) {
	darkTheme()
}

document.addEventListener('DOMContentLoaded', () => {
	M.Sidenav.init(document.querySelectorAll('.sidenav'))
	M.Materialbox.init(document.querySelectorAll('.materialboxed'))
})

window.onload = () => {
	document.querySelector('#preloader').remove()
	document.querySelector('#nav').classList.remove('hide')
	document.querySelector('#container').classList.remove('hide')
	document.querySelector('footer').classList.remove('hide')
}
