using UnityEngine;
using System.Collections;

public class ice_movement : MonoBehaviour {

	public float moveSpeed;

	void Start () {

	}
	
	void Update () {
		//transform.Translate (Vector2.right * moveSpeed*Time.deltaTime);
	}

	void OnCollisionEnter2D(Collision2D colObj){
		
		if (colObj.gameObject.tag.Equals("woodPlank")){
			//transform.Translate (-Vector2.right * moveSpeed*Time.deltaTime);
		}
	}

}
