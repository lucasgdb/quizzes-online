const btnNext = document.querySelector('#btnNext'),
  btnStart = document.querySelector('#btnStart'),
  btnGiveUp = document.querySelector('#giveUp'),
  btnFinish = document.querySelector('#finish'),
  selectQuiz = document.querySelector('#selectQuiz'),
  quiz = document.querySelector('#quiz'),
  pagination = document.querySelector('#pagination'),
  winPoints = document.querySelector('#points'),
  questions = [
    ['Animais 1', 'Animais 2', 'Animais 3', 'Animais 4', 'Animais 5', 'Animais 6'],
    ['Países 1', 'Países 2', 'Países 3', 'Países 4', 'Países 5'],
    ['Pessoas 1', 'Pessoas 2', 'Pessoas 3', 'Pessoas 4', 'Pessoas 5'],
    ['Comidas 1', 'Comidas 2']
  ],
  answers = [
    ['Resposta Animais 1', 'Resposta Animais 2', 'Resposta Animais 3', 'Resposta Animais 4', 'Resposta Animais 5', 'Resposta Animais 6'],
    ['Resposta Países 1', 'Resposta Países 2', 'Resposta Países 3', 'Resposta Países 4', 'Resposta Países 5'],
    ['Resposta Pessoas 1', 'Resposta Pessoas 2', 'Resposta Pessoas 3', 'Resposta Pessoas 4', 'Resposta Pessoas 5'],
    ['Resposta Comidas 1', 'Resposta Comidas 2']
  ],
  fakeAnswers = [
    [
      ['Fake Animais 1', 'Fake Animais 2', 'Fake Animais 3'],
      ['Fake Animais 1', 'Fake Animais 2', 'Fake Animais 3'],
      ['Fake Animais 1', 'Fake Animais 2', 'Fake Animais 3'],
      ['Fake Animais 1', 'Fake Animais 2', 'Fake Animais 3'],
      ['Fake Animais 1', 'Fake Animais 2', 'Fake Animais 3'],
      ['Fake Animais 1', 'Fake Animais 2', 'Fake Animais 3']
    ],
    [
      ['Fake Países 1', 'Fake Países 2', 'Fake Países 3'],
      ['Fake Países 1', 'Fake Países 2', 'Fake Países 3'],
      ['Fake Países 1', 'Fake Países 2', 'Fake Países 3'],
      ['Fake Países 1', 'Fake Países 2', 'Fake Países 3'],
      ['Fake Países 1', 'Fake Países 2', 'Fake Países 3']
    ],
    [
      ['Fake Pessoas 1', 'Fake Pessoas 2', 'Fake Pessoas 3'],
      ['Fake Pessoas 1', 'Fake Pessoas 2', 'Fake Pessoas 3'],
      ['Fake Pessoas 1', 'Fake Pessoas 2', 'Fake Pessoas 3'],
      ['Fake Pessoas 1', 'Fake Pessoas 2', 'Fake Pessoas 3'],
      ['Fake Pessoas 1', 'Fake Pessoas 2', 'Fake Pessoas 3']
    ],
    [
      ['Fake Comidas 1', 'Fake Comidas 2', 'Fake Comidas 3'],
      ['Fake Comidas 1', 'Fake Comidas 2', 'Fake Comidas 3']
    ]
  ]

let points = 0,
  currentQuestion = 0,
  selectedType = -1

function render() {
  let html = `<h6>${currentQuestion + 1}° ${questions[selectedType][currentQuestion]}</h6>`,
    htmlPagination = '<li class="disabled"><a><i class="material-icons">chevron_left</i></a></li>'

  const answersQuestion = [answers[selectedType][currentQuestion], fakeAnswers[selectedType][currentQuestion][0], fakeAnswers[selectedType][currentQuestion][1], fakeAnswers[selectedType][currentQuestion][2]],
    answersRandom = []

  for (let i = 0; i < answersQuestion.length; i++) {
    let rndNumber = parseInt(Math.random() * 4)

    while (answersRandom.indexOf(rndNumber) !== -1)
      rndNumber = parseInt(Math.random() * answersQuestion.length)

    answersRandom[i] = rndNumber

    const alphabet = ['A', 'B', 'C', 'D']
    html += `
        <p>
          <label>
            <input class="with-gap" name="question${currentQuestion}" data-text="${answersQuestion[rndNumber]}" type="radio" />
            <span>${alphabet[i]}. ${answersQuestion[rndNumber]}</span>
          </label>
        </p>
      `
  }

  for (let i = 0; i < questions[selectedType].length; i++)
    htmlPagination += `<li class="${currentQuestion === i ? 'active teal c-mp' : 'disabled'}"><a>${i + 1}</a></li>`

  htmlPagination += '<li class="disabled"><a><i class="material-icons">chevron_right</i></a></li>'

  pagination.innerHTML = htmlPagination
  quiz.innerHTML = html
}

function start() {
  selectQuiz.style.display = 'none'
  btnStart.style.display = 'none'
  quiz.className = 'card-panel hoverable'
  btnNext.className = 'btn waves-effect waves-light'
  btnGiveUp.className = 'btn right waves-effect waves-light modal-trigger red'
  pagination.className = 'pagination center'

  const types = document.querySelectorAll('[name=selectQuiz]')

  types.forEach((item, index) => { if (item.checked) selectedType = index })

  render()
}

function stop() {
  selectQuiz.style.display = 'block'
  btnStart.style.display = 'block'
  quiz.className = 'hide'
  btnNext.className = 'hide'
  btnGiveUp.className = 'hide'
  btnFinish.className = 'hide'
  pagination.className = 'hide'

  points = 0
  currentQuestion = 0
  selectedType = -1
}

function next() {
  const currentAnswers = document.querySelectorAll(`[name=question${currentQuestion}]`)

  let sumWithoutResponse = 0

  currentAnswers.forEach(item => { if (!item.checked) sumWithoutResponse++ })

  if (sumWithoutResponse === currentAnswers.length)
    M.toast({
      html: 'Você deve selecionar uma resposta!',
      classes: 'red accent-4',
      displayLength: 2050
    })
  else {
    currentAnswers.forEach(item => { if (item.checked && item.getAttribute('data-text') === answers[selectedType][currentQuestion]) points += 1 })

    if (currentQuestion === answers[selectedType].length - 1) {
      currentAnswers.forEach(answer => { answer.disabled = true })
      btnNext.className = 'btn waves-effect waves-light scale-transition scale-out'
      btnGiveUp.className = 'hide'
      btnFinish.className = 'btn right waves-effect waves-light scale-transition green scale-in'
      winPoints.innerText = `${points} de ${answers[selectedType].length} e obteve um desempenho de ${points / answers[selectedType].length * 100}%`
      M.Modal.getInstance(document.querySelector('#modal2')).open()
    } else {
      currentQuestion += 1
      render()
    }
  }
}

btnStart.onclick = start
btnNext.onclick = next
btnFinish.onclick = stop