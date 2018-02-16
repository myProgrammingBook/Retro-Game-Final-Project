#pragma strict

var currentScore : int = 0;
var currentEnemies : int = 32;
var currentHealth : int = 3;
var initalEnemies : int =0;
var lives : UnityEngine.UI.Text;
var score : UnityEngine.UI.Text;

var gametimetxt : UnityEngine.UI.Text;
var gametime : float = 10.0f;

var EnemySpeed : float = 0.0f;
var lowTimerAudio : AudioClip;

function Update()
{
	gametime -= Time.deltaTime;
	
	gametimetxt.text = "00:"+String.Format("{0:00}", gametime);
	
	if(gametime >=10)
	{
		gametimetxt.color = Color.green;
	}
	else
	{
		gametimetxt.color =Color.red;
	}
	
	if(gametime <0)
	{
		gametimetxt.text ="00:00";;
		gametime = -1;
		Application.LoadLevel(5);
		
	}

	score.text = "SCORE = " + currentScore.ToString();
	lives.text = currentHealth.ToString();
	var lifeNum = currentHealth+1;
	Destroy(gameObject.Find("Image"+lifeNum));	
	
	if(currentEnemies == initalEnemies/2)
	{
		Enemy.enemy_speed = EnemySpeed + 0.5f;
	}
	else if(currentEnemies == initalEnemies/4)
	{
		Enemy.enemy_speed = EnemySpeed + 1.0f;
	}
	if(currentEnemies == 0)
	{
		Debug.Log("You Win");
		currentEnemies = -1;
		
		if(Application.loadedLevelName == "Space Ranger")
		{
			Application.LoadLevel(11);
		}
		else if(Application.loadedLevelName == "Space Ranger level 2")
		{
			Application.LoadLevel(13);
		}
		if(Application.loadedLevelName == "Space Ranger level 3")
		{
			Application.LoadLevel(4);
		}
	}
	
	if((currentHealth <= -1) || (currentHealth == 0))
	{
		Debug.Log("You Lose");
		Destroy(gameObject.Find("PlayerShip"));
		Application.LoadLevel(5);
		
	}
	
}