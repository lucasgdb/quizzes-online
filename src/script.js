const btnNext = document.querySelector('#next'),
  btnStart = document.querySelector('#start'),
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
  types = document.querySelectorAll('[name=selectQuiz]'),
  modal5 = document.querySelector('#modal5'),
  switcherTheme = document.querySelector('#darktheme'),
  root = document.querySelector(':root'),
  metaThemeColor = document.querySelector('meta[name=theme-color]'),
  metaMSThemeColor = document.querySelector('meta[name=msapplication-navbutton-color]'),
  icon = document.querySelector('link[rel=icon]')

let points = 0,
  currentQuestion = 0,
  matches = [],
  selectedType = -1,
  time = 0,
  timeInterval

modal5.onkeydown = e => {
  if (e.which === 13) {
    save()
    renderSavedItems()
  }
}

function render() {
  let html = `<p id="time" style="margin:5px 0 0 0">${timeProgress(time)}<i class="material-icons right" style="top:-2px;margin-left:5px">access_time</i></p><h6>${currentQuestion + 1}. ${questions[selectedType][currentQuestion]}</h6>`

  const answersQuestion = [answers[selectedType][currentQuestion], ...fakeAnswers[selectedType][currentQuestion]],
    answersRandom = []

  for (let i = 0; i < answersQuestion.length; i++) {
    let rndNumber = parseInt(Math.random() * answersQuestion.length)

    while (answersRandom.indexOf(rndNumber) !== -1)
      rndNumber = parseInt(Math.random() * answersQuestion.length)

    answersRandom[i] = rndNumber

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z']
    html += `
        <p>
          <label>
            <input class="with-gap" name="question${currentQuestion}" data-text="${answersQuestion[rndNumber]}" type="radio" />
            <span>${alphabet[i]}) ${answersQuestion[rndNumber]}</span>
          </label>
        </p>
      `
  }

  createPagination()
  quiz.innerHTML = html
}

function createPagination() {
  htmlPagination = '<li class="disabled"><a><i class="material-icons">chevron_left</i></a></li>'

  for (let i = 0; i < questions[selectedType].length; i++)
    htmlPagination += `<li class="${matches[i] === undefined ? '' : 'waves-effect waves-light'} ${currentQuestion === i ? 'active corFundo3 c-df no-border waves-effect waves-light' : `${matches[i] === undefined ? 'disabled' : matches[i] === 1 ? `active green c-df no-border ${i === questions[selectedType].length - 1 ? '' : 'brw'}` : `active red c-df no-border ${i === questions[selectedType].length - 1 ? '' : 'brw'}`}`}"><a>${i + 1}</a></li>`

  htmlPagination += '<li class="disabled"><a><i class="material-icons">chevron_right</i></a></li>'

  pagination.innerHTML = htmlPagination
}

function timeProgress(time) {
  const hour = parseInt(time / 3600)
  time -= hour * 3600

  const minutes = parseInt(time / 60)
  time -= minutes * 60

  if (hour === 1) {
    M.Modal.getInstance(document.querySelector('#modal6')).open()
    stop()
    return
  }

  return `${minutes}m ${time}s`
}

function reTimeProgress(time = String) {
  const str = time.split(' '),
   seconds = parseInt(str[0].replace('m', '')) * 60 + parseInt(str[1].replace('s', ''))

  return seconds
}

function start() {
  selectQuiz.className = 'hide'
  btnStart.className = 'hide'
  quiz.className = 'card-panel'
  btnNext.className = 'btn waves-effect waves-light'
  btnGiveUp.className = 'btn right waves-effect waves-light modal-trigger red'
  pagination.className = 'pagination center'

  types.forEach((item, index) => {
    if (item.checked) {
      selectedType = index
      document.title = `Quiz - ${item.getAttribute('data-text')}`
    }
  })

  render()
  timeInterval = setInterval(() => { document.querySelector('#time').innerHTML = `${timeProgress(++time)}<i class="material-icons right" style="top:-2px;margin-left:5px">access_time</i>` }, 1000)
}

function stop() {
  selectQuiz.className = 'card-panel'
  btnStart.className = 'btn waves-effect waves-light'
  quiz.className = 'hide'
  btnNext.className = 'hide'
  btnGiveUp.className = 'hide'
  btnShowAnswers.className = 'hide'
  btnFinish.className = 'hide'
  pagination.className = 'hide'
  btnSave.className = 'hide'
  document.title = 'Quizzes - Início'

  points = 0
  currentQuestion = 0
  selectedType = -1
  matches = []
  clearInterval(timeInterval)
  time = 0
}

