using UnityEngine;
using System.Collections;

public class menuControlls : MonoBehaviour {

	public void OnClickStart()
	{
		Application.LoadLevel(1);
	}
	
	public void OnClickHelp()
	{
		Application.LoadLevel(15);
	}
	
	public void OnClickExit()
	{
		Application.Quit();
	}
	
	public void OnClickBack()
	{
		Application.LoadLevel(0);
	}


}
