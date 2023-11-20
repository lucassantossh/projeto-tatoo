'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

interface ICardInformations {
  title: string
  src: string
}

const cardsInformation: Array<ICardInformations> = [
  {
    title: 'titulo do card',
    src: '/portfolio/portfolio-1.jpg',
  },
  {
    title: 'titulo do card',
    src: '/portfolio/portfolio-2.jpg',
  },
  {
    title: 'titulo do card',
    src: '/portfolio/portfolio-3.jpg',
  },
  {
    title: 'titulo do card',
    src: '/portfolio/portfolio-4.jpg',
  },
  {
    title: 'titulo do card',
    src: '/portfolio/portfolio-5.jpg',
  },
  {
    title: 'titulo do card',
    src: '/portfolio/portfolio-6.jpg',
  },
]

export default function TattooCard() {
  const [slidePerView, setSlidePerView] = useState<number>(1)

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setSlidePerView(1)
    } else {
      setSlidePerView(3)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={8}
        slidesPerView={slidePerView}
      >
        {cardsInformation.map((c, i) => (
          <SwiperSlide key={i}>
            <Image
              src={c.src}
              alt='some text'
              style={{
                objectPosition: 'center',
                objectFit: 'cover',
                borderRadius: '20px',
                margin: 'auto',
              }}
              height={414}
              width={414}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
