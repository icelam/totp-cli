/** Print CLI help */
const help = (): void => {
  console.log(`
Usage:
  totp [command]

Available Commands:
  set --name <config_name> --uri <otpauth_uri>
    Save provided <otpauth_uri> into config under configuration set named <config_name>.

  list
    List all the available configuration set

  <config_name>
    Generate TOTP using configuration set <config_name>.
  `);
};

export default help;
