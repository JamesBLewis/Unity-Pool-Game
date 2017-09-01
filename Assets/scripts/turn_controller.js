#pragma strict
public var thrust : float;
var p: Vector3 = new Vector3();
var green: Vector2;
var rb: Rigidbody2D;
var multiplier: float;
var storedpos = p;
var ball: GameObject;
var cue: GameObject;
var HasClicked: boolean = false;
var ballsunk : int;
var lastballsunk : int;
// Angular speed in radians per sec.
var speed: float;
private var turn : int;
function Start () {
	 turn = GetComponent(gameOverview).turn;
	if (turn%2==1) {
		lastballsunk = GetComponent(gameOverview).player1.Count;
	} else if (turn%2==0) {
		lastballsunk = GetComponent(gameOverview).player2.Count;
	} else {
		return "error";
		Debug.Log("error current player not found");
	}
	cue.SetActive(true);
}

// Convert the 2D position of the mouse into a
// 3D position.  Display these on the game window.
function OnGUI() {

	var c: Camera = Camera.main;
	var e: Event = Event.current;
	var mousePos: Vector2 = new Vector2();
	// Note that the y position from Event is inverted.
	mousePos.x = e.mousePosition.x;
	mousePos.y = c.pixelHeight - e.mousePosition.y;
	p = c.ScreenToWorldPoint(new Vector3(mousePos.x, mousePos.y, c.nearClipPlane));
 // mouse position debug readout
	//GUILayout.BeginArea(new Rect(20, 20, 250, 120));
	//GUILayout.Label("Screen pixels: " + c.pixelWidth + ":" + c.pixelHeight);
	//GUILayout.Label("Mouse position: " + mousePos);
	//GUILayout.Label("World position: " + p.ToString("F3"));
	//GUILayout.EndArea();
}

function Update () {
	//if ball has stopped and the cue is inactive(not first turn)
	if (rb.velocity.magnitude <= 0.1 && cue.activeSelf == false) {
		if (turn%2==1) {
			lastballsunk = GetComponent(gameOverview).player1.Count - lastballsunk;
		} else if (turn%2==0) {
			lastballsunk = GetComponent(gameOverview).player2.Count - lastballsunk;
		} else {
			return "error";
			Debug.Log("error current player not found");
		}

		if (lastballsunk == 0) {
			cue.SetActive(false);
			GetComponent(gameOverview).EndTurn("noneSunk");
		}
	cue.SetActive(true);
	}

	if(HasClicked !== true) {
		var dir = p - rb.transform.position;
        // The step size is equal to speed times frame time.
    var step = speed * Time.deltaTime;
		var angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
		ball.transform.rotation = Quaternion.AngleAxis(angle, Vector3.forward);

} else {
	var length = Vector2.Dot((p - rb.transform.position).normalized, p-storedpos);
	cue.transform.localPosition.x = -8.53 - Mathf.Abs(length);
	//cue.transform.position = Vector2( , 1);
	//Debug.Log(cue.transform.position.x);
}
	if(Input.GetMouseButtonDown(0)) {
		//rb.velocity = Vector2(0,thrust);
		if (rb.IsSleeping) {
		storedpos = p;
		HasClicked = true;
		}
	}
	if(Input.GetMouseButtonUp(0)) {
		if (HasClicked) {
		length = Mathf.Abs(Vector2.Dot((p - rb.transform.position).normalized, p-storedpos));
		//Debug.Log(length);
		rb.velocity = (storedpos - rb.transform.position).normalized * (length * multiplier);
		cue.transform.localPosition.x = -8.53;
		cue.SetActive(false);
		HasClicked = false;
		}
	}
}
