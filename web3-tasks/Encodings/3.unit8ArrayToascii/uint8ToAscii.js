function uint8ToAscii(byteArr) {
  const decoder = new TextDecoder()
  return decoder.decode(byteArr)
}

const bytes = new Uint8Array([72, 101, 108, 108, 111])
// This corresponds to  Hello ,in our native array  we stroed the bytes
// for conversion from bytes data to String

const asciiString = uint8ToAscii(bytes)
console.log(asciiString)
