module Units {

    export interface IFly {

        isGround: boolean;
    }

    export interface IGround {

        isGround : boolean;
    }

    export interface ISoldier {

        attackUpgrade: number;
        defenceUpgrade: number;
        upgradeAttack(upgradeValue): void;
        upgradeDeffence(upgradeValue): void;
    }

    export interface IUnit {
        health: number;
        damage: number;
    }

    export class Unit implements IUnit {

        health: number;
        damage: number;
        x : number;
        y: number; 
        defence: number;

        constructor(health: number, damage: number, x: number, y: number, defence : number) {

            this.health = health;
            this.damage = damage;
            this.x = x;
            this.y = y;
            this.defence = defence;
        }

        move(x,y): void {

            this.x = x;
            this.y = y;            
        }

        setRalyPoint(x, y): void {

        }
    }

    export class GroundUnit extends Unit implements IGround {

        isGround = true;
    }

   export class GroundSoldierUnit extends GroundUnit implements ISoldier {

        attackUpgrade: number;
        defenceUpgrade: number;

        upgradeAttack(upgradeValue): void{
            this.attackUpgrade += upgradeValue;
        }
        upgradeDeffence(upgradeValue): void {
            this.upgradeDeffence += upgradeValue;
        }

    }

    export class FlyUnit extends Unit implements IGround {

        isGround = false;
    }

    export class FlySoldierUnit extends FlyUnit implements ISoldier {

        attackUpgrade: number;
        defenceUpgrade: number;

        upgradeAttack(upgradeValue): void {
            this.attackUpgrade += upgradeValue;
        }
        upgradeDeffence(upgradeValue): void {
            this.upgradeDeffence += upgradeValue;
        }

    }

    export class Marine extends GroundSoldierUnit {

        attackBoost(): void {
            this.damage *= 1.5;
            this.health *= 0.75;
        }

        throwGranade(): void {
            this.damage *= 2;
        }
    }

    export class Hydra extends GroundSoldierUnit {

        heal(): void {
            this.health *= 2;
        }

        thickSkin(): void {
            this.defenceUpgrade *= 2;
        }

    }

    export class Wraith extends FlySoldierUnit {

        repair(): void {
            this.health *= 1.75;
        }

        lightningStrike(): void {
            this.attackUpgrade *= 2;
        }
    }

    export class Mutalisk extends FlySoldierUnit {

        heal(): void {
            this.health *= 2;
        }

        fastMovement(): void {
            this.x += 20;
            this.y += 20;
        }
    }

     
}