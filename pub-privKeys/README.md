## Asymetric Encryption

Asymmetric encryption, also known as public-key cryptography, is a type of encryption that uses a pair of keys: a public key and a private key. The keys are mathematically related, but it is computationally infeasible to derive the private key from the public key.

     - Public Key: The public key is a string that can be shared openly
     - Private Key: The private key is a secret cryptographic code that must be kept confidential. It is used to decrypt data encrypted with the corresponding public key or to create digital signatures.

Common Asymmetric Encryption Algorithms:

     - RSA - Rivest–Shamir–Adleman
     - ECC - Elliptic Curve Cryptography (ECDSA) - ETH and BTC
     - EdDSA - Edwards-curve Digital Signature Algorithm - SOL

## Generating the Public private Keypairs using the different libraries

1.  EdDSA - Edwards-curve Digital Signature Algorithm - ED25519

        npm library used for that @noble/ed25519

        -- We will use the public and private key pairs with these library to sign the message and then verify using the public key

2.  @solana/web3.js (EdDSA - Edwards-curve Digital Signature Algorithm - ED25519)

        --to genrate the pub private keypairs using the solana ecposystem, it uses the same algorithm

3.  ECDSA (Elliptic Curve Digital Signature Algorithm) - secp256k1

        npm library used for that @noble/secp256k1

        -- We will use the public and private key pairs with these library to sign the message and then verify using the public key

4.  ethers library for ethererum ecosystem (Elliptic Curve Digital Signature Algorithm)
