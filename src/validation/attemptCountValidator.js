import { ATTEMPT_ERROR_MESSAGE } from '../constants/error.js';
import InputError from '../errors/InputError.js';

const checkIsNumber = (count) => {
  if (isNaN(count)) {
    throw new InputError(ATTEMPT_ERROR_MESSAGE.IS_NUMBER);
  }
};

const checkLength = (count) => {
  count = count.trim();
  if (count.length === 0) {
    throw new InputError(ATTEMPT_ERROR_MESSAGE.NOT_EMPTY);
  }
};

const checkIsPositiveInteger = (count) => {
  count = Number(count);
  if (count < 1) {
    throw new InputError(ATTEMPT_ERROR_MESSAGE.MINIMUM_ONE);
  }
};

const validateAttemptCount = (input) => {
  checkIsNumber(input);
  checkLength(input);
  checkIsPositiveInteger(input);

  return input;
};

export default validateAttemptCount;
