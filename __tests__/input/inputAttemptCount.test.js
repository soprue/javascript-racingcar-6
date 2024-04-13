import { ATTEMPT_ERROR_MESSAGE } from '../../src/constants/error.js';
import validateAttemptCount from '../../src/validation/attemptCountValidator.js';

describe('시도 횟수 유효성 테스트', () => {
  test('입력한 시도 횟수가 숫자가 아닌 경우', () => {
    const validInput = 'one';
    expect(() => validateAttemptCount(validInput)).toThrow(
      ATTEMPT_ERROR_MESSAGE.IS_NUMBER,
    );
  });

  test('입력한 시도 횟수가 공백인 경우', () => {
    const validInput = ' ';
    expect(() => validateAttemptCount(validInput)).toThrow(
      ATTEMPT_ERROR_MESSAGE.NOT_EMPTY,
    );
  });

  test('입력한 시도 횟수가 1 이상의 정수인지 확인', () => {
    const validInput = '-1';
    expect(() => validateAttemptCount(validInput)).toThrow(
      ATTEMPT_ERROR_MESSAGE.MINIMUM_ONE,
    );
  });
});
