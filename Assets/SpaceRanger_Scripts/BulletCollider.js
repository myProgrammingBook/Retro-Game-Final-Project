#pragma strict

var powerUp1 : GameObject;

function Start()
{
	
}



function OnTriggerEnter (col : Collider)
{
	if(gameObject.name == "Bullet(Clone)")
	{
		if ((col.gameObject.tag == "Enemy")&&(col.gameObject.name != "Boss"))
		{
			
			gameObject.Find("Main Camera").GetComponent(SpaceRangerScore).currentScore +=250;
			gameObject.Find("Main Camera").GetComponent(SpaceRangerScore).currentEnemies -=1;
			
			Destroy(gameObject);
			Destroy(col.gameObject);
			
			//Power up random code
			var ranNum = Random.Range(0,25);
			var numChoosen = ranNum;
		
			if (numChoosen == 5)
			{
				var power1 = Instantiate (powerUp1, col.transform.position, Quaternion.identity);
				power1.GetComponent.<Rigidbody>().AddForce(-Vector3.up * 100);
				
				
			}
				
			
			
		}
		
		

		else if (col.gameObject.name != "PlayerShip")
		{
			Destroy(this.gameObject);
		}
	}
	
	else if(gameObject.name == "EnemyBullet(Clone)")
	{
		if (col.gameObject.name == "PlayerShip")
		{
			gameObject.Find("Main Camera").GetComponent(SpaceRangerScore).currentHealth -=1;
			Destroy(gameObject);
		}
		
		else if (col.gameObject.name == "BoarderBottom")
		{
			Destroy(gameObject);
		}
	}
}