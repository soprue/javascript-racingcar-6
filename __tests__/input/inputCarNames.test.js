import validateCarNames from '../../src/validation/carNameValidator.js';
import { CAR_ERROR_MESSAGE } from '../../src/constants/error.js';

describe('자동차 이름 유효성', () => {
  test('자동차 이름에 문제가 없는 경우 에러를 반환하지 않는다.', () => {
    const validInput = 'car1,car2,car3';
    expect(() => validateCarNames(validInput)).not.toThrow();
  });

  test('자동차 이름 입력 중 쉼표만 있는 입력이나 공백 이름이 존재하는 경우', () => {
    const validInput = 'car1,,car2';
    expect(() => validateCarNames(validInput)).toThrow(CAR_ERROR_MESSAGE.EMPTY);
  });

  test('자동차 이름이 2대 이상 입력되었는지 확인', () => {
    const validInput = 'car1';
    expect(() => validateCarNames(validInput)).toThrow(
      CAR_ERROR_MESSAGE.MINIMUM_COUNT,
    );
  });

  test('자동차 이름이 중복 입력 된 경우', () => {
    const validInput = 'car1,car1,car2';
    expect(() => validateCarNames(validInput)).toThrow(
      CAR_ERROR_MESSAGE.DUPLICATION,
    );
  });

  test('자동차의 이름이 1자 이상 5자 이하인지 확인', () => {
    const validInput = 'carcarcar,car1';
    expect(() => validateCarNames(validInput)).toThrow(
      CAR_ERROR_MESSAGE.LENGTH,
    );
  });
});
