import { ATTEMPT_ERROR_MESSAGE } from '../constants/error';
import InputError from '../errors/InputError';

const checkIsNumber = (count) => {
  if (isNaN(count)) {
    throw new InputError(ATTEMPT_ERROR_MESSAGE.IS_NUMBER);
  }
};

const validateAttemptCount = (input) => {
  checkIsNumber(input);
};

export default validateAttemptCount;
