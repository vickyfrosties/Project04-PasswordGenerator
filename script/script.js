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

const GENERATE_BTN = document.getElementById("randomize");
const RESULT = document.getElementById("result");

GENERATE_BTN.addEventListener("click", () => {
  let randomizedPwd = "";
  let pwdLength = 15;

  for (let i = 0; i < pwdLength; i++) {
    const RANDOMIZED_PWD =
      MY_CHARACTERS[Math.floor(Math.random() * MY_CHARACTERS.length)];
    RESULT.textContent = randomizedPwd += RANDOMIZED_PWD;
  }

  let clipboard = new ClipboardJS(".btn");

  clipboard.on("success", function (e) {
    console.info("Action :", e.action);
    console.info("Text :", e.text);
    console.info("Trigger :", e.trigger);

    e.clearSelection();
  });

  clipboard.on("error", function (e) {
    console.error("Action :", e.action);
    console.error("trigger :", e.trigger);
  });
});
