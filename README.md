# TOTP CLI

Generates TOTP code for MFA using terminal.

## Prerequisites

* Node >= 12 installed

## Install 

```bash
git clone https://github.com/icelam/totp-cli.git
cd ./totp-cli/
yarn
yarn build
cd ../
npm install -g ./totp-cli/
```

### Usage

```
Usage:
  totp [command]
  
Available Commands:
  set --name <config_name> --uri <otpauth_uri>
    Save provided <otpauth_uri> into config under configuration set named <config_name>.

  list
    List all the available configuration set
  
  <config_name>
    Generate TOTP using configuration set <config_name>.
```
