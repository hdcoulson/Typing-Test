window.onload = function() {
var testSentence = document.createElement('h2');
var testText  = document.createTextNode('The brown fox is quick.');
testSentence.appendChild(testText);
var position = document.getElementsByClassName('text-center')[0];
position.appendChild(testSentence)
}