function next() {
  const currentAnswers = document.querySelectorAll(`[name=question${currentQuestion}]`)

  let sumWithoutResponse = 0

  currentAnswers.forEach(item => { if (!item.checked) sumWithoutResponse++ })

  if (sumWithoutResponse === currentAnswers.length)
    M.toast({ html: 'Você deve selecionar uma resposta!', classes: 'red accent-4', displayLength: 2050 })
  else {
    currentAnswers.forEach(item => {
      if (item.checked && item.getAttribute('data-text') === answers[selectedType][currentQuestion]) {
        matches.push(1)
        points += 1
      }
    })

    if (matches[currentQuestion] === undefined) matches.push(0)

    currentQuestion += 1

    if (currentQuestion === answers[selectedType].length) {
      clearInterval(timeInterval)
      currentAnswers.forEach(answer => { answer.disabled = true })

      btnNext.className = 'hide'
      btnGiveUp.className = 'hide'
      btnShowAnswers.className = 'btn waves-effect waves-light right modal-trigger'
      btnSave.className = 'btn waves-effect waves-light modal-trigger green'
      btnFinish.className = 'btn waves-effect waves-light'
      
      btnShowAnswers.onclick = () => {
        let html = '<h4><i class="material-icons" style="top:2px">question_answer</i> Respostas</h4>'
        for (let i = 0; i < answers[selectedType].length; i++)
          html += `
            <p style="margin:0">${i + 1}. ${questions[selectedType][i]}</p>
            <p style="margin:0 0 10px 0">R: ${answers[selectedType][i]} <i class="material-icons ${matches[i] === 0 ? 'red-text' : 'green-text'}" style="top:${matches[i] === 0 ? '7' : '5'}px;margin:-7px 0 0 0">${matches[i] === 0 ? 'clear' : 'done'}</i></p>
          `

        showAnswers.innerHTML = html
      }

      quisSave.innerHTML = types[selectedType].getAttribute('data-text')
      hitsSave.innerHTML = `${matches.filter(item => item === 1).length}/${questions[selectedType].length}`
      timeSave.innerHTML = timeProgress(time)
      const pointsPercentage = points / answers[selectedType].length * 100
      winPoints.innerHTML = `${points} de ${questions[selectedType].length} e obteve um desempenho de <span class="${pointsPercentage < 50 ? 'red-text' : 'green-text'}">${pointsPercentage.toFixed(1)}%</span>`
      
      star.className = `material-icons ${pointsPercentage < 50 ? 'red-text' : 'green-text'}`
      M.Modal.getInstance(document.querySelector('#modal2')).open()
      createPagination()
    } else render()
  }
}

