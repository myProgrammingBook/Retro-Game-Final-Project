using UnityEngine;
using System.Collections;

public class BGLooper_Script : MonoBehaviour {

	int numBGPanel = 4;
	float min_X = -9.29f;
	float max_X = -3.76f;

	void Start(){

		GameObject[] planks = GameObject.FindGameObjectsWithTag ("woodPlank");
		foreach (GameObject plank in planks) {
			Vector3 pos = plank.transform.position;
			pos.x = Random.Range(min_X,max_X);
			plank.transform.position = pos;
		}
	}

	void OnTriggerExit2D(Collider2D collider){

		float widthOfBg = ((BoxCollider2D)collider).size.y;
		Vector3 pos = collider.transform.position;
		pos.y -= widthOfBg * numBGPanel - widthOfBg/5f;
	
		collider.transform.position = pos;	
	}

	void OnTriggerEnter2D(Collider2D collider) {	

		if (collider.tag == "woodPlank") {

			float widthOfBg = ((BoxCollider2D)collider).size.y;		
			Vector3 pos = collider.transform.position;		
			pos.y -= widthOfBg * numBGPanel;

			pos.y -= widthOfBg * numBGPanel ;
			pos.x = (Random.Range (min_X, max_X));
			collider.transform.position = pos;

		}

	}


}
