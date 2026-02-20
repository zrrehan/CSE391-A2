const fortune = [
  "Tonight, you will follow a light that saves you once… and abandons you when you need it most.",
  "A house you have never seen will feel strangely familiar, and something inside will recognize you first.",
  "You will survive the first encounter — not because you are strong, but because you are being watched.",
  "Someone you trust will call your name from the dark, but answering will change you forever.",
  "You will discover that escape was never the goal; you were meant to endure.",
  "Your greatest fear will not be the monster chasing you, but realizing it knows your memories.",
  "A weapon will find your hands at the exact moment hope almost leaves you.",
  "The truth will appear written before you, yet understanding it will cost you safety.",
  "You will walk out alive, but part of you will remain where the nightmare began.",
  "When the lights finally return, you will wish the darkness had kept its secrets."
];


document.querySelector("#fortune-box").innerHTML = `<p>${fortune[Math.floor(Math.random() * fortune.length)]}</p>`


const fortuneBox = document.querySelector("#fortune-box");
document.querySelector(".btn-red").addEventListener("click", ()=> {
    fortuneBox.classList = "red-theme";
})

document.querySelector(".btn-blue").addEventListener("click", ()=> {
    fortuneBox.classList = "blue-theme";
})

document.querySelector(".btn-yellow").addEventListener("click", ()=> {
    fortuneBox.classList = "yellow-theme";
})

document.querySelector(".btn-green").addEventListener("click", ()=> {
    fortuneBox.classList = "green-theme";
})