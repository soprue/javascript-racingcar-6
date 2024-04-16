import InputView from '../view/InputView.js';

class RacingController {
  constructor(carNames = [], attemptCount = 0) {
    this.carNames = carNames;
    this.attemptCount = attemptCount;
  }

  async prepareGame() {
    const racingCarNames = await InputView.readRacingCarNames();
    const attemptCount = await InputView.readAttemptCount();

    this.carNames = racingCarNames;
    this.attemptCount = attemptCount;
  }

  startRace() {}

  finishRace() {}
}

export default RacingController;
