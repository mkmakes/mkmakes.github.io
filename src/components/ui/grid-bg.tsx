'use client'

import * as React from 'react'
import { useEffect, useState } from 'react'
import throttle from 'lodash.throttle'

import { getScrollPercentage } from '@/lib/helpers/get-scroll-percentage'

const SCROLL_TRANSLATE_DAMPEN_X = 20

const GridBg = () => {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  })

  const [scrollTranslate, setScrollTranslate] = useState(0)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const MOVEMENT_DAMPENING = 40
      const xMovement = event.clientX / MOVEMENT_DAMPENING
      const yMovement = event.clientY / MOVEMENT_DAMPENING
      setTranslate({ x: xMovement, y: yMovement })
    }
    const throttledHandleMouseMove = throttle(handleMouseMove, 40)

    const handleScroll = () => {
      const MOVEMENT_MAX = 200
      const scrollPercentage = getScrollPercentage()
      const scrollParallax = (MOVEMENT_MAX * scrollPercentage) / 100
      setScrollTranslate(scrollParallax)
    }
    const throttledHandleScroll = throttle(handleScroll, 40)

    window.addEventListener('mousemove', throttledHandleMouseMove)
    window.addEventListener('scroll', throttledHandleScroll)
    return () => {
      window.removeEventListener('mousemove', throttledHandleMouseMove)
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [])

  const scrollTranslateX = scrollTranslate / SCROLL_TRANSLATE_DAMPEN_X
  const xTranslate = translate.x + scrollTranslateX
  const yTranslate = translate.y + scrollTranslate

  return (
    <span
      className={`
        absolute inset-0 overflow-hidden bg-linear-to-tr from-[#33333333]
        to-[#33333300]
      `}
    >
      <span
        className={`absolute inset-0 scale-200 bg-repeat`}
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg width="10px" height="10px" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g><rect x="0" y="0" width="10" height="10" stroke="%233333331a" stroke-width="0.5"></rect></g></svg>')`,
          transform: `translate3d(${xTranslate}px, ${yTranslate}px, 0px)`,
        }}
      />
    </span>
  )
}

export { GridBg }
