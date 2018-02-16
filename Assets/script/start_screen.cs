using UnityEngine;
using System.Collections;

public class start_screen : MonoBehaviour {

	public static bool sawOnce = false;
	public UnityEngine.UI.Button startBtn;
	void Start () {
		//if (!sawOnce) {
			//GetComponent<SpriteRenderer>().enabled = true;
			Time.timeScale = 0;
		//}

		//sawOnce = true;
	}
	
	void Update () {

//		if (Time.timeScale == 0 && (Input.GetKeyDown (KeyCode.Space) || Input.GetMouseButtonDown (0))) {
//			Time.timeScale = 1;
//			GetComponent<SpriteRenderer>().enabled = false;
//		}
	}


	public void StartGame()
	{

		Time.timeScale = 1;
		startBtn.image.enabled = false;
		//sawOnce = true;

	}
}
