"use strict";

const root = document.querySelector(':root'),
	metaThemeColor = document.querySelector('meta[name=theme-color]'),
	metaMSThemeColor = document.querySelector('meta[name=msapplication-navbutton-color]'),
	icon = document.querySelector('link[rel=icon]')

if (innerWidth >= 1024)
	document.querySelector('#card').className = 'card horizontal'

const lightTheme = () => {
	metaThemeColor.setAttribute('content', '#009688')
	metaMSThemeColor.setAttribute('content', '#009688')
	icon.setAttribute('href', 'images/logo_light.png')
	document.body.setAttribute('data-theme', 'light')
}

if (localStorage.getItem('lighttheme')) {
	lightTheme()
}

document.addEventListener('DOMContentLoaded', () => {
	M.Sidenav.init(document.querySelectorAll('.sidenav'))
	M.Materialbox.init(document.querySelectorAll('.materialboxed'))
})

window.onload = () => {
	const preLoader = document.querySelector('#preloader')

	document.querySelector('#nav').classList.remove('hide')
	document.querySelector('#container').classList.remove('hide')
	document.querySelector('footer').classList.remove('hide')
	preLoader.classList.add('hide')
	preLoader.remove()
}
