const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const getRandomChar = () => {
  const seed = Math.floor(Math.random() * 100)
  const modulo = seed % 26
  const randomChar = alphabet[modulo]
  return randomChar
}

export { getRandomChar }
