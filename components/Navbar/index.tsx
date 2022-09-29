import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../utils/logo.png'
import { GoogleLogin } from '@react-oauth/google';
import useAuthStore from '../../store/authStore';
import { createOrGetUser } from '../../utils';
import { IUser } from '../../types';

const Navbar = () => {
  const [user, setUser] = useState<IUser | null>();
  const { userProfile, addUser } = useAuthStore();
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
            {user.image && (
              <Link href={`/profile/${user._id}`}>
                <div>
                  <Image
                    className='rounded-full cursor-pointer'
                    src={user.image}
                    alt='user'
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
            )}
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