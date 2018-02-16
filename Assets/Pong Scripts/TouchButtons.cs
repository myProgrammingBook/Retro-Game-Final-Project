using UnityEngine;
using System.Collections;

public class TouchButtons : TouchButtonLogic {

	public GameObject Player1;
	public float speed = 10;


	public void OnTouchBegan(){
		Vector3 speed2 = Player1.transform.position;


		speed2.x += Time.deltaTime * 2;
		Player1.transform.position = speed2;
		//Player1.rigidbody2D.velocity.x = speed2;
		Debug.Log ("touched");
	}

	public void TouchEnded(){
		//Player1.rigidbody2D.velocity.x = 0;
		Debug.Log ("touchedended");
	}

}
