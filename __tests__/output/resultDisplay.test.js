import RacingController from '../../src/controller/RacingController.js';
import OutputView from '../../src/view/OutputView.js';

jest.mock('../../src/view/OutputView');

describe('결과 출력 테스트', () => {
  let racingController;
  const carNames = ['pobi', 'woony', 'jun'];
  const attemptCount = 3;

  beforeEach(() => {
    racingController = new RacingController(carNames, attemptCount);
    OutputView.printWinners.mockClear();
  });

  test('단독 우승일 경우 단독 우승자를 출력하는지', () => {
    racingController.racingBoard = {
      pobi: 5,
      woony: 3,
      jun: 4,
    };
    racingController.finishRace();
    expect(OutputView.printWinners).toHaveBeenCalledWith(['pobi']);
  });

  test('공동 우승일 경우 쉼표를 기준으로 출력하는지', () => {
    racingController.racingBoard = {
      pobi: 5,
      woony: 3,
      jun: 5,
    };
    racingController.finishRace();
    expect(OutputView.printWinners).toHaveBeenCalledWith(['pobi', 'jun']);
  });
});
