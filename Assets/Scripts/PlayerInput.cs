using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerInput : MonoBehaviour {
    public GameController gameController;

    private bool onItemChoosen = false;

    // Start is called before the first frame update
    void Start () {
        
    }

    // Update is called once per frame
    void Update () {
        if (Input.GetMouseButtonDown(0)) {
            Vector3 _mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);

            Collider2D _col;
            _col = Physics2D.OverlapCircle(_mousePos, 0.1f, 1 << LayerMask.NameToLayer("Punch"));
            if (_col != null) { //Player has choosen to punch
                gameController.PlayerPunchEnemy();
            }

            _col = Physics2D.OverlapCircle(_mousePos, 0.1f, 1 << LayerMask.NameToLayer("Item"));
            if (_col != null) { //Player has choosen an item
                print ("Choosen an item - wait for release or slide");
                onItemChoosen = true;
            }
        }
    }
}
