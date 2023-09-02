import Image from 'next/image';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';
export default function CobapagePage() {
  // const {data, isLoading} = useQuery(['https://jsonplaceholder.typicode.com/todos/'])

  // const onSubmit = () => {
  //   const result = api.get('/')
  // }

  return (
    <Layout>
      <Seo templateTitle='Coba.page' />
      <main>
        <div className='background-purchase'>
          <div className='flexl'>
            {/* {JSON.stringify(data)}*/}
            <Typography variant='j2' className='text-center'>
              Ornamen Tersedia
            </Typography>
            <Typography variant='h3' className='text-center'>
              List ornamen yang anda miliki
            </Typography>
            <div className='flexc'>
              <input type='checkbox' className='round round shadow-lg' />
              <Typography variant='s3' className='text-center'>
                Semua
              </Typography>
            </div>
            <div className='flexc'>
              <input type='checkbox' className='round round shadow-lg' />
              <div className='circle common' />
              <Typography variant='s3' className='text-center rarity'>
                Biasa
              </Typography>
              <input type='checkbox' className='round round shadow-lg' />
              <div className='circle uncommon' />
              <Typography variant='s3' className='text-center rarity'>
                Tidak Biasa
              </Typography>
              <input type='checkbox' className='round round shadow-lg' />
              <div className='circle rare' />
              <Typography variant='s3' className='text-center rarity'>
                Langka
              </Typography>
              <input type='checkbox' className='round round shadow-lg' />
              <div className='circle unique' />
              <Typography variant='s3' className='text-center rarity'>
                Unik
              </Typography>
              <input type='checkbox' className='round round shadow-lg' />
              <div className='circle legend' />
              <Typography variant='s3' className='text-center rarity'>
                Legenda
              </Typography>
              <input type='checkbox' className='round round shadow-lg' />
              <div className='circle mythic' />
              <Typography variant='s3' className='text-center rarity'>
                Mistik
              </Typography>
            </div>
            <div className='flexc'>
              <input type='checkbox' className='round round shadow-lg' />
              <Typography variant='s3' className='text-center category'>
                Lahan
              </Typography>
              <input type='checkbox' className='round round shadow-lg' />
              <Typography variant='s3' className='text-center category'>
                Bangunan
              </Typography>
            </div>
            <div className='flexc'>
              <div className='grid'>
                {/* import image from internet using src */}
                <div className='rounded shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography
                    variant='b2'
                    className='text-center category numgrid'
                  >
                    <div className='circle common' />
                    Rumput
                  </Typography>
                  <Typography
                    variant='b1'
                    className='text-center category numgrid'
                  >
                    x1
                  </Typography>
                </div>
                <div className='rounded shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography
                    variant='b2'
                    className='text-center category numgrid'
                  >
                    <div className='circle common' />
                    Rumput
                  </Typography>
                  <Typography
                    variant='b1'
                    className='text-center category numgrid'
                  >
                    x1
                  </Typography>
                </div>
                <div className='rounded shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography
                    variant='b2'
                    className='text-center category numgrid'
                  >
                    <div className='circle common' />
                    Rumput
                  </Typography>
                  <Typography
                    variant='b1'
                    className='text-center category numgrid'
                  >
                    x1
                  </Typography>
                </div>
                <div className='rounded shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography
                    variant='b2'
                    className='text-center category numgrid'
                  >
                    <div className='circle common' />
                    Rumput
                  </Typography>
                  <Typography
                    variant='b1'
                    className='text-center category numgrid'
                  >
                    x1
                  </Typography>
                </div>
                <div className='rounded shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography
                    variant='b2'
                    className='text-center category numgrid'
                  >
                    <div className='circle common' />
                    Rumput
                  </Typography>
                  <Typography
                    variant='b1'
                    className='text-center category numgrid'
                  >
                    x1
                  </Typography>
                </div>
                <div className='rounded shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography
                    variant='b2'
                    className='text-center category numgrid'
                  >
                    <div className='circle common' />
                    Rumput
                  </Typography>
                  <Typography
                    variant='b1'
                    className='text-center category numgrid'
                  >
                    x1
                  </Typography>
                </div>
                <div className='rounded shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography
                    variant='b2'
                    className='text-center category numgrid'
                  >
                    <div className='circle common' />
                    Rumput
                  </Typography>
                  <Typography
                    variant='b1'
                    className='text-center category numgrid'
                  >
                    x1
                  </Typography>
                </div>
                <div className='rounded shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography
                    variant='b2'
                    className='text-center category numgrid'
                  >
                    <div className='circle common' />
                    Rumput
                  </Typography>
                  <Typography
                    variant='b1'
                    className='text-center category numgrid'
                  >
                    x1
                  </Typography>
                </div>
                <div className='rounded shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography
                    variant='b2'
                    className='text-center category numgrid'
                  >
                    <div className='circle common' />
                    Rumput Rumput liar yang kau biarkan berserakan
                  </Typography>
                  <Typography
                    variant='b1'
                    className='text-center category numgrid'
                  >
                    x1
                  </Typography>
                </div>
                <div className='rounded shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography
                    variant='b2'
                    className='text-center category numgrid'
                  >
                    <div className='circle common itemcenter' />
                    Rumput
                  </Typography>
                  <Typography
                    variant='b1'
                    className='text-center category numgrid'
                  >
                    x1
                  </Typography>
                </div>
              </div>
            </div>
            <div className='gridcolumn pagin'>
              <Typography variant='s3' className='text-center grid-flow-col'>
                <Button variant='outline' size='base'>
                  {'<'}
                </Button>
                <Button variant='outline' size='base'>
                  {'>'}
                </Button>
              </Typography>
              <Typography variant='s3' className='text-center'>
                1 - 10 of 36 <br />
                Ornament per page:{' '}
                <b>
                  <u>10</u>
                </b>
                {/* tab */} <b>15</b> <b>20</b>
              </Typography>
            </div>
            <Typography variant='s3' className='text-center padding-lihat'>
              LIHAT LAINNYA
            </Typography>

            <div className='rounded shadow-lg lainnya'>
              <Typography variant='h3' className='text-center'>
                <Image
                  className='flex'
                  src='/images/ornamen/StoreIcon.png'
                  alt='ornamen'
                  width={25}
                  height={25}
                />
                Toko Ornamen
              </Typography>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
