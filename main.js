class Knight {
  constructor(position = [5,0], goalPosition = [5,0]) {
    this.position = position;
    this.goalPosition = goalPosition;
    this.possibleSolutionsArray = new Array;
    this.possibleSolutionsArray[0] = this.position;
    this.numberOfTurns = 0;
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
      let currentPos = new Array;
      
      while (true) {
        if (this.possibleSolutionsArray.some(pos => JSON.stringify(pos) === JSON.stringify(this.goalPosition))) {
          console.log(this.numberOfTurns);
          return;
        }
        else{
          //currentPos = [...this.possibleSolutionsArray.shift()];
          this.possibleSolutionsArray.forEach(el => {
            this.calculateAllPossible(el);
          });
          this.numberOfTurns++;
          console.log(this.possibleSolutionsArray);
        }
      }
    }
    calculateAllPossible(pos){
    this.twoUpOneLeft(pos);
    this.oneUpTwoLeft(pos);
    this.twoDownOneRight(pos);
    this.oneUpTwoRight(pos);
    this.twoDownOneLeft(pos);
    this.oneDownTwoLeft(pos);
    this.twoDownOneRight(pos);
    this.oneDownTwoRight(pos);
  }
  twoUpOneLeft(pos) {
    let current = [...pos];
    current[0] -=  1;
    current[1] += 2;
    if (this.checkIfOutOfBounds(current)) {
      this.possibleSolutionsArray.push(current);
    }
    return 0;
  }
  oneUpTwoLeft(pos) {
    let current = [...pos];
    current[0] -=  2;
    current[1] += 1;
    if (this.checkIfOutOfBounds(current)) {
      this.possibleSolutionsArray.push(current);
    } else return;
  }
  twoUpOneRight(pos) {
    let current = [...pos];
    current[0] +=  1;
    current[1] += 2;
    if (this.checkIfOutOfBounds(current)) {
      this.possibleSolutionsArray.push(current);
    } else return;
  }
  oneUpTwoRight(pos) {
    let current = [...pos];
    current[0] +=  2;
    current[1] += 1;
    if (this.checkIfOutOfBounds(current)) {
      this.possibleSolutionsArray.push(current);
    } else return;
  }
  twoDownOneRight(pos) {
    let current = [...pos];
    current[0] +=  1;
    current[1] -= 2;
    if (this.checkIfOutOfBounds(current)) {
      this.possibleSolutionsArray.push(current);
    } else return;
  }
  oneDownTwoRight(pos) {
    let current = [...pos];
    current[0] +=  2;
    current[1] -= 1;
    if (this.checkIfOutOfBounds(current)) {
      this.possibleSolutionsArray.push(current);
    } else return;
  }
  twoDownOneLeft(pos) {
    let current = [...pos];
    current[0] -=  1;
    current[1] -= 2;
    if (this.checkIfOutOfBounds(current)) {
      this.possibleSolutionsArray.push(current);
    } else return;
  }
  oneDownTwoLeft(pos) {
    let current = [...pos];
    current[0] -=  2;
    current[1] -= 1;
    if (this.checkIfOutOfBounds(current)) {
      this.possibleSolutionsArray.push(current);
    } else return;
  }
}

let startPos1 = new Knight([5,5], [5,0]);
startPos1.nextMove();