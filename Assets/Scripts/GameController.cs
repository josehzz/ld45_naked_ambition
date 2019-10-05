using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour {
    public InventoryController inventoryController;
    public EnemiesController enemiesController;

    // Start is called before the first frame update
    void Start () {
        
    }

    // Update is called once per frame
    void Update () {
        
    }

    public void PlayerPunchEnemy () {
        print ("Punch here");

        enemiesController.DamageEnemy(1);
    }
}
