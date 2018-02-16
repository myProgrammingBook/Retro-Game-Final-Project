using UnityEngine;
using System.Collections;

public class stopperTop_script : MonoBehaviour {

	void Start () {
	
	}
	
	void Update () {
	
	}

	void OnTriggerEnter2D(Collider2D coll){
		if (coll.gameObject.tag == "ball") {
			Destroy(coll.gameObject);
			Time.timeScale = 0;
			Application.LoadLevel("scene_fin1");
		}


	}
}
