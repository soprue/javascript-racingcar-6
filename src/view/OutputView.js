import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

const OutputView = {
  printStartMessage: () => {
    Console.print(OUTPUT_MESSAGE.RESULT_START);
  },

  printCarPosition: (carName, position) => {
    Console.print(`${carName} : ${'-'.repeat(position)}`);
  },

  printNewLine: () => {
    Console.print('');
  },

  printWinners: (winners) => {
    console.log(`${OUTPUT_MESSAGE.FINAL_WINNERS} : ${winners.join(', ')}`);
  },
};

export default OutputView;
