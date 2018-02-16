using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class calc_score : MonoBehaviour {


	public static int score = 0;
	public static int high_score = 0;
	Text scoreText;
	bool reset;
	public static void AddPoints(){

		score++;
		
		if (score > high_score) {
			high_score = score;
		}
	}

	void Start () {
		reset = false;
		score = 0;
		high_score = PlayerPrefs.GetInt ("highscore", 0);
		scoreText = GameObject.FindGameObjectWithTag("scoreDisplay").GetComponent<Text>();
		scoreText.text = " High score  " + high_score + "\t\tScore  " + score;
	}
	

	void Update () {
		scoreText.text = "High score " + high_score + "\t\tScore " + score;



	}
	
	void OnDestroy(){
		if(!reset)
			PlayerPrefs.SetInt ("highscore", high_score);
		else
			PlayerPrefs.SetInt ("highscore", 0);
	}

	public void resetScore(){
		reset = true;
		PlayerPrefs.SetInt ("highscore", 0);
		PlayerPrefs.DeleteKey ("highscore");
	}
	
	public void OnClickBack()
	{
		Application.LoadLevel(7);
	}
}
