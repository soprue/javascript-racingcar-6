class InputError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
    this.name = this.constructor.name;
  }
}

export default InputError;
