const Person = require('./person')

class Parent extends Person {
    constructor(whoWork,name, contact ) {
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

module.exports = Parent