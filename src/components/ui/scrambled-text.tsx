'use client'

import * as React from 'react'
import { useEffect, useState } from 'react'

import { getRandomString } from '@/lib/helpers/get-random-string'

const INITIAL_SCRAMBLES = 25
const SCRAMBLE_INTERVAL_MS = 65

type ScrambledTextProps = {
  text: string
  initialScrambles?: number
  scrambleTime?: number
}

const ScrambledText = ({
  text,
  initialScrambles = INITIAL_SCRAMBLES,
  scrambleTime = SCRAMBLE_INTERVAL_MS,
}: ScrambledTextProps) => {
  const [scrambledText, setScrambledText] = useState('')
  const [, setCurrentIndex] = useState(0)

  useEffect(() => {
    const initialScrambledText = getRandomString(text.length)
    setScrambledText(initialScrambledText)

    const scrambleInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const currentIndex = prevIndex + 1
        const totalRounds = text.length + initialScrambles
        if (currentIndex >= totalRounds) clearInterval(scrambleInterval)

        const currentTextIndex = currentIndex - initialScrambles
        if (currentTextIndex >= 0) {
          const correctText = text.slice(0, currentTextIndex + 1)
          const scrambledText = getRandomString(
            text.length - correctText.length
          )
          setScrambledText(`${correctText}${scrambledText}`)
        } else {
          setScrambledText(getRandomString(text.length))
        }
        return currentIndex
      })
    }, scrambleTime)

    return () => clearInterval(scrambleInterval)
  }, [text, initialScrambles, scrambleTime])

  return <>{scrambledText}</>
}

export { ScrambledText }
