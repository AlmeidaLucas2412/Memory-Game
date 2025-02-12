const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheese',
    img: 'images/cheese.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  },
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheese',
    img: 'images/cheese.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  }
]


cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector(`#result`)
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.append(card)
  }
}

createBoard()

function checkMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]
  console.log(cards)
  console.log('check for a match!')

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute(`src`, `images/blank.png`)
    cards[optionTwoId].setAttribute(`src`, `images/blank.png`)
    alert('You have clicked the same image!')
  } else

  if (cardsChosen[0] == cardsChosen[1]) {
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  } else{
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
  }
  resultDisplay.textContent = cardsWon.length
  cardsChosen = []
  cardsChosenIds = []

  if(cardsWon.length == (cardArray.length/2)){
    resultDisplay.textContent = `Congratulations you found them all`
    setTimeout(() => window.location.reload(), 2000)
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
  }
}