function arraySort(array) {
  const newArray = []
  let bestArray = -1, indexBestArray = -1, bestTime = 3600

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

function save() {
  if (textName.value.trim() !== '' && textName.value.length > 2) {
    const allSaved = localStorage.getItem('registeredItems')

    if (allSaved === null)
      localStorage.setItem('registeredItems', `{"items":[["${types[selectedType].getAttribute('data-text')}","${textName.value}",${matches.filter(item => item === 1).length}, ${questions[selectedType].length},"${timeProgress(time)}"]]}`)
    else {
      let newArray = JSON.parse(allSaved).items

      newArray.push([types[selectedType].getAttribute('data-text'), textName.value, matches.filter(item => item === 1).length, questions[selectedType].length, timeProgress(time)])

      newArray = arraySort(newArray)

      localStorage.setItem('registeredItems', `{"items":${JSON.stringify(newArray)}}`)
    }

    M.Modal.getInstance(modal5).close()
    btnSave.className = 'hide'
    textName.value = ''
    textName.select()
  } else {
    M.toast({ html: 'Por favor, escolha um nome válido!', classes: 'red accent-4', displayLength: 2050 })
    textName.select()
  }
}

function renderSavedItems() {
  if (M.Tabs.getInstance(document.querySelector('#tabs')) !== undefined)
   M.Tabs.getInstance(document.querySelector('#tabs')).destroy()

  let html = '', htmlParent = '', htmlItem, newItems
  const items = localStorage.getItem('registeredItems'),
    defaultHtmlItem = '<table class="responsive-table"><thead><tr><th>Nome</th><th>Acertos</th><th>Tempo</th></tr></thead><tbody>'

  if (items !== null)
    newItems = JSON.parse(items).items

  for (let i = 0; i < types.length; i++) {
    html += `<li class="tab tabs-fixed-width tab-demo"><a href="#quiz${i}">${types[i].getAttribute('data-text')}</a></li>`

    htmlItem = defaultHtmlItem

    if (items !== null)
      for (let j = 0; j < newItems.length; j++)
        if (types[i].getAttribute('data-text') === newItems[j][0]) {
          htmlItem += `
            <tr>
              <td>${newItems[j][1]}</td>
              <td>${newItems[j][2]}/${newItems[j][3]}</td>
              <td>${newItems[j][4]}</td>
            </tr>
          `
          newItems.splice(j, 1)
          j--
        }

    htmlItem += '</tbody></table>'

    htmlParent += `<div id="quiz${i}">${htmlItem}</div>`
    htmlItem = defaultHtmlItem
  }

  document.querySelector('#tabs').innerHTML = html

  document.querySelector('#tabItems').innerHTML = htmlParent

  M.Tabs.init(document.querySelectorAll('.tabs'))
}

function clearSavedItems() {
  localStorage.removeItem('registeredItems')
  renderSavedItems()
}

function darkTheme() {
  localStorage.setItem('darktheme', 'true')
  metaThemeColor.setAttribute('content', '#2962ff')
  metaMSThemeColor.setAttribute('content', '#2962ff')
  icon.setAttribute('href', 'images/logo_dark.png')
  root.style.setProperty('--corFundo', '#242b38')
  root.style.setProperty('--corFundo2', '#2a3342')
  root.style.setProperty('--corFundoScroll', '#2a3342')
  root.style.setProperty('--corScroll', '#2962ff')
  root.style.setProperty('--corScrollHover', '#0b4cff')
  root.style.setProperty('--corSwitcher', '#2962ff')
  root.style.setProperty('--corSwitcherBall', '#0b4cff')
  root.style.setProperty('--corFundo3', '#2962ff')
  root.style.setProperty('--corFundoActive', '#0b4cff')
  root.style.setProperty('--corTexto', 'white')
}

function lightTheme() {
  localStorage.removeItem('darktheme')
  metaThemeColor.setAttribute('content', '#009688')
  metaMSThemeColor.setAttribute('content', '#009688')
  icon.setAttribute('href', 'images/logo_light.png')
  root.style.setProperty('--corFundo', 'white')
  root.style.setProperty('--corFundo2', 'white')
  root.style.setProperty('--corFundoScroll', '#ededed')
  root.style.setProperty('--corScroll', '#929292')
  root.style.setProperty('--corScrollHover', 'grey')
  root.style.setProperty('--corSwitcher', '#9e9e9e')
  root.style.setProperty('--corSwitcherBall', '#f1f1f1')
  root.style.setProperty('--corFundo3', '#009688')
  root.style.setProperty('--corFundoActive', '#007267')
  root.style.setProperty('--corTexto', 'black')
}

if (localStorage.getItem('darktheme') === 'true') {
  darkTheme()
  switcherTheme.checked = true
}
else lightTheme()

window.addEventListener('DOMContentLoaded', function() {
  M.Sidenav.init(document.querySelectorAll('.sidenav'))
  M.Modal.init(document.querySelectorAll('.modal'))
  M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'), { hoverEnabled: false })

  renderSavedItems()
  document.querySelector('#rank').onclick = () => {
    let tabs
    types.forEach((item, index) => {
      if (item.checked) {
        tabs = document.querySelectorAll('.tab')[index]
        tabs.querySelector('a').click()
      }
    })

    setTimeout(() => {
      M.Tabs.getInstance(document.querySelector('#tabs')).updateTabIndicator()
      document.querySelector('#tabs').scrollLeft = tabs.offsetLeft
    }, 300)
  }
})

window.onload = () => {
  btnStart.onclick = start
  btnNext.onclick = next
  btnFinish.onclick = stop

  document.querySelector('#preloader').className = 'hide'
  document.querySelector('#nav').className = ''
  document.querySelector('#container').className = 'container'
}