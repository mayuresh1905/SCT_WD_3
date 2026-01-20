let currentPlayer="X";
let gameActive=true;

let board=["","","","","","","","",""];

let winConditions=[
	[0,1,2],[3,4,5],[6,7,8],
	[0,3,6],[1,4,7],[2,5,8],
	[0,4,8],[2,4,6]
];

function play(index){
	
	if (board[index] !== "" || !gameActive){
		return;
	}
	 board[index]=currentPlayer;
	 document.getElementsByTagName("button")[index].innerText=currentPlayer;
	 
	 checkWinner();
	 currentPlayer=currentPlayer==="X"?"O":"X";
}

function checkWinner(){
	for(let condition of winConditions){
		let a=condition[0];
		let b=condition[1];
		let c=condition[2];
		
		if(board[a]&&board[a]===board[b]&&board[a]===board[c]){
			document.getElementById("message").innerText=currentPlayer +" Win!";
			gameActive=false;
			return;
		}
	}
	if (!board.includes("")) {
        document.getElementById("message").innerText = " Draw!";
        gameActive = false;
    }
}

function resetGame(){
	board = ["", "", "", "", "", "", "", "", ""];
	gameActive = true;
    currentPlayer = "X";
    document.getElementById("message").innerText = "";

    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < 9; i++) {
        buttons[i].innerText = "";
    }
}