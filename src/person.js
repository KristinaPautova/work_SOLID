  class Person {
    constructor(name, contact, isActive, dateOfBirth) {
        this.name = name;
        this.contact = contact;
        this.isActive = isActive;
        this.dateOfBirth = dateOfBirth
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

    setIsActive(active) {
        this.isActive = active
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
