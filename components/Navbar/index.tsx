import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../utils/logo.png'
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import useAuthStore from '../../store/authStore';
import { createOrGetUser } from '../../utils';
import { IoMdAdd } from 'react-icons/io';
import { AiOutlineLogout } from 'react-icons/ai';
import { IUser } from '../../types';

const Navbar = () => {
  const [user, setUser] = useState<IUser | null>();
  const { userProfile, addUser, removeUser } = useAuthStore();
  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);
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
      <div>Search</div>
      <div>
        {user ? (
          <div className='flex gap-5 md:gap-10'>
            <Link href='/upload'>
              <button className='border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2'>
                <IoMdAdd className='text-xl' />{' '}
                <span className='hidden md:block'>Upload </span>
              </button>
            </Link>
            {user.image && (
              <Link href={`/profile/${user._id}`}>
                <div className="flex items-center">
                  <Image
                    className='rounded-full cursor-pointer'
                    src={user.image}
                    alt='user'
                    width={40}
                    height={40}
                  />
                  <div className="ml-3 cursor-pointer">Hi {user.userName}</div>
                </div>
              </Link>
            )}
            <button
              type='button'
              className=' border-2 p-2 rounded-full cursor-pointer outline-none shadow-md'
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <AiOutlineLogout color='red' fontSize={21} />
            </button>
          </div>
        ) : (<GoogleLogin
          onSuccess={response => {
            createOrGetUser(response, addUser);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />)}
      </div>
    </div>
  )
}

export default Navbar