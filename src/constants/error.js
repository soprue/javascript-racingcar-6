const CAR_ERROR_MESSAGE = Object.freeze({
  EMPTY: `자동차 이름 중 비어 있는 입력이 포함되어 있습니다. 쉼표만 있는 입력이나 공백 이름은 허용되지 않습니다.`,
  MINIMUM_COUNT: `최소 두 대 이상의 자동차를 입력해 주세요.`,
  DUPLICATION: `중복된 자동차 이름이 존재합니다.`,
  LENGTH: `자동차 이름은 1자 이상 5자 이하여야 합니다.`,
});

const ATTEMPT_ERROR_MESSAGE = Object.freeze({
  IS_NUMBER: `시도 횟수는 숫자여야 합니다.`,
});

export { CAR_ERROR_MESSAGE, ATTEMPT_ERROR_MESSAGE };
