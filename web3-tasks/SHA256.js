let crypto = require('crypto')

const input = 'Himanish'

const sha256hash = crypto.createHash('sha256').update(input).digest('hex')

console.log(sha256hash)

// output : 9660f21c7985d51819f74d2bc289f61ac60a4ff158dadff158ef5aa7c5bd6ef7
