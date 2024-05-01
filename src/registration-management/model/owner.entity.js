import User from "./user.entity.js";
export class Owner extends User {
    constructor(idUser, firstName, lastName, age, address, email, phone, password, vehicles) {
        super(idUser, firstName, lastName, age, address, email, phone, password);
        this.vehicles = vehicles;
    }

}