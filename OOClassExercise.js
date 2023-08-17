//Part I
class Vehicle {
    constructor (
        make,
        model,
        year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

    honk() {
        return "Beep";
    }

    toString() {
        return `This is a ${this.make} ${this.model} from ${this.year}`;
    }
}

//Part II

class Car extends Vehicle{
    numWheels(){
        return 4;
    }
} 

//Part III 

class Motorcyle extends Vehicle {
    revEngine(){
        return "VROOM";
    }

    numWheels(){
        return 2;
    }
}

//Part IV

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed here!";
        }
        if(this.vehicles.length >= this.capacity) {
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}