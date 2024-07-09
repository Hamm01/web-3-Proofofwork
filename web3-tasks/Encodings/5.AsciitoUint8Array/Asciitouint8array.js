const ascii = 'Vikas'

const byteArray = asciiToUint8(ascii)

function asciiToUint8(asciiString) {
  return new Uint8Array([...asciiString].map(ascii => ascii.charCodeAt(0)))
}

console.log(byteArray)
