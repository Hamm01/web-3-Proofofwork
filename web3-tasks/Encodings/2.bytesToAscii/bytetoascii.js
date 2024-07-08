function bytesToAscii(byteArr) {
  return byteArr.map(byte => String.fromCharCode(byte)).join('')
}

const bytes = [72, 101, 108, 108, 111]
// This corresponds to  Hello ,in our native array  we stroed the bytes
// for conversion from bytes data to String

const asciiString = bytesToAscii(bytes)
console.log(asciiString)
