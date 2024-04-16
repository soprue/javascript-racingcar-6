import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class RacingController {
  constructor(carNames = [], attemptCount = 0) {
    this.racingBoard = carNames.reduce((acc, name) => {
      acc[name] = 0;
      return acc;
    }, {});
    this.attemptCount = attemptCount;
  }

  async prepareGame() {
    const racingCarNames = await InputView.readRacingCarNames();
    const attemptCount = await InputView.readAttemptCount();

    this.racingBoard = racingCarNames.reduce((acc, carName) => {
      acc[carName] = 0;
      return acc;
    }, {});
    this.attemptCount = attemptCount;
  }

  startRace() {
    OutputView.printStartMessage();

    for (let i = 0; i < this.attemptCount; i++) {
      this.playRound();
    }
  }

  playRound() {
    Object.keys(this.racingBoard).forEach((carName) => {
      const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    });
  }

  finishRace() {}
}

export default RacingController;
