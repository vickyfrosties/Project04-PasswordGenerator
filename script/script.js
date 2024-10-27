const MY_CHARACTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "'",
  '"',
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
  "\\",
  "|",
  "`",
  "~",
];

const COPY_BTN = document.getElementById("copyBTN");
const GENERATE_BTN = document.getElementById("randomize");
const UP_CASE = document.getElementById("upcase");
const LO_CASE = document.getElementById("locase");
const SYMBOLS = document.getElementById("symbols");
const NUMBERS = document.getElementById("numbers");

GENERATE_BTN.addEventListener("click", () => {
  const RESULT = document.getElementById("result");
  let randomizedPwd = "";
  let pwdLength = 15;

  if(UP_CASE.checked && LO_CASE.checked && SYMBOLS.checked && NUMBERS.checked) {
    for (let i = 0; i < pwdLength; i++) {
      const RANDOMIZED_PWD = MY_CHARACTERS[Math.floor(Math.random() * MY_CHARACTERS.length)];
      RESULT.textContent = randomizedPwd += RANDOMIZED_PWD;
      COPY_BTN.setAttribute("data-clipboard-text", randomizedPwd);
    }
  }

  else if (!UP_CASE.checked && LO_CASE.checked && SYMBOLS.checked && NUMBERS.checked) {
    console.log("There's no CAPITAL CASE here")
  }

  let clipboard = new ClipboardJS(".btn");

  clipboard.on("success", function (e) {
    RESULT.innerText = "Password copied to clipboard !";

    setTimeout(() => {
      RESULT.innerText = ""
    }, 4000);
  });
});
