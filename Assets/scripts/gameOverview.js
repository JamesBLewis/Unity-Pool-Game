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
		Debug.Log(ballType);
	}
	if (Input.GetKeyDown ("escape")) {
		if (menu_open) {
			menu_open = false;
			menu.SetActive(false);
		} else {
			menu_open = true;
			menu.SetActive(true);

		}
	}
}

function OnTurnStart () {

}

function OnTurnEnd () {

}
