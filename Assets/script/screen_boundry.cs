using UnityEngine;
using System.Collections;

public class screen_boundry : MonoBehaviour {


	void Start () {
		//Camera.main.WorldToScreenPoint(
	}	

	void Update () {
	
	}

	void OnCollisionEnter2D(Collision2D coll){
		if (coll.gameObject.tag == "ball") {
			Debug.Log ("------limit reached");
		}
	}
}
