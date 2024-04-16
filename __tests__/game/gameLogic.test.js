import RacingController from '../../src/controller/RacingController.js';

describe('RacingController 기능 테스트', () => {
  const carNames = ['pobi', 'woony', 'jun'];
  const attemptCount = 3;

  test('자동차 이름, 시도 횟수를 모두 입력하였을 때 정보가 제대로 저장되는지', async () => {
    // RacingController 인스턴스 생성
    const racingController = new RacingController(carNames, attemptCount);

    const expectedRacingBoard = carNames.reduce((acc, name) => {
      acc[name] = 0;
      return acc;
    }, {});

    // carNames와 attemptCount가 올바르게 설정되었는지 확인
    expect(racingController.racingBoard).toEqual(expectedRacingBoard);
    expect(racingController.attemptCount).toBe(attemptCount);
  });
});
