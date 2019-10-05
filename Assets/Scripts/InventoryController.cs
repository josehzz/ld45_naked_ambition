using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using UnityEditor;
using UnityEditor.SceneManagement;

public class InventoryController : MonoBehaviour {
    [HideInInspector]
    public List<CellHandler> cells;

    public GameObject cellPf; //Cell prefab
    public Vector2 cellSize = new Vector2(1.0f, 1.0f);

    public Vector2Int inventorySize = new Vector2Int(10, 6);

    // Start is called before the first frame update
    void Start () {
        if (cells == null)
            cells = new List<CellHandler>();
    }

    // Update is called once per frame
    void Update () {
        
    }

#if UNITY_EDITOR
    public void CreateInventoryOnEditor () {
        if (cells == null)
            cells = new List<CellHandler>();

        Vector2 _offset = new Vector2(-(inventorySize.x * cellSize.x - cellSize.x) / 2.0f, 
                                      -(inventorySize.y * cellSize.y - cellSize.y) / 2.0f);
        bool _colorToggle = true;
        for (int i = 0; i < inventorySize.x; i++) { //Create cells inside inventory
            if (inventorySize.y % 2 == 0) _colorToggle = !_colorToggle;

            for (int j = 0; j < inventorySize.y; j++) {
                CellHandler _ch = Instantiate(cellPf, 
                                              Vector2.zero, 
                                              Quaternion.identity, 
                                              transform).GetComponent<CellHandler>();
                _ch.transform.localPosition = new Vector3(_offset.x + i * cellSize.x, _offset.y + j * cellSize.y); //Set position

                int _cID = cells.Count; //Cell ID
                List<int> _neighbours = new List<int>(); //Neighbours
                //Up
                if ((_cID + 1) % inventorySize.y != 0 && _cID + 1 < inventorySize.x * inventorySize.y) {
                    _neighbours.Add(_cID + 1);
                }
                else {
                    _neighbours.Add(-1);
                }

                //Right
                if (_cID + 1 < inventorySize.x * inventorySize.y && _cID + inventorySize.y < inventorySize.x * inventorySize.y) {
                    _neighbours.Add(_cID + inventorySize.y);
                }
                else {
                    _neighbours.Add(-1);
                }

                //Down
                if (_cID % inventorySize.y != 0 && _cID > 0) {
                    _neighbours.Add(_cID - 1);
                }
                else {
                    _neighbours.Add(-1);
                }

                //Left
                if (_cID - 1 >= 0 && _cID - inventorySize.y >= 0) {
                    _neighbours.Add(_cID - inventorySize.y);
                }
                else {
                    _neighbours.Add(-1);
                }

                _ch.SetupCellLogic(_cID, ref _neighbours, _colorToggle ? Color.white : Color.grey);
                _colorToggle = !_colorToggle;

                cells.Add(_ch);
            }
        }

        EditorSceneManager.MarkSceneDirty(this.gameObject.scene);
        EditorUtility.SetDirty(this.gameObject);
    }

    public void RemoveInventoryOnEditor () {
        if (cells != null) { //Remove cells list
            for (int i = 0; i < cells.Count; i++) {
                DestroyImmediate(cells[i].gameObject);
            }
            cells.Clear();
        }
    }
#endif
}
