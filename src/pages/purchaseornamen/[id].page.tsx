import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
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
            <div className='flexc'>
              <div className='mainrounded shadow-lg'>
                <Image
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
              <div className='desc'>
                <Typography variant='s2' className='text category numgrid'>
                  <ul>
                    <li>Tipe Ornamen :</li>
                    <li>Jumlah Paket :</li>
                    <li>Kelangkaan :</li>
                    <li>Harga Paket :</li>
                  </ul>
                </Typography>
              </div>
              <div className='desc'>
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
                <div className='rounded-t-lg shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography variant='s2' className='text category numgrid'>
                    x 10
                  </Typography>
                </div>
                <div className='rounded-t-lg shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography variant='s2' className='text category numgrid'>
                    x 10
                  </Typography>
                </div>
                <div className='rounded-t-lg shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography variant='s2' className='text category numgrid'>
                    x 10
                  </Typography>
                </div>
                <div className='rounded-t-lg shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography variant='s2' className='text category numgrid'>
                    x 10
                  </Typography>
                </div>
                <div className='rounded-t-lg shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography variant='s2' className='text category numgrid'>
                    x 10
                  </Typography>
                </div>
                <div className='rounded-t-lg shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography variant='s2' className='text category numgrid'>
                    x 10
                  </Typography>
                </div>
                <div className='rounded-t-lg shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography variant='s2' className='text category numgrid'>
                    x 10
                  </Typography>
                </div>
                <div className='rounded-t-lg shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography variant='s2' className='text category numgrid'>
                    x 10
                  </Typography>
                </div>
                <div className='rounded-t-lg shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography variant='s2' className='text category numgrid'>
                    x 10
                  </Typography>
                </div>
                <div className='rounded-t-lg shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography variant='s2' className='text category numgrid'>
                    x 10
                  </Typography>
                </div>
                <div className='rounded-t-lg shadow-lg'>
                  <Image
                    src='/images/ornamen/grass.jpg'
                    width='100'
                    height='100'
                    alt='ornamen'
                    className='rounded-t-lg'
                  />
                  <Typography variant='s2' className='text category numgrid'>
                    x 10
                  </Typography>
                </div>
              </div>
            </div>
            <div className='cgrid'>
              <ButtonLink className='confirm' href='../purchaseornamen'>
                <Typography variant='s1' className='ctext'>
                  <Image
                    src='/images/ornamen/check_indicator.png'
                    width='25'
                    height='25'
                    alt='ornamen'
                    className='items-center inline-block'
                  ></Image>
                  Beli
                </Typography>
              </ButtonLink>
              <ButtonLink className='cancel' href='../purchaseornamen'>
                <Typography variant='s1' className='ctext'>
                  <Image
                    src='/images/ornamen/cross_indicator.png'
                    width='25'
                    height='25'
                    alt='ornamen'
                    className='items-center inline-block'
                  ></Image>
                  Batal
                </Typography>
              </ButtonLink>
            </div>
            <Typography variant='s3' className='text padding-lihat'>
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
                Ornamen Tersedia
              </Typography>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
