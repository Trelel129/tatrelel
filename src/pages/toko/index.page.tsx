import * as React from 'react';

import Button from '@/components/buttons/Button';
import SimpleCard from '@/components/cards/SimpleCard';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import PageHeader from '@/components/layout/dashboard/PageHeader';
import NextImage from '@/components/NextImage';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/popover/Popover';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { TILEDATA } from '@/pages/surga/tiledata';

// type OptionType = {
//   title: string;
//   color?: string;
// };
//#region  //*=========== Constant ===========
// const RARITY_OPTIONS: OptionType[] = [
//   {
//     title: 'Biasa',
//     color: 'bg-black',
//   },
//   {
//     title: 'Tidak Biasa',
//     color: 'bg-green-500',
//   },
//   {
//     title: 'Langka',
//     color: 'bg-cyan-500',
//   },
//   {
//     title: 'Unik',
//     color: 'bg-purple-500',
//   },
//   {
//     title: 'Legenda',
//     color: 'bg-orange-500',
//   },
//   {
//     title: 'Mistik',
//     color: 'bg-red-500',
//   },
// ];

// const TYPE_OPTIONS: OptionType[] = [
//   {
//     title: 'Lahan',
//   },
//   {
//     title: 'Bangunan',
//   },
// ];

// const OPTIONS = [
//   <FilterSelection title='Semua' key='all' />,

//   RARITY_OPTIONS.map((rarity, i) => (
//     <FilterSelection key={i} title={rarity.title} color={rarity.color} />
//   )),

//   TYPE_OPTIONS.map((type, i) => <FilterSelection key={i} title={type.title} />),
// ];

const ORNAMENTS = TILEDATA.slice(1);

//#endregion  //*======== Constant ===========
export default function tokopagePage() {
  // const size = useWindowDimensions;
  // const {data, isLoading} = useQuery(['https://jsonplaceholder.typicode.com/todos/'])

  // const onSubmit = () => {
  //   const result = api.get('/')
  // }

  return (
    <DashboardLayout className='relative'>
      <Seo templateTitle='Toko.page' />

      <main className='py-12 flex flex-col'>
        <PageHeader
          className='z-10'
          backHref='/dashboard'
          crumbs={['/dashboard', '/toko']}
        >
          <PageHeader.Title>Toko</PageHeader.Title>
        </PageHeader>

        <div className='flex dashboard-layout z-10 flex-col gap-4'>
          {/* {OPTIONS.map((option, i) => (
            <div
              key={i}
              className='flex layout items-center justify-center gap-4'
            >
              {option}
            </div>
          ))} */}

          <div className='layout gap-4 grid md:grid-cols-3 lg:grid-cols-4 place-items-center'>
            {ORNAMENTS.map((ornament, i) => (
              <OrnamentDisplay key={i} {...ornament} />
            ))}
          </div>
        </div>
        <div
          className='absolute inset-0 opacity-50'
          style={{
            backgroundImage: 'url("/images/background/grid.png")',
          }}
        >
          <div className='from-transparent to-light absolute inset-0 bg-gradient-to-b bg-repeat' />
        </div>
        {/* <div className='fixed flex bottom-2 z-20 p-2 w-full justify-center '>
          <ButtonLink
            href='/surga'
            variant='primary'
            className='rounded shadow-lg w-fit h-fit fixed bottom-2 z-20 p-2 justify-center border-4'
          >
            <div className='grid z-10 place-items-center'>
              <NextImage
                className='flex justify-center content-center'
                src='/images/ornamen/StoreIcon.png'
                alt='ornamen'
                width={size().width / 60}
                height={size().height / 30}
              />
              Surga
            </div>
          </ButtonLink>
        </div> */}
      </main>
    </DashboardLayout>
  );
}
// 1
// function FilterSelection({ title, color }: { title: string; color?: string }) {
//   return (
//     <div className='flex items-center gap-1'>
//       <input type='checkbox' className='round round shadow-lg' />
//       {color && <div className={clsx(['w-4 h-4 rounded-full', color])}></div>}
//       <Typography variant='s3'>{title}</Typography>
//     </div>
//   );
// }

function OrnamentDisplay({
  imageLink,
  // color,
  description,
  coinproduce,
  coinCost,
  indexId,
}: {
  imageLink: string;
  // color: string;
  description: string;
  coinproduce: string;
  coinCost: string;
  indexId: string;
}) {
  return (
    <div>
      <Popover>
        <PopoverTrigger
          asChild
          className='flex relative flex-col items-center h-full z-20'
        >
          <button className='rounded-2xl w-fit blue'>
            <SimpleCard className='grid place-items-center'>
              <NextImage
                src={imageLink}
                width='150'
                height='150'
                alt='ornamen'
              />
              {/* <div
                className={clsx([
                  'w-4 h-4 rounded-full absolute top-3 right-3',
                  color,
                ])}
              /> */}

              <div className='flex mt-auto items-center justify-between w-full'>
                <Typography variant='s1' className='text category numgrid'>
                  {description}
                </Typography>
                <div className='flex items-center gap-2'>
                  <div className='p-0.5 bg-white shadow rounded-full'>
                    <NextImage
                      src='/images/icon/koin-siar.png'
                      width={120}
                      height={120}
                      className='w-4'
                      imgClassName='w-full'
                      alt='Koin SIP'
                    />
                  </div>
                  <Typography variant='s2'>
                    {parseInt(coinCost) * 10}
                  </Typography>
                </div>
              </div>
              <div className='flex mt-auto items-center justify-center w-full'>
                <NextImage
                  src='/images/icon/koin-siar.png'
                  width={120}
                  height={120}
                  className='w-4'
                  imgClassName='w-full'
                  alt='Koin SIP'
                />
                <Typography variant='s1' className='text category numgrid'>
                  {coinproduce} <br></br>
                </Typography>

                <Typography variant='s1' className='text category numgrid'>
                  /hari
                </Typography>
              </div>
            </SimpleCard>
          </button>
        </PopoverTrigger>

        <PopoverContent className='w-fit'>
          <div className='grid w-auto items-center '>
            <Typography variant='s1' className='text-center grid-flow-col'>
              Apakah anda yakin ingin membeli item ini?
            </Typography>
            <div className='grid grid-cols-2 place-items-center text-center content-center gap-2'>
              <Button
                variant='primary'
                size='base'
                onClick={() => ReduceCoin({ indexId, coinCost })}
              >
                Ya
              </Button>
              <Button variant='danger' size='base'>
                Tidak
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

// eslint-disable-next-line unused-imports/no-unused-vars
let coins = 1000;
function ReduceCoin({
  // eslint-disable-next-line unused-imports/no-unused-vars
  indexId,
  coinCost,
}: {
  indexId: string;
  coinCost: string;
}) {
  coins -= parseInt(coinCost) * 10;
  // console.log('inventory[id]', id);
  // console.log(coins);
}
