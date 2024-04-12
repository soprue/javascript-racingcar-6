import validateCarNames from '../../src/validation/carNameValidator.js';

describe('validateCarNames', () => {
  test('자동차 이름에 문제가 없는 경우 에러를 반환하지 않는다.', () => {
    const validInput = 'car1,car2,car3';
    expect(() => validateCarNames(validInput)).not.toThrow();
  });
});
