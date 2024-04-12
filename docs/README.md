# 📄 구현할 기능 목록

### 1. **게임을 시작한다.**

- [x] App 클래스의 play 메서드를 호출한다.

### 2. **게임을 준비한다.**

- [x] 자동차의 이름을 입력받기 위해, 안내 메시지를 출력한다. => `경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)`
- [x] 경주할 자동차의 이름을 입력받는다. => `pobi,woni,jun`
  - [x] 자동차의 이름을 쉼표를 기준으로 구분한다.
  - [ ] 2대 이상의 자동차가 입력되었는지 확인한다.
  - [ ] 자동차 이름이 중복 입력 되지 않았는지 확인한다.
  - [ ] 자동차의 이름이 1자 이상 5자 이하인지 확인한다.
  - [ ] 쉼표(,)만 입력되지 않았는지 확인한다.
- [ ] 시도 횟수를 입력받기 위해, 안내 메시지를 출력한다. => `시도할 횟수는 몇 회인가요?`
- [ ] 시도 횟수를 입력받는다. => `1`
  - [ ] 입력 받은 시도 횟수가 숫자인지 확인한다.
  - [ ] 입력 받은 시도 횟수의 길이가 1 이상인지 확인한다.
  - [ ] 입력 받은 시도 횟수가 1 이상의 정수인지 확인한다.
- [ ] 입력 받은 자동차 정보를 저장한다.

### 3. **게임을 진행한다.**

- [ ] 게임의 진행 안내 메시지를 출력한다. => `실행 결과`
- [ ] 입력받은 시도할 횟수를 반복하는 메소드를 구성한다.
  - [ ] 각각의 자동차들이 무작위 값을 뽑는다. => `MissionUtils.Random.pickNumberInRange(0, 9);`
  - [ ] 무작위 값이 4 이상일 때만 전진한다.
  - [ ] 1회의 차수가 끝나면, 자동차들의 이름과 현재 전진 거리를 출력한다.

### 4. **게임의 우승자를 발표한다.**

- [ ] 모든 경주가 끝나면 결과를 발표한다.
  - [ ] 단독 우승일 경우 단독 우승자를 출력한다. => `최종 우승자 : pobi`
  - [ ] 공동 우승일 경우 쉼표를 기준으로 출력한다. => `최종 우승자 : pobi, jun`

<br />
<br />

# 💯 테스트 작성 목록

// TODO: 수정

```bash
/__tests__
  /input
    - inputCarNames.test.js      # 자동차 이름 입력 처리 테스트
    - inputAttemptCount.test.js  # 시도 횟수 입력 처리 테스트
  /game
    - gameLogic.test.js          # 게임 로직과 자동차 전진 조건 테스트
  /output
    - resultDisplay.test.js      # 결과 출력 테스트
  /integration
    - appIntegration.test.js     # 전체 애플리케이션 통합 테스트
```