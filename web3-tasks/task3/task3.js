let crypto = require('crypto')
/*
  prefixHash will use to identify the hash for the numbers strating from Zero. 
  and in which hash has prefix like "00000" 
  here the intial string passed in function would be like 'slate => slate | value = 0
value => true | usd 19' 
  we are using brutefoce method to fnd the hash that starting with '00000'
*/

const prefixHash = prefix => {
  let inpt = 0

  while (true) {
    let stringInput =
      `slate => slate | value = 0
       value => true | usd 19
      ` + inpt.toString()
    let hash = crypto.createHash('sha256').update(stringInput).digest('hex')
    if (hash.startsWith(prefix)) {
      return { input: stringInput, hash: hash }
    }
    inpt++
  }
}

const result = prefixHash('00000')
console.log(`Input string : ${result.input} ,  Hash : ${result.hash}`)
