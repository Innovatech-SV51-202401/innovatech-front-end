import User from './user.entity';
export class Client extends User {
    constructor(firstName, lastName, age, address, email, phone, password, status) {
        super(firstName, lastName, age, address, email, phone, password, status);
        this.status = status;
    }


}