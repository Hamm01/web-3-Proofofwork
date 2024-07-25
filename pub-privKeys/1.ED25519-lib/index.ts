import * as ed from '@noble/ed25519'

async function ed25519() {
  // generating the random private key
  const privtkey = ed.utils.randomPrivateKey()

  // By privte key we can genrate the public key
  const pubkey = await ed.getPublicKeyAsync(privtkey)

  // we are encoding the message string so we can sign the message using private key

  const message = new TextEncoder().encode('Himanish')
  // message is converted uint8Array

  // Signing the message using the private key
  const signature = await ed.signAsync(message, privtkey)

  // How to verify the message on reciever end

  const isValid = await ed.verifyAsync(signature, message, pubkey)

  console.log(isValid)
}
ed25519()
