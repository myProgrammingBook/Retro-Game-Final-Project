using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class RightMovement : MonoBehaviour, IEventSystemHandler {

	//public GameObject character;
	public float maxSpeed = 10f;
	bool buttonHeld = false;
	
	public void pressed (BaseEventData eventData)
	{
		buttonHeld = true;
	}
	public void notpressed(BaseEventData eventData)
	{
		buttonHeld = false;
	}
	void Start () 
	{
		//character = GameObject.Find ("Player01");
	}
	public void Update()
	{
		if (buttonHeld)
		{
			// Do stuff
			//Debug.Log ("click");
			// Move Character

			Vector3 speed = this.transform.position;
			speed.x += maxSpeed;
			this.transform.position = speed;
		} 
		//else
			//Debug.Log ("not click");
	}


}

