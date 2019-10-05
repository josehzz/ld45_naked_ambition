var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var game;
(function (game) {
    /** New System */
    var CreateInventorySystem = /** @class */ (function (_super) {
        __extends(CreateInventorySystem, _super);
        function CreateInventorySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CreateInventorySystem.prototype.OnUpdate = function () {
            var inventory = game.InventoryService.getInventoryConfiguration(this.world);
            if (inventory == null) {
                return;
            }
        };
        return CreateInventorySystem;
    }(ut.ComponentSystem));
    game.CreateInventorySystem = CreateInventorySystem;
})(game || (game = {}));
var game;
(function (game) {
    //Static functions for inventory
    var InventoryService = /** @class */ (function () {
        function InventoryService() {
        }
        //<summary>Gets configuration if exits on scene</summary>
        InventoryService.getInventoryConfiguration = function (world) {
            return world.getConfigData(game.InventoryConfiguration);
        };
        InventoryService.clear = function (world, inventory) {
            inventory.IsCreated = false;
            inventory.CellEntities = new Array(inventory.Width * inventory.Height);
            for (var i = 0; i < inventory.CellEntities.length; i++) {
                inventory.CellEntities[i] = new ut.Entity;
            }
            inventory.ItemEntities = new Array(inventory.itemCount);
            for (var i = 0; i < inventory.ItemEntities.length; i++) {
                inventory.ItemEntities[i] = new ut.Entity;
            }
            world.setConfigData(inventory);
        };
        ;
        return InventoryService;
    }());
    game.InventoryService = InventoryService;
})(game || (game = {}));
var ut;
(function (ut) {
    var EntityGroup = /** @class */ (function () {
        function EntityGroup() {
        }
        /**
         * @method
         * @desc Creates a new instance of the given entity group by name and returns all entities
         * @param {ut.World} world - The world to add to
         * @param {string} name - The fully qualified name of the entity group
         * @returns Flat list of all created entities
         */
        EntityGroup.instantiate = function (world, name) {
            var data = this.getEntityGroupData(name);
            if (data == undefined)
                throw "ut.EntityGroup.instantiate: No 'EntityGroup' was found with the name '" + name + "'";
            return data.load(world);
        };
        ;
        /**
         * @method
         * @desc Destroys all entities that were instantated with the given group name
         * @param {ut.World} world - The world to destroy from
         * @param {string} name - The fully qualified name of the entity group
         */
        EntityGroup.destroyAll = function (world, name) {
            var type = this.getEntityGroupData(name).Component;
            world.forEach([ut.Entity, type], function (entity, instance) {
                // @TODO This should REALLY not be necessary
                // We are protecting against duplicate calls to `destroyAllEntityGroups` within an iteration
                if (world.exists(entity)) {
                    world.destroyEntity(entity);
                }
            });
        };
        /**
         * @method
         * @desc Returns an entity group object by name
         * @param {string} name - Fully qualified group name
         */
        EntityGroup.getEntityGroupData = function (name) {
            var parts = name.split('.');
            if (parts.length < 2)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            var shiftedParts = parts.shift();
            var initialData = entities[shiftedParts];
            if (initialData == undefined)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            return parts.reduce(function (v, p) {
                return v[p];
            }, initialData);
        };
        return EntityGroup;
    }());
    ut.EntityGroup = EntityGroup;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityLookupCache = /** @class */ (function () {
        function EntityLookupCache() {
        }
        EntityLookupCache.getByName = function (world, name) {
            var entity;
            if (name in this._cache) {
                entity = this._cache[name];
                if (world.exists(entity))
                    return entity;
            }
            entity = world.getEntityByName(name);
            this._cache[name] = entity;
            return entity;
        };
        EntityLookupCache._cache = {};
        return EntityLookupCache;
    }());
    ut.EntityLookupCache = EntityLookupCache;
})(ut || (ut = {}));
//# sourceMappingURL=tsc-emit.js.map