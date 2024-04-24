export default class User {
    set firstName(value) {
        this._firstName = value;
    }

    set lastName(value) {
        this._lastName = value;
    }

    set address(value) {
        this._address = value;
    }

    set email(value) {
        this._email = value;
    }

    set phone(value) {
        this._phone = value;
    }

    set password(value) {
        this._password = value;
    }

    constructor(idUser, firstName, lastName, age, address, email, phone, password) {
    this.idUser = idUser;
        this.age = age;
        this._firstName = firstName;
        this._lastName = lastName;
        this._address = address;
        this._email = email;
        this._phone = phone;
        this._password = password;
 }

}