var Engine;
(function (_Engine) {
    var Engine = (function () {
        function Engine() {
        }
        Engine.prototype.handleBattle = function (unitOne, unitTwo) {
            var damageFirstUnit = unitOne.damage - unitTwo.defence;
            if (damageFirstUnit <= 0) {
                damageFirstUnit = 1;
            }
            var damageSecondUnit = unitTwo.damage - unitOne.defence;
            if (damageSecondUnit <= 0) {
                damageSecondUnit = 1;
            }

            while (unitOne.health > 0 && unitTwo.health > 0) {
                console.log('Unit one deals ' + damageFirstUnit + ' to unit two');
                console.log('Unit two has ' + unitTwo.health + ' left');
                console.log('Unit two deals ' + damageSecondUnit + ' to unit one');
                console.log('Unit one has ' + unitOne.health + ' left');
                unitTwo.health -= damageFirstUnit;
                unitOne.health -= damageSecondUnit;
            }

            if (unitOne.health >= 0 && unitTwo.health >= 0) {
                console.log('Both units are dead');
                unitOne = {};
                unitTwo = {};
            } else if (unitOne.health <= 0) {
                console.log('First unit is dead');
                unitOne = {};
            } else {
                console.log('Second unit is dead');
                unitTwo = {};
            }
            console.log();
        };
        return Engine;
    })();
    _Engine.Engine = Engine;
})(Engine || (Engine = {}));
//# sourceMappingURL=engine.js.map
