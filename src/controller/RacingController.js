import InputView from '../view/InputView.js';

class RacingController {
  constructor() {}

  async prepareGame() {
    const racingCarNames = await InputView.readRacingCarNames();
  }

  startRace() {}

  finishRace() {}
}

export default RacingController;
