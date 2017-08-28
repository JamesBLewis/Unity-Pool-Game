#pragma strict
var gamecom: GameObject;

function OnTriggerEnter2D(other : Collider2D)
{
		if (other.gameObject.tag == "keep") {
		 Debug.Log("pocketed "+other.gameObject.name+" what a wanker!");
		 gamecom.GetComponent(gameOverview).EndTurn(other.gameObject.name);
		} else {
		 gamecom.GetComponent(gameOverview).currentPlayer.Add(parseInt(other.gameObject.name));
		 Destroy(other.gameObject);
		 Debug.Log("destroyed "+other);
	 }
}
