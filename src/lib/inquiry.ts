/**
 * Validation and initialization logic for the Inquiry Form.
 */

export const ALLOWED_MANSIONS = [
  'Dreams & Desires Mansion',
  'Oasis Oakey Mansion',
  'Retreat of Revelation Mansion',
  'Enchanted Elegant Mansion',
  'Celestial Mansion Club',
  'Ultimate Utopia Mansion'
];

/**
 * Parses the search string (e.g. "?mansion=Dreams%20%26%20Desires%20Mansion")
 * and returns the pre-selected mansion if it's valid.
 */
export function getInitialMansion(searchParamsString: string): string {
  if (!searchParamsString) return '';
  
  // URLSearchParams expects a string without the leading '?' but can handle it
  const params = new URLSearchParams(searchParamsString);
  const mansionParam = params.get('mansion');
  
  if (mansionParam && ALLOWED_MANSIONS.includes(mansionParam)) {
    return mansionParam;
  }
  
  return '';
}

/**
 * Validates the check-in and check-out dates.
 * Check-out date must be after check-in date.
 */
export function validateDates(checkIn: string, checkOut: string): { isValid: boolean; error?: string } {
  if (!checkIn || !checkOut) {
    return { isValid: false, error: 'Both check-in and check-out dates are required.' };
  }
  
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  
  if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
    return { isValid: false, error: 'Invalid date format.' };
  }
  
  if (checkInDate >= checkOutDate) {
    return { isValid: false, error: 'Check-out date must be after check-in date.' };
  }
  
  return { isValid: true };
}

/**
 * Validates the guests count.
 * Must be a number between 1 and 100 inclusive.
 */
export function validateGuests(guests: string | number): { isValid: boolean; error?: string } {
  const num = typeof guests === 'string' ? parseInt(guests, 10) : guests;
  
  if (isNaN(num) || num < 1 || num > 100) {
    return { isValid: false, error: 'Guests must be a number between 1 and 100.' };
  }
  
  return { isValid: true };
}

/**
 * Validates personal details.
 * Full name, email, and phone are required. Email must contain '@'.
 */
export function validatePersonalDetails(name: string, email: string, phone: string): { isValid: boolean; error?: string } {
  if (!name || !name.trim()) {
    return { isValid: false, error: 'Full name is required.' };
  }
  
  if (!email || !email.trim() || !email.includes('@')) {
    return { isValid: false, error: 'A valid email is required.' };
  }
  
  if (!phone || !phone.trim()) {
    return { isValid: false, error: 'Phone number is required.' };
  }
  
  return { isValid: true };
}

/**
 * Maps a pathname (e.g. "/dd" or "dd/") to the corresponding mansion name.
 */
export function getMansionNameByPath(pathname: string): string {
  if (!pathname) return '';
  const path = pathname.replace(/^\/|\/$/g, '');
  switch (path) {
    case 'dd':
      return 'Dreams & Desires Mansion';
    case 'oo':
      return 'Oasis Oakey Mansion';
    case 'rr':
      return 'Retreat of Revelation Mansion';
    case 'ee':
      return 'Enchanted Elegant Mansion';
    case 'cc':
      return 'Celestial Mansion Club';
    case 'uu':
      return 'Ultimate Utopia Mansion';
    default:
      return '';
  }
}
