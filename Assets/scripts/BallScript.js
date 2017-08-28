
#pragma strict
var gamecom: GameObject;
var hascollided: boolean;
function OnCollisionEnter2D(coll: Collision2D) {
    if ((coll.gameObject.tag == "strip" || coll.gameObject.tag == "solid") && !hascollided) {
        gamecom.GetComponent(gameOverview).firstHit(parseInt(coll.gameObject.name));
        hascollided = true;
    }
}
