"use strict";

const btnNext = document.querySelector('#next'),
	btnStart = document.querySelector('#start'),
	btnRank = document.querySelector('#rank'),
	btnGiveUp = document.querySelector('#giveUp'),
	btnShowAnswers = document.querySelector('#showAnswers'),
	btnFinish = document.querySelector('#finish'),
	btnSave = document.querySelector('#save'),
	selectQuiz = document.querySelector('#selectQuiz'),
	quiz = document.querySelector('#quiz'),
	pagination = document.querySelector('#pagination'),
	winPoints = document.querySelector('#points'),
	star = document.querySelector('#star'),
	showAnswers = document.querySelector('#answers'),
	quisSave = document.querySelector('#quizSave'),
	hitsSave = document.querySelector('#hitsSave'),
	timeSave = document.querySelector('#timeSave'),
	textName = document.querySelector('#name'),
	modal5 = document.querySelector('#modal5'),
	switcherTheme = document.querySelector('#darktheme'),
	quizTitle = document.querySelector('#quizTitle'),
	root = document.querySelector(':root'),
	metaThemeColor = document.querySelector('meta[name=theme-color]'),
	metaMSThemeColor = document.querySelector('meta[name=msapplication-navbutton-color]'),
	icon = document.querySelector('link[rel=icon]'),
	options = document.querySelector('#options'),
	tabs = document.querySelector('#tabs'),
	tabItems = document.querySelector('#tabItems')

let points = 0,
	currentQuestion = 0,
	matches = [],
	selectedType = -1,
	time = 0,
	timeInterval,
	radioButtons = '',
	types

for (let i = 0; i < names.length; i++) {
	radioButtons +=
		`<p>
			<label>
				<input class="with-gap" name="selectQuiz" type="radio" data-num="${i}" data-text="${names[i]}" ${i == 0 ? 'checked' : ''} />
				<span>${names[i]}</span>
			</label>
		</p>`
}

options.innerHTML = radioButtons

types = document.querySelectorAll('[name=selectQuiz]')

const darkTheme = () => {
	localStorage.removeItem('lighttheme')
	metaThemeColor.setAttribute('content', '#2962ff')
	metaMSThemeColor.setAttribute('content', '#2962ff')
	icon.setAttribute('href', 'images/logo_dark.png')
	document.body.setAttribute('data-theme', 'dark')
}

const lightTheme = () => {
	localStorage.setItem('lighttheme', 1)
	metaThemeColor.setAttribute('content', '#009688')
	metaMSThemeColor.setAttribute('content', '#009688')
	icon.setAttribute('href', 'images/logo_light.png')
	document.body.setAttribute('data-theme', 'light')
}

if (localStorage.getItem('lighttheme')) {
	lightTheme()
	switcherTheme.checked = false
}

if (localStorage.getItem('registeredItems')) {
	const items = JSON.parse(localStorage.getItem('registeredItems')).items

	if (items.length === 0) {
		localStorage.removeItem('registeredItems')
	}
}

const render = () => {
	let html = `<p id="time" style="margin:5px 0 0 0">${timeProgress(time)}<i class="material-icons right" style="top:-2px;margin-left:5px">access_time</i></p><h6>${currentQuestion + 1}) ${questions[selectedType][currentQuestion]}</h6>`

	const answersQuestion = [answers[selectedType][currentQuestion], ...fakeAnswers[selectedType][currentQuestion]],
		answersRandom = []

	for (let i = 0; i < answersQuestion.length; i++) {
		let rndNumber = parseInt(Math.random() * answersQuestion.length)

		while (answersRandom.indexOf(rndNumber) !== -1)
			rndNumber = parseInt(Math.random() * answersQuestion.length)

		answersRandom[i] = rndNumber

		const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z']
		html +=
			`<p>
				<label>
					<input class="with-gap" name="question${currentQuestion}" data-text="${answersQuestion[rndNumber]}" type="radio" />
					<span>${alphabet[i]}) ${answersQuestion[rndNumber]}</span>
				</label>
			</p>`
	}

	createPagination()

	if (currentQuestion !== answers[selectedType].length - 1) {
		btnNext.setAttribute('title', 'Próxima Pergunta')
		btnNext.innerHTML = 'Próximo<i class="material-icons right">chevron_right</i>'
	} else {
		btnNext.setAttribute('title', 'Finalizar')
		btnNext.innerHTML = 'Finalizar<i class="material-icons right">chevron_right</i>'
	}

	quiz.innerHTML = html
}

