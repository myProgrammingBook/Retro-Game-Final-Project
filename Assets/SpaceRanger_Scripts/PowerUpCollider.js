#pragma strict

var Playership : GameObject;

function Start () {
	Playership = GameObject.FindGameObjectWithTag ("Player");
}



function OnTriggerEnter (col : Collider)
{
	if(gameObject.name == "PowerUp1(Clone)")
	{
		if (col.gameObject.tag == "Player")
		{
			Debug.Log("hit player");
			Playership.gameObject.SendMessage ("AssignWingman");
			Destroy(this.gameObject);
		}
	
		else if (col.gameObject.name == "BoarderBottom")
		{
			
			Destroy(this.gameObject);
		}
	}
		
}