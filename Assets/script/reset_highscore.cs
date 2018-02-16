using UnityEngine;
using System.Collections;

public class reset_highscore : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		
	}

	public void resetScore(){
		PlayerPrefs.SetInt ("highscore", 0);
		PlayerPrefs.Save ();
	}

	public void OnClickBack()
	{
		Application.LoadLevel(7);
	}

}
