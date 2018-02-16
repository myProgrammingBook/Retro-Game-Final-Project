#pragma strict

var anim : Animator;
var btnStart : UnityEngine.UI.Button;
var toggleEasy : UnityEngine.UI.Toggle;
var toggleMedium : UnityEngine.UI.Toggle;
var toggleHard : UnityEngine.UI.Toggle;
var scoreText : UnityEngine.UI.InputField;
var scoreLimit : int = 0;

function Start () {
	Time.timeScale = 0;
	//anim = this.gameObject.GetComponent(Animator);
}

function GamePlay()
{
	anim.GetComponent(Animator);
	anim.Play("PongMenu 0");
	anim.SetTrigger("Start");
	scoreLimit = int.Parse(scoreText.text.ToString());
	
	if(toggleEasy.isOn)
	{
		GameObject.Find("Ball").GetComponent(BallControl).ballAngle = 5;
	}
	
	else if(toggleMedium.isOn)
	{
		GameObject.Find("Ball").GetComponent(BallControl).ballAngle = 10;
	}
	
	else if(toggleHard.isOn)
	{
		GameObject.Find("Ball").GetComponent(BallControl).ballAngle = 15;
	}

	GameObject.Find("_GM").GetComponent(GameManager).scoreLimitGame = scoreLimit;
	Time.timeScale = 1;
}