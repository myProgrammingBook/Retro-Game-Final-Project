#pragma strict

var BtnClick : AudioClip;

function OnClickSpaceRanger()
{
	GetComponent.<AudioSource>().PlayOneShot(BtnClick);
	Application.LoadLevel(3);
}

function OnClickPong()
{
	GetComponent.<AudioSource>().PlayOneShot(BtnClick);
	Application.LoadLevel(2);
}

function OnClickFallBall()
{
	GetComponent.<AudioSource>().PlayOneShot(BtnClick);
	Application.LoadLevel(7);
}

function OnClickBack()
{
	GetComponent.<AudioSource>().PlayOneShot(BtnClick);
	Application.LoadLevel(0);
}