 #pragma strict

var ballAngle : float = 10;

private var ballSpeed : float = ballAngle;
var countDownText : UnityEngine.UI.Text;
var countDown :int;
var CountClickSound : AudioClip;


function Start () {
	for(countDown = 3; countDown>=0;countDown--){
		if(countDown == 0)
		{
			countDownText.text = "";
		}
		else{
			GetComponent.<AudioSource>().PlayOneShot(CountClickSound);
			countDownText.text = countDown.ToString();
		}
		
		yield WaitForSeconds(1);
	}
	
	ballMove();
}
function Update (){

	var yVel : float = GetComponent.<Rigidbody2D>().velocity.y;
	
	if(yVel <10 && yVel > -10 && yVel != 0)
	{
		if(yVel > 0){
			GetComponent.<Rigidbody2D>().velocity.y = 8.0;
		}
		else{
			GetComponent.<Rigidbody2D>().velocity.y = -8.0;
		}
	}

}
function OnCollisionEnter2D (colInfo : Collision2D) {
	if ( colInfo.collider.tag == "Player") {
		
		GetComponent.<Rigidbody2D>().velocity.x = GetComponent.<Rigidbody2D>().velocity.x/2 + colInfo.collider.GetComponent.<Rigidbody2D>().velocity.x/2; //get and added velocity from the object to which the ball collided
		GetComponent.<AudioSource>().pitch = Random.Range(0.8f,1.2f);//change the pitch of the ball collision sound fx
		GetComponent.<AudioSource>().Play();
	}
}

function ResetBall (){
	
	GetComponent.<Rigidbody2D>().velocity.x = 0;
	GetComponent.<Rigidbody2D>().velocity.y = 0;
	
	transform.position.x = 0;
	transform.position.y = 0;

	yield WaitForSeconds (2);
	ballMove();
}

//randomly spawn the ball to different dirrections
function ballMove(){

	var randomNumber = Random.Range (0,2);
	
	if(randomNumber <= 0.5) {
		GetComponent.<Rigidbody2D>().AddForce (new Vector2 (ballSpeed,10));
	}
	else {
		GetComponent.<Rigidbody2D>().AddForce (new Vector2 (-ballSpeed,-10));
	}

}
