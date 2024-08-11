let car = { 
    name: 'Volkswagen',
    model: 'Beetle',
    weight: 850,
    color: 'red',
    start: function() {
        let message = this.name + ' ' + this.model;
        message += ' is ready!';
        console.log(message);
    }
};

car.weight = 945;
car.maxspeed = 185;
car.start = function() {
    console.log('This car is ready to run!')
}

console.log(car.weight)
console.log(car.maxspeed)
car.start();