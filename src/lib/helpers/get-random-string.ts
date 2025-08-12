import { getRandomChar } from '@/lib/helpers/get-random-char'

const getRandomString = (length: number) => {
  return new Array(length)
    .fill(' ')
    .map(() => getRandomChar())
    .join('')
}

export { getRandomString }
