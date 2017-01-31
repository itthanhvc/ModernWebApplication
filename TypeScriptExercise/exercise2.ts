// Exercise 2: Class
class Car {
    constructor (public money: string, public acceleration: number = 0){
    }
    honk (): void{
        console.log(`${this.money} is saying: Tooooooot!`);
    }
     accelerate (speed: number): void{
         this.acceleration += speed;
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);