import { test } from 'node:test';
import assert from 'node:assert';
import {
  getInitialMansion,
  validateDates,
  validateGuests,
  validatePersonalDetails,
  getMansionNameByPath
} from './inquiry.ts';

test('getMansionNameByPath - mapping pathnames to mansion names', () => {
  assert.strictEqual(getMansionNameByPath('/dd'), 'Dreams & Desires Mansion');
  assert.strictEqual(getMansionNameByPath('/oo/'), 'Oasis Oakey Mansion');
  assert.strictEqual(getMansionNameByPath('cc'), 'Celestial Mansion Club');
  assert.strictEqual(getMansionNameByPath('/unknown'), '');
  assert.strictEqual(getMansionNameByPath(''), '');
});

test('getInitialMansion - parsing URL search parameters', () => {
  // Happy paths
  assert.strictEqual(
    getInitialMansion('?mansion=Dreams%20%26%20Desires%20Mansion'),
    'Dreams & Desires Mansion'
  );
  assert.strictEqual(
    getInitialMansion('?mansion=Oasis%20Oakey%20Mansion'),
    'Oasis Oakey Mansion'
  );

  // Failure / invalid inputs
  assert.strictEqual(getInitialMansion('?mansion=Unknown%20Mansion'), '');
  assert.strictEqual(getInitialMansion('?mansion='), '');
  assert.strictEqual(getInitialMansion(''), '');

  // Edge cases
  assert.strictEqual(getInitialMansion('?other=Dreams%20%26%20Desires%20Mansion'), '');
});

test('validateDates - checking date ranges', () => {
  // Happy path
  const happyResult = validateDates('2026-06-16', '2026-06-20');
  assert.strictEqual(happyResult.isValid, true);
  assert.strictEqual(happyResult.error, undefined);

  // Failure: same dates
  const sameResult = validateDates('2026-06-16', '2026-06-16');
  assert.strictEqual(sameResult.isValid, false);
  assert.strictEqual(sameResult.error, 'Check-out date must be after check-in date.');

  // Failure: check-out before check-in
  const invertedResult = validateDates('2026-06-20', '2026-06-16');
  assert.strictEqual(invertedResult.isValid, false);
  assert.strictEqual(invertedResult.error, 'Check-out date must be after check-in date.');

  // Edge cases: missing check-in or check-out
  const missingCheckIn = validateDates('', '2026-06-16');
  assert.strictEqual(missingCheckIn.isValid, false);
  assert.strictEqual(missingCheckIn.error, 'Both check-in and check-out dates are required.');

  const missingCheckOut = validateDates('2026-06-16', '');
  assert.strictEqual(missingCheckOut.isValid, false);
  assert.strictEqual(missingCheckOut.error, 'Both check-in and check-out dates are required.');

  // Invalid date formats
  const invalidDate = validateDates('not-a-date', '2026-06-16');
  assert.strictEqual(invalidDate.isValid, false);
  assert.strictEqual(invalidDate.error, 'Invalid date format.');
});

test('validateGuests - checking guest range', () => {
  // Happy paths
  assert.strictEqual(validateGuests(1).isValid, true);
  assert.strictEqual(validateGuests(100).isValid, true);
  assert.strictEqual(validateGuests('5').isValid, true);

  // Failure: out of bounds
  assert.strictEqual(validateGuests(0).isValid, false);
  assert.strictEqual(validateGuests(101).isValid, false);
  assert.strictEqual(validateGuests(-5).isValid, false);

  // Failure: non-numeric string
  assert.strictEqual(validateGuests('abc').isValid, false);
});

test('validatePersonalDetails - verifying fields', () => {
  // Happy path
  const happyResult = validatePersonalDetails('John Doe', 'john@example.com', '123-456-7890');
  assert.strictEqual(happyResult.isValid, true);

  // Failure: missing name
  const missingName = validatePersonalDetails('', 'john@example.com', '123-456-7890');
  assert.strictEqual(missingName.isValid, false);
  assert.strictEqual(missingName.error, 'Full name is required.');

  // Failure: invalid email format
  const invalidEmail = validatePersonalDetails('John Doe', 'john-at-example.com', '123-456-7890');
  assert.strictEqual(invalidEmail.isValid, false);
  assert.strictEqual(invalidEmail.error, 'A valid email is required.');

  // Failure: missing phone
  const missingPhone = validatePersonalDetails('John Doe', 'john@example.com', '');
  assert.strictEqual(missingPhone.isValid, false);
  assert.strictEqual(missingPhone.error, 'Phone number is required.');
});
