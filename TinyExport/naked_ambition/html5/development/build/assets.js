/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project naked_ambition
 */

/**
 * @type {object}
 * @desc Map containing URLs for all assets.  If assets are included as base64 blobs, these will be data URLs.
 * @example var assetUrl = UT_ASSETS["MyCustomAsset"]
 */
var UT_ASSETS = {
    "player_1": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAQABADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDs6KpLeXTwP5ukzLJghVSdCDx/eyCPyoa8ukgTytJmaTADK86ADj+9kk/lXlfVP78fvPV+tf3Jfcf/2Q=="
    ,"player_1_a": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAARElEQVQoFWNkAIP///9DGHhIRkZGoCwTHhVYpUY1YA0WNMERGUqg9AQByOkPks4wRYAqEaEEUQTTjkIjSyE0oCjBzQEARzYJJdKkPPcAAAAASUVORK5CYII="
}

var UT_ASSETS_SETUP = function(world) {
    var arch0 = world.createArchetype(ut.Core2D.Image2D, ut.Core2D.Image2DLoadFromFile, ut.EditorExtensions.AssetReferenceTexture2D)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "assets/textures/player_1");
    var arch1 = world.createArchetype(ut.Core2D.Sprite2D, ut.EditorExtensions.AssetReferenceSprite)
    var e1 = world.createEntity(arch1);
    world.setEntityName(e1, "assets/sprites/player_1");
    var c0 = new ut.Core2D.Image2DLoadFromFile();
    c0.imageFile = "ut-asset:player_1";
    c0.maskFile = "ut-asset:player_1_a";
    world.setComponentData(e0, c0);
    var c1 = new ut.Core2D.Image2D();
    c1.pixelsToWorldUnits = 1;
    c1.disableSmoothing = true;
    world.setComponentData(e0, c1);
    var c2 = new ut.EditorExtensions.AssetReferenceTexture2D();
    c2.guid = "05a3bd22f5308de4783756d7bb46452f";
    c2.fileId = 2800000;
    c2.type = 3;
    world.setComponentData(e0, c2);
    var c3 = new ut.Core2D.Sprite2D();
    c3.image = e0;
    var s0 = new ut.Math.Rect();
    s0.x = 0;
    s0.y = 0;
    s0.width = 1;
    s0.height = 1;
    c3.imageRegion = s0;
    var s1 = new ut.Math.Vector2();
    s1.x = 0.5;
    s1.y = 0.5;
    c3.pivot = s1;
    world.setComponentData(e1, c3);
    var c4 = new ut.EditorExtensions.AssetReferenceSprite();
    c4.guid = "05a3bd22f5308de4783756d7bb46452f";
    c4.fileId = 21300000;
    c4.type = 3;
    world.setComponentData(e1, c4);
    return [e0, e1];
}


