#pragma strict
var BtnClick : AudioClip;

var audio1 : AudioClip;
var audio2 : AudioClip;
function Start()
{
	var ranNum = Random.Range(1,3);
	var numChoosen = ranNum;
		
			if (numChoosen == 2)
			{
				GetComponent.<AudioSource>().PlayOneShot(audio1);
			}
			else
			{
				GetComponent.<AudioSource>().PlayOneShot(audio2);
			}
}

function OnClickRetry()
{
	GetComponent.<AudioSource>().PlayOneShot(BtnClick);
	Application.LoadLevel(3);
}

function OnClickBack()
{
	GetComponent.<AudioSource>().PlayOneShot(BtnClick);
	Application.LoadLevel(0);
}
function OnClickHelp()
{
	GetComponent.<AudioSource>().PlayOneShot(BtnClick);
	Application.LoadLevel(15);
}