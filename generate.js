const StellarSdk = require('stellar-sdk');
const name = process.argv.slice(2)[0] || '';

if(name.length === 0) {
  console.log('Usage: node generate [string]');
  process.exit();
}

if(name.length === 5) {
  console.warn('Warning: The string you provided is 5 characters this might take a while..');
}

if(name.length === 6) {
  console.warn('Warning: The string you provided is 6 characters, it might take days to find your keypair');
}

if(name.length >= 7) {
  console.log('Aborting: The string you provided is 7 characters or longer, it will take too long to find your key.');
  process.exit();
}

console.log(`Trying to find public key ending with: ${name}`);
let tries = 0;
let keypair = StellarSdk.Keypair.random();

while (keypair.publicKey().slice(-name.length) !== name.toUpperCase()) {
  tries++;
  keypair = StellarSdk.Keypair.random();
  if(tries%1000 === 0) {
    console.log('tries', tries);
  }
}

console.log(`Found Stellar keypair in ${tries} tries`);
console.log(`public key: ${keypair.publicKey()}`);
console.log(`secret key: ${keypair.secret()}`);