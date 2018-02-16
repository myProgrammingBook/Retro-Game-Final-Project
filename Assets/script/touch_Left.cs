using UnityEngine;
using System.Collections;

public class touch_Left : MonoBehaviour {

	public GameObject Player1;
	public float speed = 10;
	
	
	public void OnTouchBegan(){

		Vector3 Curr_Position = Player1.transform.position;
		Vector3 Curr_Rotation = Player1.transform.eulerAngles;
		
		Curr_Position.x -= 0.1f;
		Curr_Rotation.z -= 0.0001f;
		
		Player1.transform.position = Curr_Position;
		Player1.transform.Rotate(Curr_Rotation);
		Debug.Log ("touched");
	}


	public void TouchEnded(){
		//Player1.rigidbody2D.velocity.x = 0;
		Debug.Log ("touchedended");
	}
}
