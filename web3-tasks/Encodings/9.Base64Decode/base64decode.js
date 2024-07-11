const base64Encoded = 'SGVsbG8='

// Decode Base64 to Buffer
const decodedBuffer = Buffer.from(base64Encoded, 'base64')

// conversion
const uint8Array = new Uint8Array(decodedBuffer)

console.log(uint8Array) // Output: Uint8Array(5) [ 72, 101, 108, 108, 111 ]

const decodedString = new TextDecoder().decode(uint8Array)
console.log(decodedString) // Outputs: "Hello"
