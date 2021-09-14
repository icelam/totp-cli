import parseOtpauthUri from './parseOtpauthUri';

type ValidationResult = {
  valid: true;
} | {
  valid: false;
  error: string;
};

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
