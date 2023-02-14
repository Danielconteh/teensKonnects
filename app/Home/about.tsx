'use client'

import Image from 'next/image'

// ========== Style =======
import Style from './About.module.scss'
import { motion } from 'framer-motion'

type ArrData = {
  header: string
  img: string
  par: string
}

const arr: ArrData[] = [
  {
    header: 'Mission',
    img: '/mission.png',
    par: 'To connect students through professional network to make them successful in todays global economies.',
  },
  {
    header: 'Goal',
    img: '/goal.png',
    par: 'Empower students to display professional and positive image Connect students to the global economies.',
  },
  {
    header: 'Vision',
    img: '/vision.png',
    par: 'Bring economic opportunity to all students across the globe.',
  },
  {
    header: 'Networking',
    img: '/network.jpg',
    par: 'Exchange information and ideas among people with a common profession or special interest.',
  },
]

type ArrDate2 = {
  par: String
  img: String
  type: number
}

const arr2: ArrDate2[] = [
  {
    par: 'Join your colleagues, classmates, and friends on TeenKonnect',
    img: '/join.webp',
    type: 1,
  },
  {
    par: 'Explore topics you are interested in',
    img: '/boost.webp',
    type: 2,
  },
  {
    par: 'Explore topics you are interested in Join',
    img: '/learn.webp',
    type: 1,
  },
]

const About = () => {
  return (
    <>
      <section className='container_layout'>
        {/* heading */}
        <div className='text-center py-8'>
          <motion.h1
            initial={{
              opacity: 0,
              translateY: -25,
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className='text-3xl p-4 md:text-4xl md:p-6 lg:text-5xl capitalize tracking-widest'
          >
            About teenKonnects
          </motion.h1>
        </div>

        {/* ========= THE FIRST PART OF ============ */}
        {/* Cards 3 to 1 cols */}

        <div className={Style.card_container}>
          {arr.map((el: ArrData, i) => (
            <div key={i}>
              <motion.div
                initial={{
                  opacity: 0,
                  translateX: i % 2 === 0 ? -50 : 50,
                  translateY: -50,
                }}
                whileInView={{
                  opacity: 1,
                  translateX: 0,
                  translateY: 0,
                }}
                transition={{ duration: 0.3, delay: i * 0.2 }}
              >
                <Image
                  className='w-full rounded-lg'
                  src={el.img}
                  alt={el.header}
                  width={1000}
                  height={1000}
                />
              </motion.div>

              {/* ==============

                ================== */}

              <motion.h1
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className='text-xl md:text-3xl uppercase
                tracking-wider pt-4 pb-2 md:py-4'
              >
                {el.header}
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className='text-xl md:text-2xl capitalize'
              >
                {el.par}
              </motion.p>
            </div>
          ))}
        </div>

        {/* ========= THE ANOTHER PART OF ============ */}

        <div className='py-8'>
          <div className={Style.Second_Card_Container}>
            {arr2.map((el: ArrDate2, i: number) => {
              if (el.type === 1) {
                return (
                  <>
                    <motion.p
                      key={i}
                      initial={{
                        opacity: 0,
                        translateX: -50,
                      }}
                      whileInView={{
                        opacity: 1,
                        translateX: 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className='text-xl md:text-2xl lg:text-3xl tracking-wider font-light'
                    >
                      {el.par}
                    </motion.p>

                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <Image
                        className='w-full'
                        src={`${el.img}`}
                        alt='explore'
                        width={1000}
                        height={1000}
                      />
                    </motion.div>
                  </>
                )
              }
              return (
                <>
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <Image
                      className='w-full'
                      src={`${el.img}`}
                      alt='explore'
                      width={1000}
                      height={1000}
                    />
                  </motion.div>

                  <motion.p
                    key={i}
                    initial={{
                      opacity: 0,
                      translateX: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      translateX: 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className='text-xl md:text-2xl lg:text-3xl tracking-wider font-light'
                  >
                    {el.par}
                  </motion.p>
                </>
              )
            })}
          </div>
        </div>

        {/* ========== */}
      </section>
    </>
  )
}

export default About
