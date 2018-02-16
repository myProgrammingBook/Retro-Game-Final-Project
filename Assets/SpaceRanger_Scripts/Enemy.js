#pragma strict
static var go_left : boolean = false;
var go_down : boolean = false;
static var enemy_speed : float = 0.5f;

private var timer : int = 10;

var explosions : GameObject[];
var explosive : AudioClip;
var enemyBullet : GameObject;
private var anime : Animator;
private var explode : GameObject;
var ExplosionAnime : GameObject;
var count : int = 0;
var hitCount : int = 2;
var BossHitCount : int = 20;
function Start()
{
	enemy_speed = 0.5f;

}
function Update () {

	if(go_left)
	{
		
		transform.position.x -= enemy_speed * Time.deltaTime; 
	}
	else
	{
		transform.position.x += enemy_speed * Time.deltaTime;
	}
	
	timer -= 1;
	
	if(this.gameObject.name == "Boss"){
		if(timer < 2)
		{
			var ranNum = Random.Range(0,4);
			var numChoosen = ranNum;
		
			if (numChoosen == 2)
			{
				var fireBullet = Instantiate (enemyBullet, transform.position, Quaternion.identity);
				fireBullet.GetComponent.<Rigidbody>().AddForce(-Vector3.up * 150);
			}
			timer = 20;
		}
	}
	else if (this.gameObject.name == "a4")
	{
		if(timer < 2)
		{
			ranNum = Random.Range(0,10);
			numChoosen = ranNum;
		
			if (numChoosen == 2)
			{
				fireBullet = Instantiate (enemyBullet, transform.position, Quaternion.identity);
				fireBullet.GetComponent.<Rigidbody>().AddForce(-Vector3.up * 150);
			}
			timer = 100;
		}
	}
	
	else
	{
		if(timer < 2)
		{
			ranNum = Random.Range(0,16);
			numChoosen = ranNum;
		
			if (numChoosen == 2)
			{
				fireBullet = Instantiate (enemyBullet, transform.position, Quaternion.identity);
				fireBullet.GetComponent.<Rigidbody>().AddForce(-Vector3.up * 150);
			}
			timer = 300;
		}
	}
	count = explosions.Length;
//	if(count > 2)
//	{
//		Destroy(GameObject.Find("ExplosionAnime(Clone)"));
//		
//	}
}

function OnTriggerEnter(col : Collider)
{
	if (col.gameObject.name == "Boarderleft")
	{
		go_left = false;
		MoveDown();
		
	
	}
	else if(col.gameObject.name == "Boarderright")
	{
		go_left = true;
		MoveDown();
	}
	else if((col.gameObject.name == "PlayerShip")|| (col.gameObject.name == "BoarderBottom"))
	{
		Destroy(col.gameObject);
		gameObject.Find("Main Camera").GetComponent(SpaceRangerScore).currentHealth -= 3;
	}
	
	if (col.gameObject.name == "Bullet(Clone)")
	{
		explode = Instantiate (ExplosionAnime, col.gameObject.transform.position, Quaternion.identity);
		anime = explode.GetComponent(Animator);
		//var anim = GameObject.Find("ExplosionAnime(Clone)").GetComponent.<Animation>();
		addToArray(explode);
		
		if(this.gameObject.name == "a4")
		{
				hitCount = hitCount - 1;
				if(hitCount== 0)
				{
					Destroy(col.gameObject);
					Destroy(gameObject);
					hitCount=2;
					gameObject.Find("Main Camera").GetComponent(SpaceRangerScore).currentEnemies -=1;
				}
				gameObject.Find("Main Camera").GetComponent(SpaceRangerScore).currentScore +=400;
				Destroy(col.gameObject);

		}
		
		else if(this.gameObject.name == "Boss")
		{
				BossHitCount = BossHitCount - 1;
				if(BossHitCount== 0)
				{
					Destroy(col.gameObject);
					Destroy(gameObject);
					hitCount=2;
					gameObject.Find("Main Camera").GetComponent(SpaceRangerScore).currentEnemies -=1;
				}
				gameObject.Find("Main Camera").GetComponent(SpaceRangerScore).currentScore +=400;
				Destroy(col.gameObject);

		}
	}
	
	
}

function MoveDown()
{
	var enemies = GameObject.FindGameObjectsWithTag("Enemy");
	
	for(var entity in enemies)
	{
		entity.transform.position.y -= 0.1;
	}
}


function addToArray ( obj : GameObject )
     
 {
 
    Destroy (obj, 1.0);
 
 }