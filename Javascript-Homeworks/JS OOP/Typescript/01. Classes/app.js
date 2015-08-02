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

    var GroundUnit = (function (_super) {
        __extends(GroundUnit, _super);
        function GroundUnit() {
            _super.apply(this, arguments);
            this.isGround = true;
        }
        return GroundUnit;
    })(Unit);

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

    var FlyUnit = (function (_super) {
        __extends(FlyUnit, _super);
        function FlyUnit() {
            _super.apply(this, arguments);
            this.isGround = false;
        }
        return FlyUnit;
    })(Unit);

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

    var Marine = (function (_super) {
        __extends(Marine, _super);
        function Marine() {
            _super.apply(this, arguments);
        }
        return Marine;
    })(GroundSoldierUnit);

    var Hydra = (function (_super) {
        __extends(Hydra, _super);
        function Hydra() {
            _super.apply(this, arguments);
        }
        return Hydra;
    })(GroundSoldierUnit);
})(Units || (Units = {}));
//# sourceMappingURL=app.js.map
