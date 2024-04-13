import { CAR_ERROR_MESSAGE } from '../constants/error.js';
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

const validateCarNames = (input) => {
  const trimmedCars = input.split(',').map((car) => car.trim());

  checkEmptyNames(trimmedCars);
  checkMinimumCarCount(trimmedCars);
  checkDuplication(trimmedCars);
};

export default validateCarNames;
