export class Car {
    constructor(name) {
        this.name = name;
        this.canDrive = true;
    }
}

class Prius extends Car {
    constructor(name) {
        super(name)
        this.isGibrid = true;
    }
}

class Elgrand extends Car {
    constructor(name) {
        super(name);
        this.isGibrid = false;
    }
    setName(name) {
        this.name = name
    }

}
