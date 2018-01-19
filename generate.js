var Worker = require("tiny-worker")
const StellarSdk = require('stellar-sdk')

const name = process.argv.slice(2)[0] || ''

if (name.length === 0) {
  console.log('Usage: node generate [string]')
  process.exit()
}

if (name.length === 5) {
  console.warn('Warning: The string you provided is 5 characters this might take a while..')
}

if (name.length === 6) {
  console.warn('Warning: The string you provided is 6 characters, it might take days to find your keypair')
}

if (name.length >= 7) {
  console.log('Aborting: The string you provided is 7 characters or longer, it will take too long to find your key.')
  process.exit()
}

console.log(`Trying to find public key ending with: ${name}`)
const numWorkers = 10
const workerTasks = []
const upperCaseName = name.toUpperCase(name)

const workerListener = function(e) {
  const secretKey = e.data
  const keypair = StellarSdk.Keypair.fromSecret(secretKey)

  console.log(`public key: ${keypair.publicKey()}`)
  console.log(`secret key: ${keypair.secret()}`)

  workerTasks.forEach(function(worker) {
    worker.terminate()
  })
}

for (let i = 0; i < numWorkers; i++) {
  const worker = new Worker('worker.js')
  workerTasks.push(worker)

  worker.onmessage = workerListener
  worker.postMessage(upperCaseName)
}
