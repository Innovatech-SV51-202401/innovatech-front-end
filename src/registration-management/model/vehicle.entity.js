export default class Vehicule {
    set idVehicule(value) {
        this._idVehicule = value;
    }
    set tipoVehicule(value) {
        this._tipoVehicule = value;
    }
    set marca(value) {
        this._marca = value;
    }
    set modelo(value) {
        this._modelo = value;
    }
    set color(value) {
        this._color = value;
    }
    set tarifa(value) {
        this._tarifa = value;
    }
    set idOwner(value) {
        this._idOwner = value;
    }
    set descripcion(value) {
        this._descripcion = value;
    }

    constructor(idVehicule, tipoVehicule, marca, modelo, color, tarifa, idOwner, descripcion) {
        this._idVehicule = idVehicule;
        this._tipoVehicule = tipoVehicule;
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
        this._tarifa = tarifa;
        this._idOwner = idOwner;
        this._descripcion = descripcion;
    }

}