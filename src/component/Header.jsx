'use client';
import { useState } from 'react';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  let Links = [
    { name: 'Explore', link: '/' },
    { name: 'OurProgram', link: '/' },
    { name: 'Blog', link: '/' },
    { name: 'About Us', link: '/' },
    { name: 'Login', link: '/login' },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=' w-full top-0 left-0 bg-white h-20'>
      <div className='tablet:flex items-center justify-between bg-white py-4 tablet:px-10 px-7 '>
        <div className='font-semibold tablet:font-bold text-2xl cursor-pointer flex items-center'>
          <span className=' mr-1  pt-0'>
            <Link href='/'>
              <Image
                src='/image/lasepa-logo.webp'
                alt=''
                width={100}
                height={100}
                className='w-48 mt-0 tablet:w-52'
              />
            </Link>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer tablet:hidden bg-white'>
          <ion-icon
            name={open ? 'close' : 'menu'}
            className='bg-white'></ion-icon>
        </div>

        
          <ul
            className={`tablet:flex tablet:items-center tablet:pb-0 pb-40 rounded-tl-2xl p-10 tablet:p-0  absolute tablet:static  bg-white tablet: z-[100] right-0  tablet:w-auto tablet:pl-0  transition-all duration-500 ease-in 
          ${open ? 'top-30 ' : 'top-[-590px]'}`}>
            {Links.map((link) => (
              <li
                key={link.name}
                className='tablet:ml-8 text-xl text-nowrap tablet:my-0 my-7'>
                <a
                  href={link.link}
                  className=' text-black font-bold hover:text-gray-400 duration-500'>
                  {link.name}
                </a>
              </li>
            ))}
            <Link href='/signup'>
              <Button>Register</Button>
            </Link>
          </ul>
        </div>
      </div>
    
  );
};

export default Header;
