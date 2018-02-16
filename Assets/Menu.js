#pragma strict

var BtnClick : AudioClip;

function OnClickStart()
{
	GetComponent.<AudioSource>().PlayOneShot(BtnClick);
	Application.LoadLevel(1);
}

function OnClickAboutUs()
{
	GetComponent.<AudioSource>().PlayOneShot(BtnClick);
	Application.LoadLevel(6);
}

function OnClickExit()
{
	GetComponent.<AudioSource>().PlayOneShot(BtnClick);
	Application.Quit();
}

function OnClickBack()
{
	GetComponent.<AudioSource>().PlayOneShot(BtnClick);
	Application.LoadLevel(0);
}

function OnClickHelpSpaceRanger()
{
	GetComponent.<AudioSource>().PlayOneShot(BtnClick);
	Application.LoadLevel(16);
}