import ErrorRepository from '../errors.js';

const repo = new ErrorRepository();

test('getting error description', () => {
  expect(repo.translate(100)).toBe('input error');
});

test('getting unknown error', () => {
  expect(repo.translate(500)).toBe('Unknown error');
});