const createPagination = () => {
	let htmlPagination = '<li class="disabled"><a><i class="material-icons">chevron_left</i></a></li>'

	for (let i = 0; i < questions[selectedType].length; i++)
		htmlPagination += `<li class="${matches[i] === undefined ? '' : 'waves-effect waves-light'} ${currentQuestion === i ? 'active bgcolor3 c-df no-border waves-effect waves-light' : `${matches[i] === undefined ? 'disabled' : matches[i] === 1 ? `active green c-df no-border ${i === questions[selectedType].length - 1 ? '' : 'brw'}` : `active red c-df no-border ${i === questions[selectedType].length - 1 ? '' : 'brw'}`}`}"><a>${i + 1}</a></li>`

	htmlPagination += '<li class="disabled"><a><i class="material-icons">chevron_right</i></a></li>'

	pagination.innerHTML = htmlPagination
	pagination.scrollLeft = pagination.querySelectorAll('li')[currentQuestion < parseInt(questions[selectedType].length / 2 + 1) ? 0 : parseInt(questions[selectedType].length / 2) + 1].offsetLeft
}

const timeProgress = time => {
	const hour = parseInt(time / 3600)
	time -= hour * 3600

	const minutes = parseInt(time / 60)
	time -= minutes * 60

	if (hour >= 1) {
		M.Modal.getInstance(document.querySelector('#modal6')).open()
		stop()
		return
	}

	return `${minutes}m ${time}s`
}

const reTimeProgress = time => {
	const str = time.split(' ')

	return parseInt(str[0].replace('m', '')) * 60 + parseInt(str[1].replace('s', ''))
}

const start = () => {
	selectQuiz.classList.add('hide')
	btnStart.classList.add('hide')
	btnRank.classList.add('hide')
	quiz.classList.remove('hide')
	btnNext.classList.remove('hide')
	btnGiveUp.classList.remove('hide')
	pagination.classList.remove('hide')
	btnSave.removeAttribute('disabled')

	for (let i = 0; i < types.length; i++) {
		if (types[i].checked) {
			selectedType = i
			document.title = `Quiz - ${types[i].getAttribute('data-text')}`
		}
	}

	render()
	timeInterval = setInterval(() => {
		document.querySelector('#time').innerHTML = `${timeProgress(++time)}<i class="material-icons right" style="top:-2px;margin-left:5px">access_time</i>`
	}, 1000)
}

const stop = () => {
	selectQuiz.classList.remove('hide')
	btnStart.classList.remove('hide')
	btnRank.classList.remove('hide')
	quiz.classList.add('hide')
	btnNext.classList.add('hide')
	btnGiveUp.classList.add('hide')
	btnShowAnswers.classList.add('hide')
	btnFinish.classList.add('hide')
	pagination.classList.add('hide')
	btnSave.classList.add('hide')
	document.title = 'Quizzes Online - Início'

	points = 0
	currentQuestion = 0
	selectedType = -1
	matches = []
	clearInterval(timeInterval)
	time = 0
}

