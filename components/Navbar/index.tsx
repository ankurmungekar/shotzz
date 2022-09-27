import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../utils/logo.png'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link href='/'>
        <div className='w-[100px] md:w-[129px] md:h-[100px] h-[100px]'>
          <Image
            className='cursor-pointer'
            src={Logo}
            alt='logo'
            layout='responsive'
          />
        </div>
      </Link>
    </div>
  )
}

export default Navbar