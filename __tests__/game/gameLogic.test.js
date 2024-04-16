import RacingController from '../../src/controller/RacingController.js';
import InputView from '../../src/view/InputView.js';

jest.mock('../../src/view/InputView', () => ({
  readRacingCarNames: jest.fn(),
  readAttemptCount: jest.fn(),
}));

describe('RacingController 기능 테스트', () => {
  const carNames = ['pobi', 'woony', 'jun'];
  const attemptCount = 3;

  beforeEach(() => {
    // 각 테스트 전에 InputView의 반환 값을 설정
    InputView.readRacingCarNames.mockResolvedValue(carNames);
    InputView.readAttemptCount.mockResolvedValue(attemptCount);
  });

  test('자동차 이름, 시도 횟수를 모두 입력하였을 때 정보가 제대로 저장되는지', async () => {
    const racingController = new RacingController();
    await racingController.prepareGame();

    // racingBoard와 attemptCount가 올바르게 설정되었는지 확인
    carNames.forEach((carName) => {
      expect(racingController.racingBoard).toHaveProperty(carName, 0);
    });
    expect(racingController.attemptCount).toBe(attemptCount);
  });
});
