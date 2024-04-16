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
    console.log(`최종 우승자 : ${winners.join(', ')}`);
  },
};

export default OutputView;
