let countHomeNum = 0
let countGuestNum = 0
let countHome = document.getElementById("count-h")
countHome.textContent = countHomeNum
let countGuest = document.getElementById("count-g")
countGuest.textContent = countGuestNum
function addH1() {
    countHomeNum +=1
    countHome.textContent = countHomeNum
}
function addG1() {
    countGuestNum +=1
    countGuest.textContent = countGuestNum
}
function addH2() {
    countHomeNum +=2
    countHome.textContent = countHomeNum
}
function addG2() {
    countGuestNum +=2
    countGuest.textContent = countGuestNum
}
function addH3() {
    countHomeNum +=3
    countHome.textContent = countHomeNum
}
function addG3() {
    countGuestNum +=3
    countGuest.textContent = countGuestNum
}
function cleanH() {
    countHomeNum = 0
    countHome.textContent = countHomeNum
}
function cleanG() {
    countGuestNum = 0
    countGuest.textContent = countGuestNum
}
