import validateCarNames from '../../src/validation/carNameValidator.js';
import { InputError } from '../../src/errors/InputError.js';
import { CAR_ERROR_MESSAGE } from '../../src/constants/error.js';

describe('validateCarNames', () => {
  test('자동차 이름에 문제가 없는 경우 에러를 반환하지 않는다.', () => {
    const validInput = 'car1,car2,car3';
    expect(() => validateCarNames(validInput)).not.toThrow();
  });

  test('자동차 이름 입력 중 쉼표만 있는 입력이나 공백 이름이 존재하는 경우', () => {
    const carNames = 'car1,,car2';

    expect(() => validateCarNames(carNames)).toThrow(InputError);
    expect(() => validateCarNames(carNames)).toThrow(CAR_ERROR_MESSAGE.EMPTY);
  });

  test('자동차 이름이 2대 이상 입력되었는지 확인', () => {
    const carNames = 'car1';

    expect(() => validateCarNames(carNames)).toThrow(InputError);
    expect(() => validateCarNames(carNames)).toThrow(
      CAR_ERROR_MESSAGE.MINIMUM_COUNT,
    );
  });
});
