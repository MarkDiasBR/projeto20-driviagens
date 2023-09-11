import { conflictingResource } from './conflictingResource.js';
import { incompleteData } from './incompleteData.js';
import { notFound } from './notFound.js';
import { badRequest } from './badRequest.js';
import { tooManyResults } from './tooManyResults.js';
import { invalidPageValue } from './invalidPageValue.js';
import { dbConnectionFailed } from './dbConnectionFailed.js';

const errors = {
  conflictingResource,
  incompleteData,
  notFound,
  badRequest,
  tooManyResults,
  invalidPageValue,
  dbConnectionFailed,
};

export default errors;