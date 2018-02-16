using UnityEngine;
using System.Collections;

public class stopper_script : MonoBehaviour {

	void Start () {
	
	}
	
	void Update () {
	
	}

	void OnCollisionEnter2D(Collision2D coll){
		if (coll.gameObject.tag == "ball") {
			Destroy(coll.gameObject);
			Time.timeScale = 0;
			Application.LoadLevel("scene_fin2");
		}
	
	}
}
