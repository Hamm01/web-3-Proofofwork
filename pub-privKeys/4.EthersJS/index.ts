import { ethers } from 'ethers'

const wallet = ethers.Wallet.createRandom()
//Genreating the Random wallet

//Extract the public and private keys
const publickey = wallet.address
const privateKey = wallet.privateKey

// Message to sign
const message = 'hello world'

// signature to sign the message

const signature = await wallet.signMessage(message)

// Verifying the signature

const AddressRecovered = ethers.verifyMessage(message, signature)

if (AddressRecovered === publickey) {
  console.log('Signature is valid')
}
