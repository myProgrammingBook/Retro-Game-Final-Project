using UnityEngine;
using System.Collections;

public class camera_trackings : MonoBehaviour {

	//set this to main camera

	Transform player;
	float offsetY;

	void Start () {
		GameObject playerObj = GameObject.FindGameObjectWithTag("ball");

		if (playerObj == null) {
			Debug.Log("cant find oblect ball");
			return;
		}

		player = playerObj.transform;
		offsetY = transform.position.y - player.position.y;	
	}
	

	void Update () {
	
		if (player != null) {
			Vector3 pos = transform.position;
			pos.y = player.position.y + offsetY;
			transform.position = pos;
		}
	}
}
