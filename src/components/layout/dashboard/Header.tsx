/* eslint-disable @next/next/no-img-element */
import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { User } from 'lucide-react';
import * as React from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/typography/Typography';

type HeaderProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const userNavigation = [
  { name: 'Ubah Password', href: '/akun/ubah-password' },
  { name: 'Ubah Profil', href: '/akun/ubah-profil' },
];

export default function Header({ setSidebarOpen }: HeaderProps) {
  return (
    <div className='sticky top-0 z-20 bg-white shadow'>
      <div className='dashboard-layout relative z-10'>
        <div className='flex  flex-shrink-0 py-2 min-h-[4rem]'>
          <button
            type='button'
            className={clsx([
              '-ml-4 px-4',
              'border-r border-gray-200 text-gray-500 md:hidden',
              'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500',
            ])}
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <HiOutlineMenuAlt2 className='h-6 w-6' aria-hidden='true' />
          </button>
          <div className='flex flex-1 items-center justify-between'>
            <div className='flex flex-1 px-2 md:px-0'>
              <Typography variant='b3' color='secondary'>
                {format(new Date(), 'PPPP', {
                  locale: id,
                })}
              </Typography>
            </div>
            <div className='flex items-center  md:ml-6'>
              {/* Profile dropdown */}
              <Menu as='div' className='relative ml-3 '>
                <div>
                  <Menu.Button
                    data-cy='user-menu'
                    className={clsx([
                      '-mr-2 flex max-w-xs items-center gap-4 rounded-md bg-white px-0.5 py-1 text-sm',
                      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                    ])}
                  >
                    <span className='sr-only'>Open user menu</span>
                    <div className='hidden min-w-0  flex-col items-end sm:flex'>
                      <Typography variant='b2'>Nama</Typography>
                      <Typography variant='b3'>(Email)</Typography>
                    </div>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-50'>
                      <User className='text-primary-600' />
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={React.Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <UnstyledLink
                            href={item.href}
                            className={clsx(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            {item.name}
                          </UnstyledLink>
                        )}
                      </Menu.Item>
                    ))}
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          data-cy='logout'
                          className={clsx(
                            active ? 'bg-gray-100' : '',
                            'block w-full px-4 py-2 text-left text-sm text-gray-700',
                          )}
                        >
                          Keluar
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
