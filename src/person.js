  class Person {
    constructor(name, contact) {
        this.name = name;
        this.contact = contact;
        this.isActive = false;
        this.dateOfBirth = null
    }

    setName(name) {
        this.name = name
    }
    getName() {
      return this.name
    }

    setContact(contact) {
        this.contact = contact
    }
    getContact() {
        return this.contact
    }

    setIsActive() {
        this.isActive = !this.isActive
    }

    getIsActive() {
        return this.isActive
    }

    setDateOfBirth(dateOfBirth) {
        this.dateOfBirth = dateOfBirth
    }

    getDateOfBirth() {
        return this.dateOfBirth
    }

}

  module.exports = Person
