﻿/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project naked_ambition
 */

entities.game.Bootstrap.name = "Bootstrap";
entities.game.Bootstrap.load = function(world) {
    var arch0 = world.createArchetype(this.Component, ut.Core2D.Camera2D, ut.Core2D.TransformNode, ut.EditorExtensions.CameraCullingMask, ut.layers.Default)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "Camera");
    var arch1 = world.createArchetype(game.PlayerTag, this.Component, ut.Core2D.Sprite2DRenderer, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default)
    var e1 = world.createEntity(arch1);
    world.setEntityName(e1, "Player");
    var c0 = new ut.Core2D.TransformNode();
    world.setComponentData(e0, c0);
    var c1 = new ut.Core2D.Camera2D();
    c1.halfVerticalSize = 200;
    var s0 = new ut.Math.Rect();
    s0.x = 0;
    s0.y = 0;
    s0.width = 1;
    s0.height = 1;
    c1.rect = s0;
    var s1 = new ut.Core2D.Color();
    s1.r = 0;
    s1.g = 0;
    s1.b = 0;
    s1.a = 1;
    c1.backgroundColor = s1;
    c1.clearFlags = 1;
    c1.depth = -2;
    c1.cullingMask = [ut.layers.Default.cid, ut.layers.TransparentFX.cid, ut.layers.IgnoreRaycast.cid, ut.layers.Water.cid, ut.layers.UI.cid];
    c1.cullingMode = 2;
    world.setComponentData(e0, c1);
    var c2 = new ut.EditorExtensions.CameraCullingMask();
    c2.mask = -1;
    world.setComponentData(e0, c2);
    var c3 = new ut.Core2D.TransformNode();
    world.setComponentData(e1, c3);
    var c4 = new ut.Core2D.TransformLocalPosition();
    var s2 = new ut.Math.Vector3();
    s2.x = 0;
    s2.y = 0;
    s2.z = 0;
    c4.position = s2;
    world.setComponentData(e1, c4);
    var c5 = new ut.Core2D.TransformLocalRotation();
    var s3 = new ut.Math.Quaternion();
    s3.x = 0;
    s3.y = 0;
    s3.z = 0;
    s3.w = 1;
    c5.rotation = s3;
    world.setComponentData(e1, c5);
    var c6 = new ut.Core2D.TransformLocalScale();
    var s4 = new ut.Math.Vector3();
    s4.x = 1;
    s4.y = 1;
    s4.z = 1;
    c6.scale = s4;
    world.setComponentData(e1, c6);
    var c7 = new ut.Core2D.Sprite2DRenderer();
    c7.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/player_1');
    var s5 = new ut.Core2D.Color();
    s5.r = 1;
    s5.g = 1;
    s5.b = 1;
    s5.a = 1;
    c7.color = s5;
    c7.blending = 0;
    world.setComponentData(e1, c7);
    return [e0, e1];
}

