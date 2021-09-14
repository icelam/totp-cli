import totp from 'totp-generator';

const generateTotp = (secret: string): number => totp(secret);

export default generateTotp;
