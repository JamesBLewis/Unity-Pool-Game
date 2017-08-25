#pragma strict

private var startTime : float;
private var textTime : String;

private var guiTime: float;
//The gui-Time is the difference between the actual time and the start time.
private var minutes : int;
private var seconds : int;
//private var fraction : int;
//Create a reference for the textfield
private var textField : UI.Text;
var uitext: GameObject;
//First define two variables. One private and one public variable. Set the first variable to be a float.
//Use for textTime a string.
function Start() {
startTime = Time.time;
textField = uitext.GetComponent(UI.Text);
}
function Update () {
guiTime = Time.time - startTime;
//The gui-Time is the difference between the actual time and the start time.
minutes = guiTime / 60; //Divide the guiTime by sixty to get the minutes.
seconds = guiTime % 60;//Use the euclidean division for the seconds.
//fraction = (guiTime * 100) % 100;

 textTime = String.Format ("{0:00}:{1:00}", minutes, seconds);
//text.Time is the time that will be displayed.
textField.text = textTime;
}
