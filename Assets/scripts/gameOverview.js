#pragma strict
import System.Collections.Generic;
var player1 : List.<int> = new List.<int>();
var player2 : List.<int> = new List.<int>();
var menu_open: boolean = false;
var turn : int = 1;
var cue: GameObject;
var menu: GameObject;
var whiteball: GameObject;
var savedState: String;
var PoneText: GameObject;
var PtwoText: GameObject;
var balltype : String = "error";

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
	if (turn != 1 && turn != 2) {
		if (turn%2==0) {
			if (player2[0] <= 7) {
				if (id >= 9) {
				EndTurn("wrong");
				}
			} else if (player2[0] >= 9) {
				if (id <= 7) {
				EndTurn("wrong");
				}
			}
		} else if (turn%2==1) {
			if (player1[0] <= 7) {
				if (id >= 9) {
				EndTurn("wrong");
				}
			} else if (player1[0] >= 9) {
				if (id <= 7) {
				EndTurn("wrong");
				}
			}
		}
	}
}

function StartTurn (ballstate) {
	//reset hasCollided on script
	whiteball.GetComponent(BallScript).hascollided = false;
	// becuase single player
	GetComponent(turn_controller).enabled = true;
	Debug.Log("now turn: "+turn);
}

function EndTurn (ballstate) {
	GetComponent(turn_controller).enabled = false;
	if (turn%2==0) {
		if (player2[0] <= 7 && ballstate != "noneSunk") {
			balltype = "Solids";
		} else if (ballstate != "noneSunk"){
			balltype = "Strips";
		}
		Debug.Log("last turn was player 2");
		PtwoText.GetComponent(UI.Text).text = "Player 2: "+balltype;
	} else if (turn%2==1) {
		if (player1[0] <= 7 && ballstate != "noneSunk") {
			balltype = "Solids";
		} else if (ballstate != "noneSunk"){
			balltype = "Strips";
		}
		Debug.Log("last turn was player 1");
		PoneText.GetComponent(UI.Text).text = "Player 1: "+balltype;
	}
	turn++;
	StartTurn(ballstate);
}

function addPocketed(ball : int){
	if (turn%2==1) {
		player1.Add(ball);
	} else if (turn%2==0) {
		player2.Add(ball);
	} else {
		Debug.Log("error current player not found");
	}
}
