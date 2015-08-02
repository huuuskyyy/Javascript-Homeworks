module Engine {

    export  interface IEngine {

        handleBattle(unitOne, unitTwo) : void;
    }

   export class Engine implements IEngine {

       constructor() {

       }

      handleBattle(unitOne, unitTwo) {
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
        }
    }
} 

