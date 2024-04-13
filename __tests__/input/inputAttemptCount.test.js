import { ATTEMPT_ERROR_MESSAGE } from '../../src/constants/error';
import validateAttemptCount from '../../src/validation/attemptCountValidator';

describe('시도 횟수 유효성 테스트', () => {
  test('입력한 시도 횟수가 숫자가 아닌 경우', () => {
    const validInput = 'one';
    expect(() => validateAttemptCount(validInput)).toThrow(
      ATTEMPT_ERROR_MESSAGE.IS_NUMBER,
    );
  });
});
