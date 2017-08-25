#pragma strict
var gamecom: GameObject;

function OnTriggerEnter2D(other : Collider2D)
{
		if (other.gameObject.tag == "keep") {
		 Debug.Log("pocketed "+other+" what a wanker!");
		 gamecom.GetComponent(gameOverview).OnTurnStart("destroyed_ball");
		} else {
		 Destroy(other.gameObject);
		 Debug.Log("destroyed "+other);
	 }
}
