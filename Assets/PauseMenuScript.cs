using UnityEngine;
using System.Collections;
using System.ComponentModel;

public class PauseMenuScript : MonoBehaviour {

	public int startValue = 1;
	public AudioClip pauseClip;
	public AudioClip unpauseClip;
	//refrence for the pause menu panel in the hierarchy
	public GameObject pauseMenuPanel;

	//animator reference
	private Animator anim;
	//variable for checking if the game is paused
	private bool isPaused = false;
	// Use this for initialization
	void Start () {
		//unpause the game on start
		Time.timeScale = startValue;
		//get the animator component
		anim = pauseMenuPanel.GetComponent<Animator>();
		//disable it on start to stop it from playing the default animation
		anim.enabled = false;
	}
	
	// Update is called once per frame
	public void Update () {
		//anim.animation.PlayQueued( "PauseWindowAnimationOut" );
		StartCoroutine (WaitForAnimation());
		if (!isPaused) {
			//Time.timeScale = 1;		
		}
		//pause the game on escape key press and when the game is not already paused

	}
	
	//function to pause the game
	public void PauseGame(){
		//enable the animator component
		anim.enabled = true;
		GetComponent<AudioSource>().PlayOneShot(pauseClip);
		//play the Slidein animation
		anim.Play("PauseWindowAnimationIn");
		//set the isPaused flag to true to indicate that the game is paused
		isPaused = true;
		//freeze the timescale
		Time.timeScale = 0;

		anim.enabled = true;
		//play the Slidein animation
		anim.Play("PauseWindowAnimationIn");

	}
	//function to unpause the game
	public void UnpauseGame(){
		//set the isPaused flag to false to indicate that the game is not paused
		isPaused = false;
		GetComponent<AudioSource>().PlayOneShot(unpauseClip);
		anim.Play("PauseWindowAnimationOut");
		//this.animation.PlayQueued("PauseWindowAnimationOut");
		StartCoroutine (WaitForAnimation());
		//play the SlideOut animation

		//anim.animation.PlayQueued ("PauseWindowAnimationOut");
		isPaused = false;
		//set back the time scale to normal time scale
		Time.timeScale = 1;		


	}

	IEnumerator WaitForAnimation()
	{

		Debug.Log ("in wait function");
		yield return new WaitForSeconds (3f);
		anim.StopPlayback ();

	}
}