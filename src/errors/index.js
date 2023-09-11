import { conflictingResource } from './conflictingResource.js';
import { incompleteData } from './incompleteData.js';
import { notFound } from './notFound.js';
import { badRequest } from './badRequest.js';
import { tooManyResults } from './tooManyResults.js';

const errors = {
  conflictingResource,
  incompleteData,
  notFound,
  badRequest,
  tooManyResults
};

export default errors;