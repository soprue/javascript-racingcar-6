class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  advance(randomNumber) {
    if (randomNumber >= 4) {
      this.distance++;
    }
  }
}
export default Car;
