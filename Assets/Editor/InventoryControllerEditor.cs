using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using UnityEditor;

[CustomEditor(typeof(InventoryController))]
public class InventoryControllerEditor : Editor {
    public override void OnInspectorGUI () {
        InventoryController _target = (InventoryController)target;

        this.DrawDefaultInspector();

        if (GUILayout.Button("Create Inventory")) {
            _target.CreateInventoryOnEditor();
        }
        if (GUILayout.Button("Remove Inventory")) {
            _target.RemoveInventoryOnEditor();
        }
    }
}