const next = () => {
	const currentAnswers = document.querySelectorAll(`[name=question${currentQuestion}]`)

	let sumWithoutResponse = 0

	for (let i = 0; i < currentAnswers.length; i++) {
		if (!currentAnswers[i].checked) sumWithoutResponse++
	}

	if (sumWithoutResponse === currentAnswers.length)
		M.toast({
			html: 'Você deve selecionar uma alternativa!',
			classes: 'red accent-4',
			displayLength: 2050
		})
	else {
		for (let i = 0; i < currentAnswers.length; i++) {
			if (currentAnswers[i].checked && currentAnswers[i].getAttribute('data-text') === answers[selectedType][currentQuestion]) {
				matches.push(1)
				points += 1
			}
		}

		if (matches[currentQuestion] === undefined) matches.push(0)

		currentQuestion += 1

		if (currentQuestion === answers[selectedType].length) {
			clearInterval(timeInterval)
			for (let i = 0; i < currentAnswers.length; i++) {
				currentAnswers[i].disabled = true
			}

			btnNext.classList.add('hide')
			btnGiveUp.classList.add('hide')
			btnShowAnswers.classList.remove('hide')
			btnSave.classList.remove('hide')
			btnFinish.classList.remove('hide')

			btnShowAnswers.onclick = () => {
				let html = '<h4><i class="material-icons" style="top:2px">question_answer</i> Respostas corretas</h4>'
				for (let i = 0; i < answers[selectedType].length; i++)
					html +=
					`<p style="margin:0">${i + 1}) ${questions[selectedType][i]}</p>
					<p style="margin:0 0 10px 0">R: ${answers[selectedType][i]} <i class="material-icons ${matches[i] === 0 ? 'red-text' : 'green-text'}" style="top:${matches[i] === 0 ? '7' : '5'}px;margin:-7px 0 0 0">${matches[i] === 0 ? 'clear' : 'done'}</i></p>`

				showAnswers.innerHTML = html
			}

			quisSave.innerHTML = types[selectedType].getAttribute('data-text')
			timeSave.innerHTML = timeProgress(time)
			const pointsPercentage = points / answers[selectedType].length * 100
			hitsSave.innerHTML = `${points} de ${questions[selectedType].length} (<span class="${pointsPercentage < 50 ? 'red-text' : 'green-text'}">${pointsPercentage.toFixed(1)}%</span>)`
			winPoints.innerHTML = `${points} de ${questions[selectedType].length} e obteve um desempenho de <span class="${pointsPercentage < 50 ? 'red-text' : 'green-text'}">${pointsPercentage.toFixed(1)}%</span>`

			star.className = `material-icons ${pointsPercentage < 50 ? 'red-text' : 'green-text'}`
			M.Modal.getInstance(document.querySelector('#modal2')).open()
			createPagination()
		} else render()
	}
}

const arraySort = array => {
	const newArray = []
	let bestArray = -1,
		indexBestArray = -1,
		bestTime = 3600

	while (array.length > 0) {
		for (let i = 0; i < array.length; i++)
			if (array[i][2] > bestArray) {
				indexBestArray = i
				bestTime = reTimeProgress(array[i][4])
				bestArray = array[i][2]
			} else if (array[i][2] === bestArray && reTimeProgress(array[i][4]) < bestTime) {
			indexBestArray = i
			bestTime = reTimeProgress(array[i][4])
		}

		bestArray = -1
		bestTime = 3600

		newArray.push(array[indexBestArray])
		array.splice(indexBestArray, 1)
	}

	return newArray
}

const save = () => {
	if (textName.value.trim() !== '' && textName.value.length > 2) {
		const allSaved = localStorage.getItem('registeredItems')

		if (allSaved === null)
			localStorage.setItem('registeredItems', `{"items":[["${types[selectedType].getAttribute('data-text')}","${textName.value}",${points},${questions[selectedType].length},"${timeProgress(time)}"]]}`)
		else {
			let newArray = JSON.parse(allSaved).items

			newArray.push([types[selectedType].getAttribute('data-text'), textName.value, points, questions[selectedType].length, timeProgress(time)])
			newArray = arraySort(newArray)

			localStorage.setItem('registeredItems', `{"items":${JSON.stringify(newArray)}}`)
		}

		M.Modal.getInstance(modal5).close()
		btnSave.setAttribute('disabled', 'true')
		textName.value = ''
		textName.select()
	} else {
		M.toast({
			html: 'Por favor, escolha um nome válido!',
			classes: 'red accent-4',
			displayLength: 2050
		})
		textName.select()
	}
}

