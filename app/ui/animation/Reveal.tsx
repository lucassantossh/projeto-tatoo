'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInview = useInView(ref, { once: true })

  const controls = useAnimation()

  useEffect(() => {
    if (isInview) {
      controls.start('visible')
    }
  }, [isInview])
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial={'hidden'}
      animate={controls}
      transition={{ duration: 0.3, delay: 0.01 }}
    >
      {children}
    </motion.div>
  )
}
