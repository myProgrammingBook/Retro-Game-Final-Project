#pragma strict

static var playerScore01 : int = 0;
static var playerScore02 : int = 0;

var player1 : GameObject;
var player2 : GameObject;
var theSkin : GUISkin;
var countDownText : UnityEngine.UI.Text;
var countDown :int;
var theBall : Transform;

var scoreLimitGame : int = 0;

var p1Score : UnityEngine.UI.Text;
var p2Score : UnityEngine.UI.Text;

function Start () {
	theBall = GameObject.FindGameObjectWithTag ("Ball").transform;
	p1Score.text = "SCORE = " + playerScore01.ToString();
	p2Score.text = "SCORE = " + playerScore02.ToString();
}
function Update()
{
	p1Score.text = "SCORE = " + playerScore01.ToString();
	p2Score.text = "SCORE = " + playerScore02.ToString();
	
	if((playerScore01 == scoreLimitGame)&&(scoreLimitGame!=0))
	{
		Debug.Log("Player 01 wins");
		Application.LoadLevel(9);
	}
	else if((playerScore02 == scoreLimitGame)&&(scoreLimitGame!=0))
	{
		Debug.Log("Player 02 wins");
		Application.LoadLevel(10);
	}
}
//increment the score of each player when the message is receive from the wall collisions
static function score (wallName : String) {
	if(wallName == "topWall")
	{
		playerScore01 += 1;
	}
	else if(wallName == "bottomWall"){
		playerScore02 += 1;
	}
	
//	Debug.Log ("PlayerScore 1 is " + playerScore01);
//	Debug.Log ("PlayerScore 2 is " + playerScore02);
}


function BtnReset()
{
	

	player1.gameObject.GetComponent.<Rigidbody2D>().velocity.x = 0;
	player1.gameObject.transform.position.x = 0;
	
	player2.gameObject.GetComponent.<Rigidbody2D>().velocity.x = 0;
	player2.gameObject.transform.position.x = 0;
	playerScore01 = 0;
	playerScore02 = 0;
	
	
	
	theBall.gameObject.SendMessage ("ResetBall");
}


function BtnExit()
{
	Application.LoadLevel(0);	
}

function GameStart()
{	
//	var Ball = GameObject.Find("Ball");
//	var BallScript = Ball.gameObject.GetComponent("BallControl");

	for(countDown = 3; countDown>0;countDown--){
		//countDownText.text = countDown.ToString();
		yield WaitForSeconds(1);
	}
	//BallScript.active = true;
}