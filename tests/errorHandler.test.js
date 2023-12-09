// tests/errorHandler.test.js

const ErrorHandler = require('../src/errorHandler');

describe('ErrorHandler', () => {
  let errorHandler;
  let consoleSpy;

  beforeEach(() => {
    errorHandler = new ErrorHandler();
    consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should handle SyntaxError correctly', () => {
    const syntaxError = new SyntaxError('Invalid syntax');
    errorHandler.handle(syntaxError);
    expect(consoleSpy).toHaveBeenCalledWith('Syntax Error:', syntaxError.message);
    expect(consoleSpy).toHaveBeenCalledWith(syntaxError.stack);
  });

  test('should handle TypeError correctly', () => {
    const typeError = new TypeError('Invalid type');
    errorHandler.handle(typeError);
    expect(consoleSpy).toHaveBeenCalledWith('Type Error:', typeError.message);
    expect(consoleSpy).toHaveBeenCalledWith(typeError.stack);
  });

  test('should handle RangeError correctly', () => {
    const rangeError = new RangeError('Invalid range');
    errorHandler.handle(rangeError);
    expect(consoleSpy).toHaveBeenCalledWith('Range Error:', rangeError.message);
    expect(consoleSpy).toHaveBeenCalledWith(rangeError.stack);
  });

  test('should handle generic errors correctly', () => {
    const genericError = new Error('Generic error');
    errorHandler.handle(genericError);
    expect(consoleSpy).toHaveBeenCalledWith('An error occurred:', genericError.message);
    expect(consoleSpy).toHaveBeenCalledWith(genericError.stack);
  });
});
