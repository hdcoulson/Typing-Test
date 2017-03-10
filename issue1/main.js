window.onload = function() {
  var sentence = document.createElement("p");
  var sentence_text = document.createTextNode("The brown fox is quick");
  sentence.appendChild(sentence_text);
  document.body.appendChild(sentence);
  }
