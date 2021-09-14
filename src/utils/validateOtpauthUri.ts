import parseOtpauthUri from './parseOtpauthUri';

/**
 * @typedef ValidationResult - Return type of validate otpauth URI
 * @prop valid Validation result
 * @prop error Error message if validation failed
 */
type ValidationResult = {
  valid: true;
} | {
  valid: false;
  error: string;
};

/**
 * Validates if a otpauth URI is valid by checking the type and secret
 * @param otpauthUri otpauth:// URI provided by service provider
 * @returns Validation result
 */
const validateOtpauthUri = (otpauthUri: string): ValidationResult => {
  const OTPAUTH_URI_REGEX = /^otpauth:\/\/totp\/(.*)$/;
  try {
    if (!OTPAUTH_URI_REGEX.test(otpauthUri)) {
      throw new Error('URI must start with "otpauth://totp/".');
    }

    const { secret } = parseOtpauthUri(otpauthUri);

    if (!secret) {
      throw new Error('Cannot find secret in Uri provided.');
    }

    return { valid: true };
  } catch (error) {
    const { message } = error as Error;
    return { valid: false, error: message };
  }
};

export default validateOtpauthUri;
