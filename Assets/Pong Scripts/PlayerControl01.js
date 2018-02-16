#pragma strict

var speed : float = 10;
var posValLeft : int = 0;
var posValRight : int = 0;
var theSkinLeft : GUISkin;
var theSkinRight : GUISkin;

var BtnP1Right : UnityEngine.UI.Button;

function Update(){

	/*if (Input.GetKeyUp(KeyCode.LeftArrow)){
			
		rigidbody2D.velocity.x = speed;
	}
	else
	{
		rigidbody2D.velocity.x = 0;
	}
		
		
	if (Input.GetKeyUp(KeyCode.RightArrow)){
			
		rigidbody2D.velocity.x = speed *-1;
	}*/
	
	/*if (BtnP1Right)
	{
		rigidbody2D.velocity.x = speed;
		//Player1.rigidbody2D.velocity.x = speed2;
		Debug.Log ("touched");
	}
	
	else{
		rigidbody2D.velocity.x = 0;
	}*/
	
}

/*function OnGUI() {
		GUI.skin = theSkinRight;
		
		//use the posValLeft to manually edit the position of the player with the screen
		if (GUI.RepeatButton (new Rect(Screen.width/2+posValLeft,Screen.height-40,40,40),"")){
			
			rigidbody2D.velocity.x = speed;
		}
		else
		{
			rigidbody2D.velocity.x = 0;
		}
		
		
		GUI.skin = theSkinLeft;
		
		
		if (GUI.RepeatButton (new Rect(Screen.width/2+posValRight,Screen.height-40,40,40),"")){
			
			rigidbody2D.velocity.x = speed *-1;
		}
		
}*/


function playerRightButton(){
	GetComponent.<Rigidbody2D>().velocity.x += Time.deltaTime * 2;
}

function playerLeftButton(){
	GetComponent.<Rigidbody2D>().velocity.x -= Time.deltaTime * 50;
}
