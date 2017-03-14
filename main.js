var testSentence = "The brown fox is quick."
var numberWrong = 0
var correctlyTyped = 1
for (var i =0; i < testSentence.length; i++) {
var $letter = document.createElement('span')
$letter.textContent = testSentence[i]
document.body.appendChild($letter)
}
var $firstletter=document.querySelector('span')
$firstletter.classList.add('current')
document.addEventListener('keypress', function(event) {
  console.log(event.key)
  if (correctlyTyped === testSentence.length){
    showScore()
  }
  else {
      var $currentKey = document.querySelector('.current')
      var $currentCharacter = $currentKey.textContent
        if (event.key === $currentCharacter) {
          correctlyTyped++
          $currentKey.classList.remove('current','wrong')
          $currentKey.nextSibling.classList.add('current')
        } else {
          $currentKey.classList.add('wrong')
          numberWrong = numberWrong+1
        }
      }
    })
 function showScore()
   {
     var $score = document.createElement('div')
     $score.textContent = 'Number of errors ' + ' ' + numberWrong
     document.body.appendChild($score)
   }
