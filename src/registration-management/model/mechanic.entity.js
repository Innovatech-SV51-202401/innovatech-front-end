import User from './user.entity';
export class Mechanic extends User {
    constructor(firstName, lastName, age, address, email, phone, password, speciality, status) {
        super(firstName, lastName, age, address, email, phone, password, speciality);
        this.speciality = speciality;
        this._status = status;
    }
}