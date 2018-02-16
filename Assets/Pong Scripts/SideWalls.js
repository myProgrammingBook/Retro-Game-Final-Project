#pragma strict

function OnTriggerEnter2D (hitInfo : Collider2D) {
	if(hitInfo.name == "Ball")
	{
		var wallName = transform.name;
		GameManager.score (wallName);
		
		hitInfo.gameObject.SendMessage("ResetBall");
		GetComponent.<AudioSource>().pitch = Random.Range(0.8f,1.2f);
		GetComponent.<AudioSource>().Play();
	}
}