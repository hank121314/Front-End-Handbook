function Car() {
  this.num_wheels = 4;
  return { num_wheels: 37 };
}

var car = new Car();
console.log(car.num_wheels); // 37

function Room() {
  this.persons = 2;
  return 'should use new instead';
}

var room = new Room();
console.log(room.persons); // 2
console.log(Room()); // should use new instead
