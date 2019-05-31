"use strict";

const metaThemeColor = document.querySelector('meta[name=theme-color]'),
	metaMSThemeColor = document.querySelector('meta[name=msapplication-navbutton-color]'),
	icon = document.querySelector('link[rel=icon]'),
	card = document.querySelector('#card')

const darkTheme = () => {
	metaThemeColor.setAttribute('content', '#f02727')
	metaMSThemeColor.setAttribute('content', '#f02727')
	icon.setAttribute('href', '../images/logo_dark.png')
	document.body.setAttribute('data-theme', 'dark')
}

if (localStorage.getItem('darktheme')) {
	darkTheme()
}

const tabletMedia = x => {
	if (x.matches) {
		card.classList.add('horizontal')
	} else {
		card.classList.remove('horizontal')
	}
}

const x = window.matchMedia("(min-width: 735px)")
tabletMedia(x)
x.addListener(tabletMedia)

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
