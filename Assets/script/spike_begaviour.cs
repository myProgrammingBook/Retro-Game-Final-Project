using UnityEngine;
using System.Collections;

public class spike_begaviour : MonoBehaviour {

	public AudioClip ballHitSpike;


	void OnCollisionEnter2D(Collision2D coll){
		if (coll.gameObject.tag == "ball") {
			Destroy (coll.gameObject);
			Time.timeScale = 0;
			Application.LoadLevel("scene_fin2");

			GetComponent<AudioSource>().PlayOneShot(ballHitSpike);
		}
	}

}
