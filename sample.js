"use strict";
const Car = function (make, speed) {
  this.make = make;
  this.speed = `${speed} km/hr`;
};

Car.prototype.accelerate = function () {
  console.log(parseInt(this.speed) + 10 + "km");
};
Car.prototype.brake = function () {
  console.log(parseInt(this.speed) - 10 + "km");
};

const bima = new Car("BMW", 120);
const merc = new Car("Mercedes", 95);
merc.accelerate();
merc.brake();
bima.accelerate();
bima.brake();

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
//----linking the child-prototype to the parent-prototype-----.
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
//---performing polymorphism---.
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log();
};

EV.prototype.constructor = EV;

const tesla = new EV("Tesla", 120, 23);
EV.accelerate();
