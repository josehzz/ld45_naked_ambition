using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemiesController : MonoBehaviour {
    public List<EnemyHandler> enemies;
    public GameObject enemyPf;
    [HideInInspector]
    public int enemySelectedID = 0;

    public float spacing = 1.85f;

    // Start is called before the first frame update
    void Start () {
        SpawnEnemies(3);
    }

    // Update is called once per frame
    void Update () {
        
    }

    public void SpawnEnemies (int _count) {
        float _offsetX = -_count / 2.0f * spacing;

        if (enemies == null)
            enemies = new List<EnemyHandler>();
        RemoveAllEnemies(); //Just in case
        
        for (int i = 0; i < _count; i++) { //Spawns enemies
            EnemyHandler _eh = Instantiate(enemyPf, Vector2.zero, Quaternion.identity, transform)
                                    .GetComponent<EnemyHandler>();

            _eh.transform.localPosition = new Vector3(_offsetX + i * spacing, 0.0f); //Set position
            enemies.Add(_eh);
        }
    }

    public void RemoveAllEnemies () {
        if (enemies == null || enemies.Count == 0)
            return;
        
        for (int i = 0; i < enemies.Count; i++) {
            Destroy(enemies[i].gameObject);
        }
        enemies.Clear();
    }

    public void DamageEnemy (int _val) {
        if (enemySelectedID >= enemies.Count) return;

        if (enemies[enemySelectedID].GotDamaged(_val)) {
            enemies.RemoveAt(enemySelectedID);
        }
    }
}
