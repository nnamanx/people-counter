let cnt = 0;
let counter = document.getElementById("counter");
let saveEl = document.getElementById("save-el");

function increment() {
    cnt += 1;
    counter.textContent = cnt;
}

function save() {
    let cntStr = cnt + " - ";
    saveEl.textContent += cntStr;
    counter.textContent = 0;
    cnt = 0;
}