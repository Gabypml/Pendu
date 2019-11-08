let bonjour = ["B", "O", "N", "J", "O", "U", "R"];
let syntax = ["-", "-", "-", "-", "-", "-", "-"];
let rien = [];

function guessLetter() {
  let devine = prompt("Donnez une lettre :D").toUpperCase();
  let testi = /[A-Z]/.test(devine);

  if (testi === true) {
    for (let i = 0; i <= bonjour.length; i++) {
      if (bonjour[i] === devine) {
        syntax[i] = devine;
        console.log(devine);
      } else {
        console.log(syntax);
      }
    }
  }

  if (!syntax.includes("-")) {
    return alert("Tu as gagné");
  }

  guessLetter();
}

guessLetter();