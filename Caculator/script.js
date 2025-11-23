// ====== SELECT ELEMENTS ======
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".btn:not(#clear):not(#equals)");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const historyList = document.getElementById("historyList");
const copyBtn = document.getElementById("copyBtn");
const themeToggle = document.getElementById("themeToggle");
const soundToggle = document.getElementById("soundToggle");


let soundEnabled = true;
const clickSound = new Audio();
clickSound.src = "https://www.fesliyanstudios.com/play-mp3/387"; "https://www.fesliyanstudios.com/play-mp3/387"; // click sound


// ====== PLAY CLICK SOUND ======
function playClick() {
if (soundEnabled) clickSound.play();
}


// ====== BUTTON CLICK HANDLER ======
buttons.forEach(btn => {
btn.addEventListener("click", () => {
playClick();
result.value += btn.textContent;
});
});


// ====== CLEAR BUTTON ======
clear.addEventListener("click", () => {
playClick();
result.value = "";
});


// ====== EQUAL BUTTON ======
equals.addEventListener("click", () => {
playClick();
if (result.value.trim() === "") return;
try {
const output = eval(result.value);


// Add to history
const li = document.createElement("li");
li.textContent = `${result.value} = ${output}`;
historyList.appendChild(li);


result.value = output;
} catch {
result.value = "Error";
}
});


// ====== COPY BUTTON ======
copyBtn.addEventListener("click", () => {
playClick();
navigator.clipboard.writeText(result.value);
copyBtn.textContent = "Copied!";
setTimeout(() => copyBtn.textContent = "Copy", 1200);
});


// ====== THEME TOGGLE ======
themeToggle.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});


// ====== SOUND TOGGLE ======
soundToggle.addEventListener("click", () => {
soundEnabled = !soundEnabled;
soundToggle.textContent = soundEnabled ? "🔊" : "🔇";
});