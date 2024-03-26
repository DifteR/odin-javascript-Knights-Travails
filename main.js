class Knight {
  constructor(position = [1, 0]) {
    this.position = position;
  }
  checkIfOutOfBounds(newPosition) {
    let notOutOfBounds = true;
    if (
      newPosition[0] < 0 ||
      newPosition[0] > 7 ||
      newPosition[1] < 0 ||
      newPosition[1] > 7
    ) {
      notOutOfBounds = false;
    }
    return notOutOfBounds;
  }
  nextMove() {
    let possibleNextMoves = new Array();
  }
  twoUpOneLeft() {
    let current = this.position;
    let x = current[0] - 1;
    let y = current[1] + 2;
    if (this.checkIfOutOfBounds([x], [y])) {
      return current;
    } else return -1;
  }
  twoUpOneRight() {
    let current = this.position;
    let x = current[0] + 1;
    let y = current[1] + 2;
    if (this.checkIfOutOfBounds([x], [y])) {
      return current;
    } else return -1;
  }
  twoDownOneRight() {
    let current = this.position;
    let x = current[0] + 1;
    let y = current[1] - 2;
    if (this.checkIfOutOfBounds([x], [y])) {
      return current;
    } else return -1;
  }
  twoDownOneLeft() {
    let current = this.position;
    let x = current[0] - 1;
    let y = current[1] - 2;
    if (this.checkIfOutOfBounds([x], [y])) {
      return current;
    } else return -1;
  }
}

let newKnight = new Knight();
console.log(newKnight.twoUpOneLeft());
