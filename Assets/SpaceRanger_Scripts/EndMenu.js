#pragma strict
var BtnClick : AudioClip;

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

function OnClickLevel2()
{
	GetComponent.<AudioSource>().PlayOneShot(BtnClick);
	Application.LoadLevel(12);
}

function OnClickLevel3()
{
	GetComponent.<AudioSource>().PlayOneShot(BtnClick);
	Application.LoadLevel(14);
}