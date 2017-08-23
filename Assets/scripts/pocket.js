#pragma strict

function OnTriggerEnter2D(other : Collider2D)
{
		 Destroy(other.gameObject);
		 Debug.Log("destroyed "+other);
}
