export  class Vehicle {

    set rate(value) {
        this._rate = value;
    }

    set description(value) {
        this._description = value;
    }

    set vehicleStatus(value) {
        this._vehicleStatus = value;
    }


    constructor(idVehicle, vehicleType, brand, model, color, rate, idOwner, description, vehicleStatus) {
       this.idVehicule = idVehicle;
       this.vehicleType = vehicleType;
       this.brand = brand;
       this.model = model;
       this.color = color;
        this.idOwner = idOwner;
        this._rate = rate;
        this._description = description;
        this._vehicleStatus = vehicleStatus;
    }

}