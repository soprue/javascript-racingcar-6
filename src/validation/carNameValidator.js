import { CAR_ERROR_MESSAGE } from '../constants/error.js';
import { CAR_NAME_LENGTH } from '../constants/options.js';
import InputError from '../errors/InputError.js';

const checkEmptyNames = (carNames) => {
  if (carNames.includes('')) {
    throw new InputError(CAR_ERROR_MESSAGE.EMPTY);
  }
};

const checkMinimumCarCount = (carNames) => {
  if (carNames.length < 2) {
    throw new InputError(CAR_ERROR_MESSAGE.MINIMUM_COUNT);
  }
};

const checkDuplication = (carNames) => {
  const uniqueCarNames = new Set(carNames);
  if (uniqueCarNames.size != carNames.length) {
    throw new InputError(CAR_ERROR_MESSAGE.DUPLICATION);
  }
};

const checkLength = (carName) => {
  if (
    carName.length < CAR_NAME_LENGTH.MIN ||
    carName.length > CAR_NAME_LENGTH.MAX
  ) {
    throw new InputError(CAR_ERROR_MESSAGE.LENGTH);
  }
};

const validateCarNames = (input) => {
  const trimmedCars = input.split(',').map((car) => car.trim());

  checkEmptyNames(trimmedCars);
  checkMinimumCarCount(trimmedCars);
  checkDuplication(trimmedCars);
  trimmedCars.forEach((carName) => {
    checkLength(carName);
  });
};

export default validateCarNames;
