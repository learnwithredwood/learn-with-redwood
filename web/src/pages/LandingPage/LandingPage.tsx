import { BestParts } from 'src/components/LandingPage/BestParts'
import { Faqs } from 'src/components/LandingPage/Faqs'
import { HelloMyNameIs } from 'src/components/LandingPage/HelloMyNameIs'
import { Hero } from 'src/components/LandingPage/Hero'
import { MetaTags } from '@redwoodjs/web'
import { SalesLetter } from 'src/components/LandingPage/SalesLetter'
import { Pricing } from 'src/components/LandingPage/Pricing'
import { Topics } from 'src/components/LandingPage/Topics'
import { LessonsModules } from 'src/components/LandingPage/LessonsModules'
import { CourseYouWill } from 'src/components/LandingPage/CourseYouWill'
import { WhatWeBuild } from 'src/components/LandingPage/WhatWeBuild/WhatWeBuild'
import { Who } from 'src/components/LandingPage/Who'
import { Newsletter } from 'src/components/Newsletter'
import { Testimonial } from 'src/components/LandingPage/Testimonial'
import MichaelLiendo from 'src/images/michael-liendo.jpeg'

const LandingPage = () => {
  return (
    <>
      <MetaTags
        title="Learn with Redwood: Learn Full Stack without the Pain of Full Stack"
        description="Redwood.js is a full-stack framework designed to help you scale from side hustle to start-up and makes it easy to get up and running with the latest and greatest technologies."
      />
      <Hero />
      {/* TESTIMONIAL */}
      {/* LOGO PARADE */}
      <SalesLetter />
      <Newsletter />
      {/* Testimonial */}
      <Testimonial
        person="Michael Liendo"
        title="Sr. Developer Advocate, AWS"
        avatar={MichaelLiendo}
      >
        <p>Amy Dutton is one of the most genuine people out there.</p>
      </Testimonial>
      {/* Video Embed */}
      {/* Testimonial */}
      <div id="get-started">
        <Pricing />
      </div>
      <Topics />
      <CourseYouWill />
      <WhatWeBuild />
      <Who />

      <div className="font-wide uppercase text-center text-xl leading-8 mb-20">
        This course is intentionally designed to{' '}
        <div className="text-sinopia">
          equip you with everything you need to know
          <br /> to become a successful full stack developer
        </div>{' '}
        with the best libraries and frameworks available.
      </div>

      {/* 2 TESTIMONIALS */}

      <HelloMyNameIs />
      <BestParts />
      <LessonsModules />
      {/* <WhyRedwood /> */}
      <Pricing />
      <Faqs />
    </>
  )
}

export default LandingPage
