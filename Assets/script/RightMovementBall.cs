using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class RightMovementBall : MonoBehaviour, IEventSystemHandler {

	public float maxSpeed = 0.15f;
	bool buttonHeld = false;
	
	public void pressed (BaseEventData eventData)
	{
		buttonHeld = true;
	}
	public void notpressed(BaseEventData eventData)
	{
		buttonHeld = false;
	}

	public void Update()
	{
		if (buttonHeld)
		{
			// Do stuff
			//Debug.Log ("click");
			// Move Character

			Vector3 Curr_Position = this.transform.position;
			Vector3 Curr_Rotation = this.transform.eulerAngles;
			
			Curr_Position.x += 0.1f;
			Curr_Rotation.z += 0.0001f;
			
			this.transform.position = Curr_Position;
			this.transform.Rotate(Curr_Rotation);
		} 
		//else
			//Debug.Log ("not click");
	}


}

