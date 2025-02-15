//your JS code here. If required.
const player1 = document.querySelector("#payer-1");
const player2 = document.querySelector("#player-2");
const startButton = document.querySelector("#submit");
const starter = document.querySelector(".starter");
const message = document.querySelector(".message");
const grid = document.querySelector(".grid-container");
let marker = ["X","O"];
let isTurn = true;
startButton.addEventListener("click",(e)=>{
	const p1 = player1.value;
	const p2 = player2.value;
	if(!(p1 && p2))window.alert("Please enter player name!");
	else{
		starter.style.display = "none";
		message.innerHTML = `${p1}, you're up`;
		grid.style.display = "grid";
	}
});
grid.addEventListener("click",(e)=>{
	if(e.target.classList.contains("grid-item")&& !e.target.textContent)
	e.target.textContent = isTurn?marker[0]:marker[1];
	// e.target.style.backgroundColor = "lightgreen";
	if(checkWinner()){
		message.textContent = `${isTurn?player1.value:player2.value} congratulations you won!`;
		grid.style.pointerEvents = "none";
	}
	else{
	isTurn = !isTurn;
	message.textContent = isTurn?`${player1.value}, you're up`:`${player2.value}, you're up`;
	}
});
function checkWinner(){
	const board = document.querySelectorAll(".grid-item");
	const winning = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	];
	for(let win of winning){
		let [a,b,c] = win;
		if(board[a].textContent && board[a].textContent===board[b].textContent && board[a].textContent===board[c].textContent){
			board[a].style.backgroundColor = "purple";
			board[b].style.backgroundColor = "purple";
			board[c].style.backgroundColor = "purple";
			return true;
		}
	} 
	return false;
}