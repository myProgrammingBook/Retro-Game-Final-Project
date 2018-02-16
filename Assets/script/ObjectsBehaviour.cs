using UnityEngine;
using System.Collections;

public class ObjectsBehaviour : MonoBehaviour {

	public float speed = 3.0f;

	void Start () {		
		
	}	
	
	void Update () {
		this.transform.Translate(Vector2.up * Time.deltaTime * speed);
		speed+=0.001f;

	}
}
