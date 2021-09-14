import url from 'url';

type UriData = {
  type?: string;
  name?: string;
  secret?: string;
  issuer?: string;
}

/**
 * Parse and extract `type`, `name`, `secret` and `issuer` from otpauth URI
 * @param otpauthUri otpauth:// URI provided by service provider
 * @returns Objects containing `type`, `name`, `secret` and `issuer`
 */
const parseOtpauthUri = (otpauthUri: string): UriData => {
  const otpauthData = url.parse(otpauthUri, true);
  const type = otpauthData.host ?? undefined;
  const name = otpauthData.pathname
    ? decodeURIComponent(otpauthData.pathname).substring(1)
    : undefined;
  const { secret, issuer } = otpauthData.query as Record<string, string | undefined>;

  return {
    type, name, secret, issuer,
  };
};

export default parseOtpauthUri;
