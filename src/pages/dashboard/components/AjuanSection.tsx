import { ChevronRight } from 'lucide-react';
import React from 'react';

import SimpleCard from '@/components/cards/SimpleCard';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

type AjuanContentType = { title: string; umkm: string; image: string };
const AJUAN_CONTENT: AjuanContentType[] = [
  {
    title: 'Perkedel jagung',
    umkm: 'Kantin Kampus',
    image: '/images/dummy/produk.jpg',
  },
  {
    title: 'Telur Dadar',
    umkm: 'Kantin Kampus',
    image: '/images/dummy/produk.jpg',
  },
  {
    title: 'Telur Dadar',
    umkm: 'Kantin Kampus',
    image: '/images/dummy/produk.jpg',
  },
  {
    title: 'Telur Dadar',
    umkm: 'Kantin Kampus',
    image: '/images/dummy/produk.jpg',
  },
];

export default function AjuanSection() {
  return (
    <SimpleCard className='overflow-hidden flex flex-col p-0 sm:p-0 row-start-2 h-1/2'>
      <div className='flex justify-between items-center p-6 pb-0'>
        <Typography variant='s1'>Ajuan</Typography>
        <UnderlineLink href='/dashboard/ajuan'>Lihat Semua</UnderlineLink>
      </div>
      <div className='mt-4 pt-0 overflow-y-auto scrollbar-hide flex flex-col'>
        {AJUAN_CONTENT.map((mission, i) => (
          <AjuanListItem key={i} data={mission} />
        ))}
      </div>
    </SimpleCard>
  );
}

function AjuanListItem({ data }: { data: AjuanContentType }) {
  return (
    <UnstyledLink
      href='/'
      className='flex group hover:bg-gray-100 px-6 py-3 items-center justify-between gap-4'
    >
      <div className='flex items-center gap-4'>
        <div className='rounded-xl relative w-12 h-12 overflow-hidden'>
          <NextImage
            src={data.image}
            width={1000}
            height={1000}
            className='absolute inset-0 w-full'
            imgClassName='w-full'
            alt='Produk UMKM'
          />
        </div>
        <div>
          <Typography variant='s3'>{data.title}</Typography>
          <Typography variant='c1' color='secondary'>
            {data.umkm}
          </Typography>
        </div>
      </div>
      <ChevronRight
        className='text-typo-secondary group-hover:text-typo'
        size='1em'
      />
    </UnstyledLink>
  );
}
