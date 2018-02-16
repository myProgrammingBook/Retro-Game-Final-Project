using UnityEngine;
using System.Collections;

public class ball_Movements : MonoBehaviour {

	public AudioClip ballHitWood;
	public float drawForce;

	void Update () {

		if (Input.GetKey (KeyCode.A)) {

			Vector3 Curr_Position = this.transform.position;
			Vector3 Curr_Rotation = this.transform.eulerAngles;
						
			Curr_Position.x -= 0.1f;
			Curr_Rotation.z -= 0.0001f;

			this.transform.position = Curr_Position;
			this.transform.Rotate(Curr_Rotation);
		} 
		else if (Input.GetKey (KeyCode.D)) {

			Vector3 Curr_Position = this.transform.position;
			Vector3 Curr_Rotation = this.transform.eulerAngles;

			Curr_Position.x += 0.1f;
			Curr_Rotation.z += 0.0001f;
				
			this.transform.position = Curr_Position;
			this.transform.Rotate(Curr_Rotation);				
		}

		//cheat-----delete below from here				
		else if(Input.GetKey(KeyCode.W)){
						Vector3 pos = this.transform.position;
						pos.y += 0.5f;
						this.transform.position = pos;						
				}
		//to here


	}


	void OnCollisionEnter2D(Collision2D colObj){

		if (colObj.gameObject.tag.Equals("woodPlank")){				

			calc_score.AddPoints();
			GetComponent<AudioSource>().pitch = Random.Range(0.8f,1.2f);
			GetComponent<AudioSource>().PlayOneShot(ballHitWood);

		}
	}

	
	void OnCollisionStay2D(Collision2D colObj){
		
		if (colObj.gameObject.tag.Equals("icePlank")){
			
			//Destroy(colObj.gameObject,1.0f);
		}
	}


}
