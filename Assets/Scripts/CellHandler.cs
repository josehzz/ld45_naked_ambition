using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CellHandler : MonoBehaviour {
    public int cellID;

    public SpriteRenderer spriteRenderer;

    //[HideInInspector]
    public List<int> neighbors;

    // Start is called before the first frame update
    void Start () {
        
    }

    // Update is called once per frame
    void Update () {
        
    }

    public void SetupCellLogic (int _cID, ref List<int> _neighbors, Color _c) {
        cellID = _cID;
        neighbors = _neighbors;

        //spriteRenderer.color = (_cID % 2 == 0) ? Color.white : Color.grey;
        spriteRenderer.color = _c;
    }
}
