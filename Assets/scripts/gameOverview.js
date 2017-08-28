#pragma strict
import System.Collections.Generic;
var currentPlayer : List.<int> = new List.<int>();
var otherPlayer : List.<int> = new List.<int>();
var menu_open: boolean = false;
var turn : int = 1;
var cue: GameObject;
var menu: GameObject;
var whiteball: GameObject;
var savedState: String;
var PoneText: GameObject;
var PtwoText: GameObject;
var balltype : String;
function Start () {
var firsthit: boolean = false;
}

function Update () {

		//menu stuff opend by esc key

	if (Input.GetKeyDown ("escape")) {
		menuToggle();
	}
}

function menuToggle() {
	if (menu_open) {
		menu_open = false;
		menu.SetActive(false);
	} else {
		menu_open = true;
		menu.SetActive(true);
	}
}

function firstHit (id : int) {
	if (turn == 1) {
		Debug.Log("hit but was first turn");
	} else {
		if (currentPlayer[0] <= 7) {
			if (id >= 9) {
				Debug.Log("wrong ball type");
				EndTurn("wrong");
		} else if (currentPlayer[0] >= 9) {
			if (id <= 7) {
				Debug.Log("wrong ball type");
				EndTurn("wrong");
				}
			}
		}
	}
}

function StartTurn (ballstate) {
	//reset hasCollided on script
	whiteball.GetComponent(BallScript).hascollided = false;
	GetComponent(turn_controller).enabled = true;
	Debug.Log("now turn: "+turn);
}

function EndTurn (ballstate) {
	GetComponent(turn_controller).enabled = false;
	turn++;
	Debug.Log(currentPlayer[0]);
	if (currentPlayer[0]) {
	if (currentPlayer[0] <= 7 && ballstate != "noneSunk") {
		balltype = "Solids";
	} else {
		balltype = "Strips";
	}
}
	var temp = currentPlayer;
	currentPlayer = otherPlayer;
	otherPlayer = temp;
	savedState = ballstate;
	StartTurn(ballstate);

	if (turn%2==0) {
		Debug.Log("turn is even player must be player 2");
		PtwoText.GetComponent(UI.Text).text = "Player 1: "+balltype;
	} else if (turn%2==1){
		Debug.Log("turn is odd player must be player 1");
		PoneText.GetComponent(UI.Text).text = "Player 2: "+balltype;
	}
}
