import ErrorRepository from './errors.js';

const repo = new ErrorRepository();
console.log(repo.translate(100));
console.log(repo.translate(500));
