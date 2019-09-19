"use strict"

const card = document.querySelector('#card')

if (localStorage.getItem('darktheme')) document.body.setAttribute('data-theme', 'dark')

const tabletMedia = x => {
	if (x.matches) card.classList.add('horizontal')
	else card.classList.remove('horizontal')
}

const x = window.matchMedia("(min-width: 768px)")
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

	try {
		preLoader.remove()
	} catch (err) {
		preLoader.style.display = 'none'
	}
}
