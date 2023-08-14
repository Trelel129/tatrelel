import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isUserLoggedIn] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  return (
    <nav className='flex items-center justify-between px-6 py-4 bg-second-blue shadow-lg'>
      <div className='flex items-center gap-5'>
        <Image
          src='assets/icons/siphalal-logo.svg'
          width='50'
          height='50'
          alt='logo-siphalal'
        />
        <h2 className='hidden md:block text-black text-lg font-bold'>
          SIPHALAL
        </h2>
      </div>

      <div className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <i className='fas fa-times'></i>
          ) : (
            <i className='fas fa-bars'></i>
          )}
        </button>
      </div>

      <div className={`flex gap-4 ${isOpen ? 'block' : 'hidden'} md:flex`}>
        <a href='#' className='text-black hover:underline'>
          Beranda
        </a>
        <a href='#' className='text-black hover:underline'>
          Tentang Kami
        </a>
        <a href='#' className='text-black hover:underline'>
          Services
        </a>
        <a href='#' className='text-black hover:underline'>
          Kontak
        </a>

        {!isUserLoggedIn ? (
          <div className='relative text-black group'>
            <button
              onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
              className='px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 shadow-sm border-b-2 border-transparent group-hover:border-blue-500 transition-all'
            >
              Akun
            </button>
            {isAccountMenuOpen && (
              <div className='absolute right-0 mt-2 w-48 py-2 bg-white shadow-lg rounded-xl text-black'>
                <a href='/login' className='block px-4 py-2 hover:bg-gray-200'>
                  Masuk
                </a>
                <a
                  href='/register'
                  className='block px-4 py-2 hover:bg-gray-200'
                >
                  Daftar
                </a>
              </div>
            )}
          </div>
        ) : (
          <div className='relative'>
            <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
              <i className='fas fa-user-circle'></i>
            </button>
            {isProfileOpen && (
              <div className='absolute right-0 mt-2 w-48 py-2 bg-white shadow-lg rounded-xl'>
                <a
                  href='/profile'
                  className='block px-4 py-2 hover:bg-gray-200'
                >
                  Profile
                </a>
                <a
                  href='/xp-points'
                  className='block px-4 py-2 hover:bg-gray-200'
                >
                  XP dan Poin
                </a>
                <a href='/logout' className='block px-4 py-2 hover:bg-gray-200'>
                  Log out
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
