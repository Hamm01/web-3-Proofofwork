const ascii = 'Himanish'

const byteArray = asciiToBytes(ascii)

function asciiToBytes(asciiString) {
  const Arr = []
  for (let i = 0; i < asciiString.length; i++) {
    Arr.push(asciiString[i].charCodeAt(0))
  }
  return Arr
}

console.log(byteArray)
