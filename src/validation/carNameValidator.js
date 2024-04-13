import { CAR_ERROR_MESSAGE } from '../constants/error.js';
import InputError from '../errors/InputError.js';

const checkEmptyNames = (carNames) => {
  if (carNames.includes('')) {
    throw new InputError(CAR_ERROR_MESSAGE.EMPTY);
  }
};

const checkMinimumCarCount = (racingCarNames) => {
  if (racingCarNames.length < 2) {
    throw new InputError(CAR_ERROR_MESSAGE.MINIMUM_COUNT);
  }
};

const validateCarNames = (input) => {
  const trimmedCars = input.split(',').map((car) => car.trim());

  checkEmptyNames(trimmedCars);
  checkMinimumCarCount(trimmedCars);
};

export default validateCarNames;
