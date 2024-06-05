import User from './user.entity';

export class Client extends User {

    reserve(Vehicle, statusValue){
        Vehicle.vehicleStatus(statusValue);
    }
    constructor(idUser, firstName, lastName, age, address, email, phone, password, useStatus) {
        super(idUser, firstName, lastName, age, address, email, phone, password, useStatus);
        this.useStatus = useStatus;
    }

}