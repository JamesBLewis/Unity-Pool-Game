
#pragma strict
var gamecom: GameObject;

function OnCollisionEnter2D(coll: Collision2D) {
    if (coll.gameObject.tag == "strip" || coll.gameObject.tag == "solid" ) {
      //  gamecom.GetComponent(script).ballType = coll.gameObject.tag;

    }
}
