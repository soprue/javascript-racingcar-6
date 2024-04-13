import InputView from '../view/InputView.js';

class RacingController {
  constructor() {}

  async prepareGame() {
    const racingCarNames = await InputView.readRacingCarNames();
    const attemptCount = await InputView.readAttemptCount();
  }

  startRace() {}

  finishRace() {}
}

export default RacingController;
