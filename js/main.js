let autherName = [
  "-- Oscar Wilde",
  "-- Frank Zappa",
  "-- Marcus Tullius Cicero",
  " -- Mahatma Gandhi",
  "-- Friedrich Nietzsche",
];
let qoute = [
  "“Be yourself; everyone else is already taken.”",
  "“So many books, so little time.”",
  "“A room without books is like a body without a soul.”",
  "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
  "“Without music, life would be a mistake.”",
];
var previousNumber;
function display() {
  var randomNumber = Math.floor(Math.random() * autherName.length);
  if (randomNumber === previousNumber) {
    display();
    return;
  }
  previousNumber = randomNumber;

  document.getElementById("quote").innerHTML = qoute[randomNumber];
  document.getElementById("auther").innerHTML = autherName[randomNumber];
}
