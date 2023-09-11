import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';

import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

const Ajuan = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard/ajuan-detail');
  };

  return (
    <DashboardLayout>
      <Seo templateTitle='Dashboard' />

      <main>
        <section className='dashboard-layout py-12'>
          {/* Tambahkan tautan kembali ke halaman utama */}
          <div className='-my-8 pb-8'>
            <Link
              href='/dashboard'
              className='text-blue-500 flex items-center ml-12 pb-1'
            >
              <BsArrowLeftShort />
              <span>Kembali</span>
            </Link>

            <Typography as='h1' variant='j3' className='ml-12 -mt-2'>
              Ajuanku
            </Typography>
          </div>

          {/* Kotak detail item */}
          <div className='bg-white border border-black rounded-lg flex p-4 mt-4'>
            <p className='text-black flex-auto'>Ayam Geprek Joder ka Dhani</p>

            {/* Tombol untuk detail item */}
            <button
              onClick={handleClick}
              className='bg-gray-150 shadow-md text-black rounded-lg flex-ini px-3 py-1 mt-5'
            >
              Lihat Detail
            </button>
          </div>

          {/* Kotak detail item */}
          <div className='bg-white border border-black rounded-lg flex p-4 mt-4'>
            <p className='text-black flex-auto'>Nasi Padang Goyang Lidah</p>

            {/* Tombol untuk detail item */}
            <button
              onClick={handleClick}
              className='bg-gray-150 shadow-md text-black rounded-lg flex-ini px-3 py-1 mt-5'
            >
              Lihat Detail
            </button>
          </div>

          {/* Kotak detail item */}
          <div className='bg-white border border-black rounded-lg flex p-4 mt-4'>
            <p className='text-black flex-auto'>Warung Kane</p>

            {/* Tombol untuk detail item */}
            <button
              onClick={handleClick}
              className='bg-gray-150 shadow-md text-black rounded-lg flex-ini px-3 py-1 mt-5'
            >
              Lihat Detail
            </button>
          </div>

          {/* Kotak detail item */}
          <div className='bg-white border border-black rounded-lg flex p-4 mt-4'>
            <p className='text-black flex-auto'>
              Roti Bakar Roti Kukus AA Davin
            </p>

            {/* Tombol untuk detail item */}
            <button
              onClick={handleClick}
              className='bg-gray-150 shadow-md text-black rounded-lg flex-ini px-3 py-1 mt-5'
            >
              Lihat Detail
            </button>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
};

export default Ajuan;
