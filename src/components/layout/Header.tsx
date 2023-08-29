import { Dialog, Transition } from '@headlessui/react';
import { LogIn, Menu, User2 } from 'lucide-react';
import * as React from 'react';

import IconButton from '@/components/buttons/IconButton';
import HeaderLink from '@/components/layout/header/HeaderLink';
import Logo from '@/components/layout/logo/Logo';
import UnstyledLink from '@/components/links/UnstyledLink';

import { AUTH_LINKS, LINKS } from '@/content/header';

export default function Header() {
  //#region  //*=========== Mobile Navigation ===========
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.createRef<HTMLDivElement>();
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  //#endregion  //*======== Mobile Navigation ===========

  return (
    <header className='sticky top-0 z-[100] bg-white flex'>
      <div className='layout  h-16 z-10 items-center justify-between gap-8 flex'>
        <UnstyledLink href='/' title='Kembali ke Beranda'>
          <Logo />
          <span className='sr-only'>SIPHalal</span>
        </UnstyledLink>

        {/* Desktop Navigation Menu */}
        <React.Fragment>
          <ul className=' gap-8 list-none h-full items-center hidden md:flex'>
            {LINKS.map((link, i) => (
              <HeaderLink key={i} href={link.href} withUnderlineAnimation>
                {link.label}
              </HeaderLink>
            ))}
          </ul>
          <ul className=' gap-4 items-center list-none h-full hidden md:flex'>
            <HeaderLink href={AUTH_LINKS.login.href}>
              {AUTH_LINKS.login.label}
            </HeaderLink>
            <div className='w-[1px] h-4  bg-typo-divider' />
            <HeaderLink
              href={AUTH_LINKS.register.href}
              className='text-secondary-400 group-hover:text-secondary-600 '
            >
              {AUTH_LINKS.register.label}
            </HeaderLink>
          </ul>
        </React.Fragment>

        {/* Mobile Navigation Menu */}
        <IconButton
          variant='ghost'
          size='lg'
          className='flex md:hidden text-typo'
          icon={Menu}
          onClick={openModal}
        />
        <Transition appear show={isOpen} as={React.Fragment}>
          <Dialog
            as='div'
            className='relative z-50 xl:hidden'
            onClose={closeModal}
            initialFocus={containerRef}
          >
            <Transition.Child
              as={React.Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <div className='fixed inset-0 flex items-end overflow-y-hidden'>
              <Transition.Child
                as={React.Fragment}
                enter='ease-out duration-300'
                enterFrom='translate-y-full'
                enterTo='translate-y-0'
                leave='ease-in duration-300'
                leaveFrom='translate-y-0'
                leaveTo='translate-y-full'
              >
                <Dialog.Panel className='w-full transform overflow-hidden text-left align-middle shadow-xl transition-all'>
                  <UnstyledLink
                    href='#menu'
                    className='bg-white relative -mb-1 block h-12 w-full rounded-t-full sm:h-16 lg:hidden'
                  >
                    <div className='bg-gray-300 absolute left-1/2 top-2 h-2 w-16 -translate-x-1/2 rounded-full'>
                      &nbsp;
                    </div>
                  </UnstyledLink>
                  <div id='menu' className='bg-white min-h-[50vh]'>
                    <div
                      className='px-6 pt-3 pb-12 divide-y divide-typo-divider'
                      ref={containerRef}
                    >
                      <ul className='gap-4 list-none flex flex-col'>
                        {LINKS.map((link, i) => (
                          <HeaderLink
                            key={i}
                            href={link.href}
                            size='lg'
                            icon={link.icon}
                          >
                            {link.label}
                          </HeaderLink>
                        ))}
                      </ul>
                      <ul className='gap-4 list-none flex flex-col mt-6 pt-6'>
                        <HeaderLink
                          href={AUTH_LINKS.login.href}
                          size='lg'
                          icon={LogIn}
                        >
                          {AUTH_LINKS.login.label}
                        </HeaderLink>

                        <HeaderLink
                          href={AUTH_LINKS.register.href}
                          size='lg'
                          icon={User2}
                        >
                          {AUTH_LINKS.register.label}
                        </HeaderLink>
                      </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
      <hr className='border-typo-divider absolute inset-x-0 bottom-0 h-[1px] w-full' />
    </header>
  );
}
