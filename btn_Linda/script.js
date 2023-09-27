const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button2 = document.querySelector(".temp");

button2.addEventListener("click", updateName2);

function updateName2(){
    const name2 = prompt("Enter a new name");
    button2.textContent = `Player 2: ${name2}`;
}

const paragraph = document.querySelector('p');

paragraph.addEventListener("click", changeText);

function changeText(){
    const text = ["Australia is wider than the moon.", "The Effiel Tower gets taller in the summer.", "Only four words in the English language end in dous: horrendous, tremendous, hazardous, and stupendous."];
    paragraph.textContent = text[Math.floor(Math.random() * 3)];
}
