let counterBtnp = document.querySelector("#counterBtnp");
let counterBtnpm = document.querySelector("#counterBtnm");
let counterText = document.querySelector("#counterText");
let counter = 0;
counterBtnp.addEventListener("click", pFn);
function pFn() {
	counter++;
	counterText.textContent = `Counter: ${counter}`;
}
counterBtnm.addEventListener("click", mFn);
function mFn() {
	counter--;
	counterText.textContent = `Counter: ${counter}`;
}
//youyou
let a = 13;
