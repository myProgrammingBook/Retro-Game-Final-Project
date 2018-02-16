#pragma strict
private var movement : Vector3 = Vector3.zero;
private var controller : CharacterController;

var fire : AudioClip;
var explosive : AudioClip;
var bullet : GameObject;
var btnRight : UnityEngine.UI.Button;
private var WingManRight: GameObject;
private var WingManLeft: GameObject;

var TxtTimer : UnityEngine.UI.Text;
var timer : float = 0.0f;
var Powerup1Audio : AudioClip;
function Start () {

	controller = GetComponent(CharacterController);
	
}


function Update() {
	timer -= Time.deltaTime;
	TxtTimer.color =Color.red;
	TxtTimer.text = "00:"+String.Format("{0:00}", timer);
	
	if(timer <0)
	{
		DeassignWingman();
		TxtTimer.text ="00:00";;
		TxtTimer.color =Color.white;
		timer = -1;
	}
	
}

function OnClickForFire()
{
	GetComponent.<AudioSource>().PlayOneShot(fire);
	var spawnBullet = Instantiate (bullet, transform.position, Quaternion.identity);
	
	if((WingManRight != null)&&(WingManLeft != null))
	{
		var spawnBullet2 = Instantiate (bullet, WingManRight.gameObject.transform.position, Quaternion.identity);
		spawnBullet2.GetComponent.<Rigidbody>().AddForce(Vector3.up * 400 );
		
		var spawnBullet3 = Instantiate (bullet, WingManLeft.gameObject.transform.position, Quaternion.identity);
		spawnBullet3.GetComponent.<Rigidbody>().AddForce(Vector3.up * 400 );
	}
	
	spawnBullet.GetComponent.<Rigidbody>().AddForce(Vector3.up * 400 );
}


function OnTriggerEnter (col : Collider)
{
	if (col.gameObject.name == "EnemyBullet(Clone)")
		{
			GetComponent.<AudioSource>().PlayOneShot(explosive);
			//Destroy(gameObject);
		}
		
	if((col.gameObject.name == "Boarderright") || (col.gameObject.name == "Boarderleft"))
	{
		
	}
}

function AssignWingman()
{
	WingManLeft = GameObject.FindGameObjectWithTag("WingmanLeft");
	WingManRight = GameObject.FindGameObjectWithTag("WingmanRight");
	timer = 5.0f;
	if((WingManRight != null)&&(WingManLeft != null))
	{
		WingManLeft.GetComponent.<Renderer>().enabled = true;
		WingManRight.GetComponent.<Renderer>().enabled = true;
		GetComponent.<AudioSource>().pitch = 1.2f;
		GetComponent.<AudioSource>().PlayOneShot(Powerup1Audio);
	}
	else{
		Debug.Log("Null assigned to ships");
		}
}

function DeassignWingman()
{
	Debug.Log("Deacti");
	GameObject.FindGameObjectWithTag("WingmanLeft").GetComponent.<Renderer>().enabled = false;
	GameObject.FindGameObjectWithTag("WingmanRight").GetComponent.<Renderer>().enabled = false;
	
	WingManLeft  = null;
	WingManRight = null;
}