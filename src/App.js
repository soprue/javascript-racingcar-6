import RacingController from './controller/RacingController.js';

class App {
  async play() {
    const racingController = new RacingController();

    await racingController.prepareGame(); // 게임 준비
    racingController.startRace(); // 게임 시작
    racingController.finishRace(); // 게임 종료 및 결과 출력
  }
}

export default App;
