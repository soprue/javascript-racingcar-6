import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';

const InputView = {
  readRacingCarNames: async () => {
    const inputCars = await Console.readLineAsync(INPUT_MESSAGE.CARS_NAME);
    return validateCarNames(inputCars);
  },
};

export default InputView;