const renderSavedItems = (index = 0) => {
	if (M.Tabs.getInstance(tabs) !== undefined) {
		M.Tabs.getInstance(tabs).destroy()
	}

	let html = '<p style="margin-left:10px">Não há nenhum jogo salvo! :(</p>',
		htmlParent = '',
		htmlItem, newItems

	const items = localStorage.getItem('registeredItems'),
		defaultHtmlItem = '<table class="responsive-table"><thead><tr><th>Posição</th><th class="center-align">Nome</th><th class="center-align">Acertos</th><th class="center-align">Tempo</th><th class="center-align">Remover</th></tr></thead><tbody>'

	htmlItem = defaultHtmlItem

	if (items !== null) {
		html = ''
		let doesItHave = false

		for (let i = 0; i < types.length; i++) {
			newItems = JSON.parse(items).items
			for (let j = 0, num = 0, pos = 1; j < newItems.length; j++, num++) {
				if (types[i].getAttribute('data-text') === newItems[j][0]) {
					htmlItem +=
						`<tr>
							<td>${pos}°</td>
							<td class="center-align">${newItems[j][1]}</td>
							<td class="center-align">${newItems[j][2]}/${newItems[j][3]}</td>
							<td class="center-align">${newItems[j][4]}</td>
							<td class="center-align"><i class="material-icons red-text" style="cursor:pointer" onclick="deleteItem(${num}, ${parseInt(types[i].getAttribute('data-num'), 10)})">close</i></td>
						</tr>`

					newItems.splice(j, 1)
					pos += 1
					j -= 1
					doesItHave = true
				}
			}

			if (doesItHave) {
				html += `<li class="tab tabs-fixed-width tab-demo"><a data-num="${types[i].getAttribute('data-num')}" class="${index == i ? 'active' : ''}" href="#quiz${i}">${types[i].getAttribute('data-text')}</a></li>`
				htmlItem += '</tbody></table>'
				htmlParent += `<div id="quiz${i}">${htmlItem}</div>`
				doesItHave = false
				htmlItem = defaultHtmlItem
			}
		}

		tabs.innerHTML = html
		tabItems.innerHTML = htmlParent
		M.Tabs.init(document.querySelectorAll('.tabs'))
	} else {
		tabs.innerHTML = html
		tabItems.innerHTML = htmlParent
	}
}

const deleteItem = (item, index) => {
	const allSaved = JSON.parse(localStorage.getItem('registeredItems')).items

	allSaved.splice(item, 1)
	if (allSaved.length !== 0) {
		localStorage.setItem('registeredItems', `{"items":${JSON.stringify(allSaved)}}`)
	} else {
		localStorage.removeItem('registeredItems')
	}

	renderSavedItems(index)
}

const clearSavedItems = () => {
	localStorage.removeItem('registeredItems')
	renderSavedItems()
}

window.addEventListener('DOMContentLoaded', () => {
	M.Sidenav.init(document.querySelectorAll('.sidenav'))
	M.Modal.init(document.querySelectorAll('.modal'))
	M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'), {
		hoverEnabled: false
	})

	if (!localStorage.getItem('firstVisit')) {
		localStorage.setItem('firstVisit', 0)
		M.TapTarget.init(document.querySelectorAll('.tap-target'), {
			onClose: () => {
				M.FloatingActionButton.getInstance(document.querySelector('.fixed-action-btn')).open()
			}
		})

		setTimeout(() => {
			M.TapTarget.getInstance(document.querySelector('.tap-target')).open()
			M.TapTarget.getInstance(document.querySelector('.tap-target'))._calculatePositioning()
		}, 100)
	}

	renderSavedItems()

	btnRank.onclick = () => {
		const currentTab = M.Tabs.getInstance(tabs)

		if (currentTab) {
			for (let i = 0; i < currentTab.$tabLinks.length; i++) {
				const num = currentTab.$tabLinks[i].getAttribute('data-num')
				if (types[num].checked) {
					currentTab.$tabLinks[i].click()

					setTimeout(() => {
						currentTab.updateTabIndicator()
						tabs.scrollLeft = currentTab.$tabLinks[i].offsetLeft
					}, 300)

					break
				}
			}
		}
	}

	btnSave.onclick = () => {
		setTimeout(() => {
			textName.select()
		}, 50)
	}
})

modal5.onkeydown = e => {
	if (e.which === 13) {
		save()
		renderSavedItems()
	}
}

window.onload = () => {
	const preLoader = document.querySelector('#preloader')

	document.querySelector('#nav').classList.remove('hide')
	document.querySelector('#container').classList.remove('hide')
	preLoader.classList.add('hide')
	preLoader.remove()
}
