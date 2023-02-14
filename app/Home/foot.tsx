import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Style from './footer.module.scss'

export const Foot = () => {
  return (
    <div className={Style.Container}>
      <div className={`${Style.footer_container} container_layout`}>
        {/* =============(1)============ */}
        <div className='flex flex-col pb-8'>
          <Image
            className='h-12 w-12 md:h-16 md:w-16'
            src='/logo.png'
            alt='logo'
            width={1000}
            height={1000}
            priority
          />
          <p className='text-xl md:text-2xl'>TeenKonnect</p>
        </div>

        {/* ============(2)============= */}

        <div className='capitalize'>
          <h2 className='text-2xl py-4 md:text-3xl font-semibold '>general</h2>
          <div className={`${Style.Link_parent}`}>
            <Link href='/'>sign up</Link>
            <Link href='/'>about</Link>
            <Link href='/'>help center</Link>
            <Link href='/'>career</Link>
          </div>
        </div>

        {/* ============(3)============= */}

        <div className='capitalize'>
          <h2 className='text-2xl py-4 font-semibold md:text-3xl '>contact</h2>
          <div className={`${Style.Link_parent}`}>
            <Link href='/'>sign up</Link>
            <Link href='/'>about</Link>
            <Link href='/'>help center</Link>
            <Link href='/'>career</Link>
          </div>
        </div>

        {/* ============(4)============= */}

        <div className='capitalize'>
          <h2 className='text-2xl py-4 font-semibold md:text-3xl '>
            follow us
          </h2>
          <div className={`${Style.Link_parent}`}>
            <Link href='/'>sign up</Link>
            <Link href='/'>about</Link>
            <Link href='/'>help center</Link>
            <Link href='/'>career</Link>
          </div>
        </div>

        {/* ================== */}
      </div>
    </div>
  )
}
