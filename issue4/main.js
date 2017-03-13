//assign the sentece string to a variable//
var testSentence = "The brown fox is quick."
//place the variable in an array on the page//
for (var i =0; i < testSentence.length; i++) {
var $letter = document.createElement('span')
$letter.textContent = testSentence[i]
document.body.appendChild($letter)
}
//style each character, then reference the css file for formatting//
var $firstletter=document.querySelector('span')
$firstletter.classList.add('current')
//Take user input with eventlisteners/
document.addEventListener('keypress', function(event) {
  console.log(event.key)
  var $currentKey = document.querySelector('.current')
  var $currentCharacter = $currentKey.textContent
  if (event.key === $currentCharacter) {
    $currentKey.classList.remove('current','wrong')
    $currentKey.nextSibling.classList.add('current')
    } else {
      $currentKey.classList.add('wrong')
  }
})
document.addEventListener('counter', function(???) {
  var numberWrong = 0
  for (var i = 0; i < ???; i++) {
    if ()
    }
    return 'Number Incorrect' + numberWrong
  })
