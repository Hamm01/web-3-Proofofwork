import bs58 from 'bs58'

function bs58Decode(hash) {
  return bs58.decode(hash)
}

const bs58hash = '9Ajdvzr'
const uint8Array = bs58Decode(bs58hash)
console.log(uint8Array)
