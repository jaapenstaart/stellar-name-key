const StellarSdk = require('stellar-sdk')

this.onmessage = function(e) {
  const name = e.data
  const nameLength = name.length

  console.log(`searching for: ` + name)

  let tries = 0
  let keypair = StellarSdk.Keypair.random()

  while (keypair.publicKey().slice(-nameLength) !== name) {
    tries++
    keypair = StellarSdk.Keypair.random()

    if (tries % 1000 === 0) {
      console.log('tries', tries)
    }
  }

  postMessage(keypair.secret())
}
