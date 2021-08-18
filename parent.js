const Person = require('./person')

class Parent extends Person {
    constructor(name, contact) {
        super(name,contact);
        this.whoWork = whoWork;
    }

    setwhoWork(whoWork){
        this.whoWork = whoWork
    }

}