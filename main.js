let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let headcount = document.getElementById("headcount")

headcount.addEventListener("submit", (evt) => {
  evt.preventDefault()
})

let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}

function save() {
  let countStr = " - " + count
  saveEl.textContent += countStr
  count = 0
  countEl.textContent = count
}

function clean() {
  count = 0
  countEl.textContent = count
  saveEl.textContent = ""
}