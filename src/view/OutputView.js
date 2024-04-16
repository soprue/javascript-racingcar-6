import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

const OutputView = {
  printStartMessage: () => {
    Console.print(OUTPUT_MESSAGE.RESULT_START);
  },
};

export default OutputView;
