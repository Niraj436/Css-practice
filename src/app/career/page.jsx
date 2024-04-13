import Benifits from '@/components/Career/Benifits'
import Cares from '@/components/Career/Cares'
import MainCareer from '@/components/Career/MainCareer'
import NewsLetter from '@/components/Career/NewsLetter'
import Opportunities from '@/components/Career/Opportunities'
import Values from '@/components/Career/Values'
import React from 'react'

const page = () => {
  return (
    <div>
       <MainCareer/>
       <Values/>
       <Benifits/>
       <Cares/>
       <Opportunities/>
       <NewsLetter/>
    </div>
  )
}

export default page