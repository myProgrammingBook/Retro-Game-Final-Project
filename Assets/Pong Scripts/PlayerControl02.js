#pragma strict

var speed : float = 10;
var posValLeft : int = 0;
var posValRight : int = 0;
var theSkinLeft : GUISkin;
var theSkinRight : GUISkin;


function OnGUI() {
		GUI.skin = theSkinRight;
		
		if (GUI.RepeatButton (new Rect(Screen.width/2+posValLeft,0,40,40),"")){
			
			GetComponent.<Rigidbody2D>().velocity.x = speed;
		}
		else
		{
			GetComponent.<Rigidbody2D>().velocity.x = 0;
		}
		
		
		GUI.skin = theSkinLeft;
		

		if (GUI.RepeatButton (new Rect(Screen.width/2+posValRight,0,40,40),"")){
			
			GetComponent.<Rigidbody2D>().velocity.x = speed *-1;
		}
		
}

