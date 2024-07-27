import * as secp from '@noble/secp256k1'
import crypto from 'crypto'

async function secp256k1() {
  const privateKey = secp.utils.randomPrivateKey()
  // Its random private key

  // No we will convert "himanish" into sha256 hash
  let msgHash = crypto.createHash('sha256').update('himanish').digest('hex')
  // Getting the public key
  const pubkey = secp.getPublicKey(privateKey)
  //Signing the message with private key

  const signature = await secp.signAsync(msgHash, privateKey)

  //  Verifying the message using the public key
  const isValid = secp.verify(signature, msgHash, pubkey)
  console.log(isValid)
}

secp256k1()
