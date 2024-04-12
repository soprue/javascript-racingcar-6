import { CAR_ERROR_MESSAGE } from '../constants/error.js';
import InputError from '../errors/InputError.js';

const checkEmptyNames = (carNames) => {
  if (carNames.includes('')) {
    throw new InputError(CAR_ERROR_MESSAGE.EMPTY);
  }
};

const validateCarNames = (input) => {
  const trimmedCars = input.split(',').map((car) => car.trim());

  checkEmptyNames(trimmedCars);
};

export default validateCarNames;
