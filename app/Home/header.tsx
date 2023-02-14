'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, animate, useMotionValue, useTransform } from 'framer-motion'

// ========== Style =======
import Style from './header.module.scss'
import { useEffect, useState } from 'react'

const Header = () => {
  // ==========

  const [data, setData] = useState(true)
  const offset = useMotionValue(0)
  const offset2 = useMotionValue(100)
  const opacity = useTransform(
    offset,
    // Map x from these values:
    [0, 100],
    // Into these values:
    [1, 0]
  )

  const opacity2 = useTransform(
    offset2,
    // Map x from these values:
    [0, 100],
    // Into these values:
    [1, 0]
  )

  // ================================

  useEffect(() => {
    const timeout = setInterval(() => {
      setData((v) => !v)

      const controls = animate(opacity, data ? 1 : 0, {
        duration: 1,
        delay: 0.5,
      })
      const controls2 = animate(opacity2, data ? 0 : 1, {
        duration: 1,
        delay: 0.5,
      })
      controls.stop
      controls2.stop
      return
    }, 20000 / 1.25)

    return () => clearInterval(timeout)
  }, [data, opacity, opacity2])

  // =============================

  return (
    <header className='main'>
      <main className={`${Style.header_container} container_layout`}>
        {/* nav bar [logo and register-button] */}

        {/* =================



          ========================== */}

        <nav className={Style.nav_container}>
          <Link href='/'>
            <Image
              className='ml-4 md:ml-8 h-12 w-12 md:h-16 md:w-16'
              src='/logo.png'
              alt='logo'
              width={1000}
              height={1000}
              priority
            />
          </Link>

          <div
            className='mr-4 md:mr-8 bg-blue-600 inline-block text-white font-semibold rounded-lg 
             text-xl md:text-2xl text-center'
          >
            <button className='capitalize px-4 py-5 '>sign up for free</button>
          </div>
        </nav>

        {/* =================



          ========================== */}

        <div className={Style.banner_text_container}>
          {/* banner text => framer-motion */}

          <div className={Style.banner_text}>
            <motion.h1
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='font-bold capitalize text-[1.35rem] md:text-3xl lg:text-5xl tracking-wider md:pb-4 '
            >
              Welcome To TeenKonnect
            </motion.h1>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='text-2xl md:text-3xl py-4 font-normal capitalize w-1/2 md:w-full'
            >
              <p>Connecting teenagers and build network</p>
              <p className='py-4'>Share learning resource</p>
              <p>take free courses</p>
            </motion.div>

            {/* BUTTON */}

            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className='bg-blue-600 inline-block text-white font-semibold rounded-lg 
             text-xl md:text-2xl text-center'
            >
              <button className='capitalize px-4 py-5 '>
                sign up for free
              </button>
            </motion.div>
          </div>

          {/* Circle svg */}

          <div className={Style.circleSvg}>
            <div className={Style.banner_person_container}>
              <motion.div style={{ opacity, transition: 'opacity 900ms ease' }}>
                <Image
                  src='/profile.png'
                  alt='person'
                  className={Style.banner_person}
                  width={1000}
                  height={5000}
                />
              </motion.div>
              <motion.div
                style={{
                  opacity: opacity2,
                  transition: 'opacity 900ms ease',
                }}
              >
                <Image
                  src='/profile.png'
                  alt='person'
                  className={Style.banner_person}
                  width={1000}
                  height={500}
                />
              </motion.div>
            </div>

            <Image
              className='w-full h-[350px] md:h-[500px]'
              src='/circle.svg'
              alt='circle-svg'
              width={1000}
              height={500}
            />
          </div>
        </div>

        {/* =================



          ========================== */}
        {/* background image  */}

        <Image
          className='absolute top-0 bottom-0 right-0 left-0 h-[55vh] md:h-full w-full z-[-1]'
          src='/bgIMG.png'
          alt='banner'
          width={1000}
          height={1000}
          priority
        />
      </main>
    </header>
  )
}

export default Header
