import * as React from 'react'

import { GradientHeader } from '@/components/ui/gradient-header'
import { ScrambledText } from '@/components/ui/scrambled-text'

const Home = () => {
  return (
    <>
      <header className='bg-neutral-800'>
        <GradientHeader className='flex items-center gap-2 p-10'>
          <span className='flex gap-8'>
            {'>'}
            <ScrambledText text='mk.codes here' />
          </span>
        </GradientHeader>
      </header>
    </>
  )
}

export default Home
