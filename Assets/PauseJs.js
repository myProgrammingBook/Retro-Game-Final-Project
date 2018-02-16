#pragma strict

var pauseClip : AudioClip;
var unpauseClip : AudioClip;
	
var pauseMenuPanel: GameObject;

var anim : Animator;
//var isPause:  = false;

function Start () {

	Time.timeScale = 1;
		//get the animator component
		anim = pauseMenuPanel.GetComponent(Animator);
		//disable it on start to stop it from playing the default animation
		anim.enabled = false;
}

function Update () {

	
}


	//function to pause the game
function PauseGame(){
		//enable the animator component
		anim.enabled = true;
		GetComponent.<AudioSource>().PlayOneShot(pauseClip);
		//play the Slidein animation
		anim.Play("PauseWindowAnimationIn");
		//set the isPaused flag to true to indicate that the game is paused
		//isPaused = true;
		//freeze the timescale
		Time.timeScale = 0;

		anim.enabled = true;
		//play the Slidein animation
		anim.Play("PauseWindowAnimationIn");

	}
	//function to unpause the game
function UnpauseGame(){
	
	//isPaused = false;
	GetComponent.<AudioSource>().PlayOneShot(unpauseClip);
	anim.Play("PauseWindowAnimationOut");
	if(anim.GetComponent.<Animation>().isPlaying){
		yield WaitForSeconds(3f);
	}

	Time.timeScale = 1;

	}

