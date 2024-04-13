import { ATTEMPT_ERROR_MESSAGE } from '../constants/error';
import InputError from '../errors/InputError';

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

const validateAttemptCount = (input) => {
  checkIsNumber(input);
  checkLength(input);
};

export default validateAttemptCount;
