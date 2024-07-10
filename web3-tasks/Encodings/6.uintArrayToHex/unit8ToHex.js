const byteArray = new Uint8Array([86, 105, 107, 97, 115]) // Corresponds to "Vikas"

const hexString = arrayToHex(byteArray)

function arrayToHex(byteArr) {
  let hexString = ''
  for (let i = 0; i < byteArr.length; i++) {
    hexString += byteArr[i].toString(16).padStart(2, '0')
  }
  return hexString
}

console.log(hexString) // Output: "48656c6c6f"
