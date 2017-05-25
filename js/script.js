' use strict '

var display = document.getElementById('display')

function arrangeArray () {
  display.innerHTML = ''
  const arrayOne = ['a', 'b', 'c']
  const arrayTwo = ['1', '2', '3']
  for (let i = 0; i < arrayOne.length; i++) {
    display.innerHTML += arrayOne[i]
    display.innerHTML += '<br/>' + arrayTwo[i] + '<br/>'
  }
}

function format (number) {
  let value = 0
  if (number >= 10) value = number / 10
  else if (number >= 100) value = number / 100
  else if (number >= 1000) value = number / 1000
  else return number
  return Math.round(value)
}

function compare (a, b) {
  const aFormatted = format(a)
  const bFormatted = format(b)
  if (aFormatted > bFormatted) return -1
  if (aFormatted < bFormatted) return 1
  return 0
}

function highestNumber () {
  const numbers = [50, 2, 1, 9]
  numbers.sort(compare)
  display.innerHTML += numbers.join('')
}
