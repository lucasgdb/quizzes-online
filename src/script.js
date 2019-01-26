const btnNext = document.querySelector('#btnNext'),
  btnStart = document.querySelector('#btnStart'),
  btnGiveUp = document.querySelector('#giveUp'),
  btnShowAnswers = document.querySelector('#showAnswers'),
  btnFinish = document.querySelector('#finish'),
  selectQuiz = document.querySelector('#selectQuiz'),
  quiz = document.querySelector('#quiz'),
  pagination = document.querySelector('#pagination'),
  winPoints = document.querySelector('#points'),
  star = document.querySelector('#star'),
  showAnswers = document.querySelector('#answers')

let points = 0,
  currentQuestion = 0,
  matches = [],
  selectedType = -1

function render() {
  let html = `<h6>${currentQuestion + 1}° ${questions[selectedType][currentQuestion]}</h6>`

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
            <span>${alphabet[i]}. ${answersQuestion[rndNumber]}</span>
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
    htmlPagination += `<li class="${currentQuestion === i ? 'active teal c-df no-border waves-effect waves-light' : `${matches[i] === undefined ? 'disabled' : matches[i] === 1 ? `active green c-df no-border ${i === questions[selectedType].length - 1 ? '' : 'brw'}` : `active red c-df no-border ${i === questions[selectedType].length - 1 ? '' : 'brw'}`}`}"><a>${i + 1}</a></li>`

  htmlPagination += '<li class="disabled"><a><i class="material-icons">chevron_right</i></a></li>'

  pagination.innerHTML = htmlPagination
}

function start() {
  selectQuiz.style.display = 'none'
  btnStart.style.display = 'none'
  quiz.className = 'card-panel'
  btnNext.className = 'btn waves-effect waves-light scale-transition scale-in'
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
  btnNext.className = 'btn waves-effect waves-light scale-transition scale-out'
  btnGiveUp.className = 'hide'
  btnShowAnswers.className = 'hide'
  btnFinish.className = 'hide'
  pagination.className = 'hide'

  points = 0
  currentQuestion = 0
  selectedType = -1
  matches = []
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
    currentAnswers.forEach(item => {
      if (item.checked && item.getAttribute('data-text') === answers[selectedType][currentQuestion]) {
        matches.push(1)
        points += 1
      }
    })

    if (matches[currentQuestion] === undefined) matches.push(0)

    currentQuestion += 1

    if (currentQuestion === answers[selectedType].length) {
      currentAnswers.forEach(answer => { answer.disabled = true })
      btnNext.className = 'btn waves-effect waves-light scale-transition scale-out'
      btnGiveUp.className = 'hide'
      btnShowAnswers.className = 'btn waves-effect waves-light right'
      btnShowAnswers.onclick = () => {
        let html = '<h4><i class="material-icons" style="top:2px">question_answer</i> Respostas</h4>'
        for (let i = 0; i < answers[selectedType].length; i++)
          html += `<p>${i + 1}. ${answers[selectedType][i]} <i class="material-icons icons ${matches[i] === 0 ? 'red-text' : 'green-text'}">${matches[i] === 0 ? 'clear' : 'done'}</i></p>`

        showAnswers.innerHTML = html
        M.Modal.getInstance(document.querySelector('#modal3')).open()
      }
      btnFinish.className = 'btn right waves-effect waves-light green'
      const pointsPercentage = points / answers[selectedType].length * 100
      winPoints.innerHTML = `${points} de ${answers[selectedType].length} e obteve um desempenho de <span class="${pointsPercentage < 50 ? 'red-text' : 'green-text'}">${pointsPercentage.toFixed(1)}%</span>`
      star.className = `material-icons ${pointsPercentage < 50 ? 'red-text' : 'green-text'}`
      M.Modal.getInstance(document.querySelector('#modal2')).open()
      createPagination()
    } else render()
  }
}

btnStart.onclick = start
btnNext.onclick = next
btnFinish.onclick = stop