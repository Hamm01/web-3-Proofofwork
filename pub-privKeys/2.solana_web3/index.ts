import { Keypair } from '@solana/web3.js'
import nacl from 'tweetnacl'
// Edwards-curve Digital Signature Algorithm  - ED25519
const keypair = Keypair.generate()

const pubkey = keypair.publicKey.toBytes()
// To string conversion gives us 44 bytes of

const privKey = keypair.secretKey

// Converting the text messasge to encode it before we sign it using the private key

const messasge = new TextEncoder().encode('Himanish')

// How we sign the message using the solan web 3 js

const signature = nacl.sign.detached(messasge, privKey)
console.log(signature)
// How to verfy the signature using the public key

const result = nacl.sign.detached.verify(messasge, signature, pubkey)

console.log(result)
