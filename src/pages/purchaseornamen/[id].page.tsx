import * as React from 'react';

import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

const ORNAMENTS = [
  {
    image: '/images/ornamen/grass.jpg',
    amount: '10',
    id: '1',
  },
  {
    image: '/images/ornamen/grass.jpg',
    amount: '10',
    id: '2',
  },
  {
    image: '/images/ornamen/grass.jpg',
    amount: '10',
    id: '3',
  },
  {
    image: '/images/ornamen/grass.jpg',
    amount: '10',
    id: '4',
  },
  {
    image: '/images/ornamen/grass.jpg',
    amount: '10',
    id: '5',
  },
  {
    image: '/images/ornamen/grass.jpg',
    amount: '10',
    id: '6',
  },
  {
    image: '/images/ornamen/grass.jpg',
    amount: '10',
    id: '7',
  },
  {
    image: '/images/ornamen/grass.jpg',
    amount: '10',
    id: '8',
  },
  {
    image: '/images/ornamen/grass.jpg',
    amount: '10',
    id: '9',
  },
  {
    image: '/images/ornamen/grass.jpg',
    amount: '10',
    id: '10',
  },
  {
    image: '/images/ornamen/grass.jpg',
    amount: '10',
    id: '11',
  },
];

export default function CobapagePage() {
  // const {data, isLoading} = useQuery(['https://jsonplaceholder.typicode.com/todos/'])

  // const onSubmit = () => {
  //   const result = api.get('/')
  // }

  return (
    <DashboardLayout>
      <Seo templateTitle='Coba.page' />
      <main>
        <div className='background-purchase'>
          <div className='flexl'>
            {/* {JSON.stringify(data)}*/}
            <Typography variant='j2' className='text'>
              Toko Ornamen
            </Typography>
            <Typography variant='b3' className='text'>
              List ornamen yang dijual
            </Typography>

            <Typography variant='h6' className='text details'>
              KOIN ANDA SAAT INI
            </Typography>
            <Typography variant='s1' className='coin'>
              1000
            </Typography>
            <div className='flex flex-row self-center item-center gap-3 layout'>
              <div className='shadow-lg flex flex-col self-center'>
                <NextImage
                  src='/images/ornamen/grass.jpg'
                  width='100'
                  height='100'
                  alt='ornamen'
                  className='rounded-t-lg'
                />
                <Typography variant='b2' className='text category numgrid'>
                  <div className='circle common' />
                  Rumput
                </Typography>
                <Typography variant='b1' className='text category numgrid'>
                  x1
                </Typography>
              </div>
              <div className='flex items-center justify-center'>
                <Typography variant='s2' className='flex flex-col self-center '>
                  <ul>
                    <li>Tipe Ornamen :</li>
                    <li>Jumlah Paket :</li>
                    <li>Kelangkaan :</li>
                    <li>Harga Paket :</li>
                  </ul>
                </Typography>
              </div>
              <div className='flex items-center justify-center'>
                <Typography variant='s2' className='text category numgrid'>
                  <ul>
                    <li>Lahan</li>
                    <li>11</li>
                    <li>Biasa</li>
                    <li className='coin'>10 KOIN</li>
                  </ul>
                </Typography>
              </div>
              <div className='gridpurchase'>
                <div className='items-center gap-4 grid grid-cols-5'>
                  {ORNAMENTS.map((ornament, i) => (
                    <OrnamentDisplay key={i} {...ornament} />
                  ))}
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-center'>
              <ButtonLink className='confirm' href='../invoice'>
                <Typography variant='s1' className='ctext'>
                  <NextImage
                    src='/images/ornamen/check_indicator.png'
                    width='25'
                    height='25'
                    alt='ornamen'
                    className='items-center inline-block'
                  ></NextImage>
                  Beli
                </Typography>
              </ButtonLink>
              <ButtonLink className='cancel' href='../purchaseornamen'>
                <Typography variant='s1' className='ctext'>
                  <NextImage
                    src='/images/ornamen/cross_indicator.png'
                    width='25'
                    height='25'
                    alt='ornamen'
                    className='items-center inline-block'
                  ></NextImage>
                  Batal
                </Typography>
              </ButtonLink>
            </div>
            <Typography variant='s3' className='text'>
              LIHAT LAINNYA
            </Typography>
            <ButtonLink
              href='../coba'
              variant='ghost'
              className='rounded shadow-lg lainnya'
            >
              <Typography variant='h3' className='text-center'>
                <NextImage
                  className='flex'
                  src='/images/ornamen/StoreIcon.png'
                  alt='ornamen'
                  width={25}
                  height={25}
                />
                Ornamen Tersedia
              </Typography>
            </ButtonLink>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}

function OrnamentDisplay({
  image,
  amount,
  id,
}: {
  image: string;
  amount: string;
  id: string;
}) {
  return (
    <div className='rounded-xl border border-typo-outline shadow-lg flex flex-col'>
      <NextImage
        src={image}
        width='100'
        height='100'
        alt='ornamen'
        className='rounded-t-lg'
        id={id}
      />
      <Typography variant='b1' className='text category numgrid'>
        {amount}
      </Typography>
    </div>
  );
}
