import React, { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'
import { ImQuotesLeft } from 'react-icons/im'
import Card from '../UI/Card'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io'
import { testimonials } from '../data'

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const { name, quote, job, avatar } = testimonials[index]

  const prevTestimonialHandler = () => {
    if (index <= 0) {
      setIndex(testimonials.length - 1)
    }
    setIndex(prev => prev - 1)
  }
  const nextTestimonialHandler = () => {
    if (index >= testimonials.length - 1) {
      setIndex(0)
    }
    setIndex(prev => prev + 1)
  }
  // useEffect(() => {
  //   setInterval(() => {
  //     if (index >= testimonials.length - 1) {
  //       setIndex(0)
  //     }
  //     setIndex(prev => prev + 1)
  //   }, 3000)
  // }, [index])

  return (
    <section className='testimonials'>
      <div className='container testimonials' __container>
        <SectionHeader
          icon={<ImQuotesLeft />}
          title='Testimonials'
          className='testimonial__head'
        />
        <Card className='testimonial'>
          <div className='testimonial__avatar'>
            <img src={avatar} alt='' />
          </div>
          <p className='testimonial__quote'>{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className='testimonial__title'>{job}</small>
        </Card>
        <div className='testimonials__btn-container'>
          <button
            className='testimonials__btn'
            onClick={prevTestimonialHandler}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className='testimonials__btn'
            onClick={nextTestimonialHandler}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
