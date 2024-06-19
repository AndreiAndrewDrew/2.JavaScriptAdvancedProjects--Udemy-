'use strict'

class Weapon {
    updateWeapon() { }
    upgradeWeapon() { }
    dealDamage() {

    }
    //In clasa Parinte scrim numai metodele si proprietatsile
    //care sun comune pentru oarice tip de arma
}

class Pistol extends Weapon {
    shoot() {
        //fire
        this.dealDamage()
    }
}

class Sword extends Weapon {
    strike() {
        //fire
        this.dealDamage()
    }
}