using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum EnemyType {
    none = 0,
    bat = 1,
    slime = 2,
    skely = 3,
    soldier = 4
}

public class EnemyHandler : MonoBehaviour {
    public EnemyType enemyType = EnemyType.none;

    public int health = 4;

    [Space]
    public int attValue = 1; //Stats of enemies
    public int defValue = 1;
    public int intValue = 1;
    public int wisValue = 1;

    // Start is called before the first frame update
    void Start () {
        
    }

    // Update is called once per frame
    void Update () {
        
    }

    public bool GotDamaged (int _val=1) {
        health += defValue - _val;

        if (health <= 0) {
            Destroy(this.gameObject);
            return true; //Enemy destroyed
        } 

        return false; //Still alive
    }
}
