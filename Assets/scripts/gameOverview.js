#pragma strict
var playerid: int = 1;
var menu_open: boolean = false;
var cue: GameObject;
var menu: GameObject;
public var ballType: String;
function Start () {

}

function Update () {
	if (ballType) {
		//Debug.Log(ballType);

	}

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

function OnTurnStart (ballstate) {
	Debug.Log("called OnTurnStart with "+ballstate);
}

function OnTurnEnd () {

}
