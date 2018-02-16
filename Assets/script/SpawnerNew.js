#pragma strict

var Plank1 : GameObject;

function Update () {
		Time.timeScale = 1;
		var spawnPlank = Instantiate (Plank1, transform.position, Quaternion.identity);
}