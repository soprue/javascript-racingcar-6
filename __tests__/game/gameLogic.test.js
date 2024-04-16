import { MissionUtils } from '@woowacourse/mission-utils';
import RacingController from '../../src/controller/RacingController.js';
import InputView from '../../src/view/InputView.js';
import OutputView from '../../src/view/OutputView.js';

jest.mock('../../src/view/InputView', () => ({
  readRacingCarNames: jest.fn(),
  readAttemptCount: jest.fn(),
}));

jest.mock('../../src/view/OutputView');

jest.mock('@woowacourse/mission-utils', () => ({
  MissionUtils: {
    Random: {
      pickNumberInRange: jest.fn(),
    },
    Console: {
      print: jest.fn(),
    },
  },
}));

describe('RacingController 기능 테스트', () => {
  const carNames = ['pobi', 'woony', 'jun'];
  const attemptCount = 3;

  beforeEach(() => {
    jest.clearAllMocks();
    InputView.readRacingCarNames.mockResolvedValue(carNames);
    InputView.readAttemptCount.mockResolvedValue(attemptCount);
    MissionUtils.Random.pickNumberInRange.mockReset();
  });

  test('자동차 이름, 시도 횟수를 모두 입력하였을 때 정보가 제대로 저장되는지', async () => {
    const racingController = new RacingController();
    await racingController.prepareRace();

    // racingBoard와 attemptCount가 올바르게 설정되었는지 확인
    carNames.forEach((carName) => {
      expect(racingController.racingBoard).toHaveProperty(carName, 0);
    });
    expect(racingController.attemptCount).toBe(attemptCount);
  });

  test('각 라운드에서 자동차들이 무작위 값에 따라 전진하는지 확인', () => {
    const racingController = new RacingController(carNames, attemptCount);
    MissionUtils.Random.pickNumberInRange.mockReturnValue(5);

    for (let i = 0; i < attemptCount; i++) {
      racingController.playRound();
    }

    carNames.forEach((carName) => {
      expect(racingController.racingBoard[carName]).toBe(attemptCount);
    });
  });

  test('각 라운드에서 자동차들이 무작위 값에 따라 정지하는지 확인', () => {
    const racingController = new RacingController(carNames, attemptCount);
    MissionUtils.Random.pickNumberInRange.mockReturnValue(3);

    for (let i = 0; i < attemptCount; i++) {
      racingController.playRound();
    }

    carNames.forEach((carName) => {
      expect(racingController.racingBoard[carName]).toBe(0);
    });
  });

  test('라운드가 끝날 때마다 자동차들의 이름과 현재 전진 거리가 올바르게 출력되는지', () => {
    const racingController = new RacingController(carNames, attemptCount);
    MissionUtils.Random.pickNumberInRange.mockReturnValue(5); // 전진을 보장

    racingController.startRace();

    expect(OutputView.printStartMessage).toHaveBeenCalledTimes(1);
    expect(OutputView.printCarPosition).toHaveBeenCalledTimes(
      carNames.length * attemptCount,
    );
    expect(OutputView.printNewLine).toHaveBeenCalledTimes(attemptCount);
  });
});
