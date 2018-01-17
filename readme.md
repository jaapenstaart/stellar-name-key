# Stellar Name Key
Use this script to generate a Stellar keypair, with a public key ending with a name you provide.

## How to use
* Make sure you have [node.js](https://nodejs.org/) installed.
* Clone this repository and run `npm install`
* Run `node generate [name]`
* Note: To avoid very long waiting times, I recommend using a name of max 4 characters
* Note: Never share your secret key (starting with the letter S) with anyone

## Example
Run: `node generate xlm`
```
Result:
Found Stellar keypair in 2816 tries
public key: GCC6U3IFJSGGRCMDANWSNKUOSMI7CZFWUYRHIE5G5RD6W5HTLW6YGXLM
secret key: SAIQO2PJCERG7J5JQGXQHDHIBY2QU4RCWFKGIR3XUI4WQP55ARAG3SLY
```
As you can see the puclic key ends with the provided name: XLM.

## Donations
If you like this script. A small donation will be appreciated. You can make a donation in Stellar Lumens to: `GAPICAFFV3ALBGNFHCCVXG7WPJSXC7RL5BF7HR356334MLAX4U67JAAP`

## License
[MIT](LICENSE.md)