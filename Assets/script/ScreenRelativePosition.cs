using UnityEngine;
using System.Collections;

public class ScreenRelativePosition : MonoBehaviour {

	public enum ScreenEdge {LEFT, RIGHT, TOP, BOTTOM}
	public ScreenEdge screenEdge;
	public float yOffset;
	public float xOffset;

	void Start () {
	
		float deviceWidth;
		float deviceHeight;

		deviceWidth = Screen.width;
		deviceHeight = Screen.height;
	
		transform.position = Camera.main.ViewportToWorldPoint(new Vector3(0,1,0));
	//	Vector3 pos = this.transform.position;
	//	pos.x = deviceWidth - 10;
	//	pos.y = deviceHeight -50 ;
	//	this.transform.position = pos;
		Debug.Log ("height ="+deviceHeight+"width="+deviceHeight);
	
	}



	void Update () {
	
	}
}
