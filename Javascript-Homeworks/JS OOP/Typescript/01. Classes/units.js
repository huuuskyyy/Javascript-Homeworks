var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Units;
(function (Units) {
    var Unit = (function () {
        function Unit(health, damage, x, y, defence) {
            this.health = health;
            this.damage = damage;
            this.x = x;
            this.y = y;
            this.defence = defence;
        }
        Unit.prototype.move = function (x, y) {
            this.x = x;
            this.y = y;
        };

        Unit.prototype.setRalyPoint = function (x, y) {
        };
        return Unit;
    })();
    Units.Unit = Unit;

    var GroundUnit = (function (_super) {
        __extends(GroundUnit, _super);
        function GroundUnit() {
            _super.apply(this, arguments);
            this.isGround = true;
        }
        return GroundUnit;
    })(Unit);
    Units.GroundUnit = GroundUnit;

    var GroundSoldierUnit = (function (_super) {
        __extends(GroundSoldierUnit, _super);
        function GroundSoldierUnit() {
            _super.apply(this, arguments);
        }
        GroundSoldierUnit.prototype.upgradeAttack = function (upgradeValue) {
            this.attackUpgrade += upgradeValue;
        };
        GroundSoldierUnit.prototype.upgradeDeffence = function (upgradeValue) {
            this.upgradeDeffence += upgradeValue;
        };
        return GroundSoldierUnit;
    })(GroundUnit);
    Units.GroundSoldierUnit = GroundSoldierUnit;

    var FlyUnit = (function (_super) {
        __extends(FlyUnit, _super);
        function FlyUnit() {
            _super.apply(this, arguments);
            this.isGround = false;
        }
        return FlyUnit;
    })(Unit);
    Units.FlyUnit = FlyUnit;

    var FlySoldierUnit = (function (_super) {
        __extends(FlySoldierUnit, _super);
        function FlySoldierUnit() {
            _super.apply(this, arguments);
        }
        FlySoldierUnit.prototype.upgradeAttack = function (upgradeValue) {
            this.attackUpgrade += upgradeValue;
        };
        FlySoldierUnit.prototype.upgradeDeffence = function (upgradeValue) {
            this.upgradeDeffence += upgradeValue;
        };
        return FlySoldierUnit;
    })(FlyUnit);
    Units.FlySoldierUnit = FlySoldierUnit;

    var Marine = (function (_super) {
        __extends(Marine, _super);
        function Marine() {
            _super.apply(this, arguments);
        }
        Marine.prototype.attackBoost = function () {
            this.damage *= 1.5;
            this.health *= 0.75;
        };

        Marine.prototype.throwGranade = function () {
            this.damage *= 2;
        };
        return Marine;
    })(GroundSoldierUnit);
    Units.Marine = Marine;

    var Hydra = (function (_super) {
        __extends(Hydra, _super);
        function Hydra() {
            _super.apply(this, arguments);
        }
        Hydra.prototype.heal = function () {
            this.health *= 2;
        };

        Hydra.prototype.thickSkin = function () {
            this.defenceUpgrade *= 2;
        };
        return Hydra;
    })(GroundSoldierUnit);
    Units.Hydra = Hydra;

    var Wraith = (function (_super) {
        __extends(Wraith, _super);
        function Wraith() {
            _super.apply(this, arguments);
        }
        Wraith.prototype.repair = function () {
            this.health *= 1.75;
        };

        Wraith.prototype.lightningStrike = function () {
            this.attackUpgrade *= 2;
        };
        return Wraith;
    })(FlySoldierUnit);
    Units.Wraith = Wraith;

    var Mutalisk = (function (_super) {
        __extends(Mutalisk, _super);
        function Mutalisk() {
            _super.apply(this, arguments);
        }
        Mutalisk.prototype.heal = function () {
            this.health *= 2;
        };

        Mutalisk.prototype.fastMovement = function () {
            this.x += 20;
            this.y += 20;
        };
        return Mutalisk;
    })(FlySoldierUnit);
    Units.Mutalisk = Mutalisk;
})(Units || (Units = {}));
//# sourceMappingURL=units.js.map
