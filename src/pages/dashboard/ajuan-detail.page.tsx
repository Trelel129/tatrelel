import Link from 'next/link';
import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';

import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

const AjuanDetail = () => {
  return (
    <DashboardLayout>
      <Seo templateTitle='Dashboard' />
      <main>
        <section className='dashboard-layout py-12'>
          {/*  Link  */}
          <div className='-my-8 pb-8'>
            <Link
              href='/dashboard/ajuan'
              className='text-blue-500 flex items-center ml-12 pb-1'
            >
              <BsArrowLeftShort />
              <span>Kembali</span>
            </Link>

            <Typography as='h1' variant='j3' className='ml-12 -mt-2'>
              Ajuanku
            </Typography>
          </div>

          {/* Konten */}
          <div className='flex flex-row gap-4'>
            <div className='bg-white border border-black rounded-lg basis-1/4 flex-auto w-14 h-14 p-4 mt-4 overflow'>
              <p className='text-black flex-auto'>Ayam Geprek Joder ka Dhani</p>
            </div>

            {/* List Group */}
            <ul className='bg-white border border-black rounded-lg basis-3/4 p-4 mt-4 w-1/2'>
              <li className='py-2 border-b border-gray-300'>
                <a className='flex-row'>Dokumen 1</a>
                <div>
                  <Link
                    legacyBehavior
                    href='/images/dummy/nib_adalah_contohnya.jpg'
                  >
                    <a className='text-blue-500 hover:underline'>files ini</a>
                  </Link>
                </div>
              </li>
              <li className='py-2 border-b border-gray-300'>
                <a>Dokumen 2</a>
                <div>
                  <Link
                    legacyBehavior
                    href='/images/dummy/nib_adalah_contohnya.jpg'
                  >
                    <a className='text-blue-500 hover:underline'>files ini</a>
                  </Link>
                </div>
              </li>
              <li className='py-2 border-b border-gray-300'>
                <a>Dokumen 3</a>
                <div>
                  <Link
                    legacyBehavior
                    href='/images/dummy/nib_adalah_contohnya.jpg'
                  >
                    <a className='text-blue-500 hover:underline'>files ini</a>
                  </Link>
                </div>
              </li>
              <li className='py-2 border-b border-gray-300'>
                <a>Dokumen 4</a>
                <div>
                  <Link
                    legacyBehavior
                    href='/images/dummy/nib_adalah_contohnya.jpg'
                  >
                    <a className='text-blue-500 hover:underline'>files ini</a>
                  </Link>
                </div>
              </li>
              <li className='py-2'>
                <a>Dokumen 5</a>
                <div>
                  <Link
                    legacyBehavior
                    href='/images/dummy/nib_adalah_contohnya.jpg'
                  >
                    <a className='text-blue-500 hover:underline'>files ini</a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
};

export default AjuanDetail;
