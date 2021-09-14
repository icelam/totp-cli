import totp from 'totp-generator';

/**
 * Generate a TOTP code that last for 30 seconds
 * @param secret Secret issued by service provider
 * @returns TOTP code
 */
const generateTotp = (secret: string): number => totp(secret);

export default generateTotp;
