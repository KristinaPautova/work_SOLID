const Person = require('./person')

class Parent extends Person {
    constructor(name, contact, whoWork) {
        super(name,contact);
        this.whoWork = whoWork;
    }

    setWhoWork(whoWork) {
        this.whoWork = whoWork
    }

    getWhoWork() {
      return this.whoWork;
    }

}