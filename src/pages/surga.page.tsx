import { X } from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';

import useWindowDimensions from '@/hooks/useWindowDimensions';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import PageHeader from '@/components/layout/dashboard/PageHeader';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/popover/Popover';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

const INVENTORIES: { image: string; amount: number; id: string }[] = [];

const initialMap = [
  14, 23, 23, 23, 23, 35, 23, 23, 23, 13, 21, 33, 33, 33, 33, 33, 33, 33, 33,
  20, 21, 33, 0, 0, 33, 33, 33, 1, 33, 20, 21, 33, 0, 0, 33, 1, 1, 10, 33, 20,
  36, 33, 33, 33, 33, 33, 33, 33, 33, 20, 36, 33, 37, 37, 33, 19, 19, 10, 33,
  20, 21, 33, 4, 7, 33, 19, 19, 10, 33, 20, 21, 33, 6, 8, 33, 10, 10, 10, 33,
  20, 21, 33, 33, 33, 33, 33, 33, 33, 33, 20, 11, 22, 22, 22, 22, 22, 22, 22,
  22, 12,
];

const coinrate = 1;

const inventory = [
  1, 1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10,
];
for (let i = 1; i <= 33; i++) {
  INVENTORIES.push({
    image: `/sqtiles/tile-${i}.png`,
    amount: inventory[i - 1],
    id: `${i}`,
  });
}

const menu = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42,
];

export default function Surga2pagePage() {
  const size = useWindowDimensions();
  const [map, setMap] = useState(initialMap);
  const [savedTile, setSavedTile] = useState(1);
  const [selectedTile, setSelectedTile] = useState(1);

  const NUMTILES = map.length;
  const NUMTILESROW = Math.ceil(Math.sqrt(map.length));
  const newMap = [...map];

  const handleTileClick = (index: number) => {
    if (inventory[selectedTile - 1] > 0) {
      //check if inventory is available
      if (
        selectedTile - 1 === 0 ||
        selectedTile - 1 === 1 ||
        map[index] === 1
      ) {
        // check if tile infinite
        if (selectedTile - 1 === 1) {
          // logic for storing tile
          if (map[index] === 1) {
            newMap[index] = 0;
          } else {
            inventory[map[index] - 1]++;
            newMap[index] = 0;
          }
        } else {
          // logic for changing into infinite tile
          newMap[index] = selectedTile;
        }
      } else {
        // logic for changing tile
        inventory[map[index] - 1]++;
        // console.log('current tile', map[index], 'changed to', selectedTile);
        // console.log('inventory added', inventory[map[index]]);
        // console.log('current item added ', map[index]);
        inventory[selectedTile - 1]--;
        // console.log('current tile', map[index]);
        // console.log('inventory reduced', inventory[selectedTile - 1]);
        newMap[index] = selectedTile;
      }
    } else {
      //show pop up lack of item
      //warning
      // console.log('lack of item');

      return;
    }

    setMap(newMap);
  };

  const handleTileSelect = (index: number) => {
    setSelectedTile(menu[index]);
    setSavedTile(index);
  };

  return (
    <DashboardLayout className='relative'>
      <Seo templateTitle='Surga.page' />
      <InitScreen />
      {/* <Square className=' bg-black rounded-md h-screen w-screen absolute justify-center z-20'>
        <Typography variant='b1' className='text-center' color='tertiary'>
          Surga
        </Typography>
      </Square> */}
      <main className='py-12 flex flex-col'>
        <PageHeader
          className='z-10'
          backHref='/dashboard'
          crumbs={['/dashboard', '/surga']}
        ></PageHeader>

        <section className='flex flex-wrap overflow-scroll w-full h-screen z-10 p-10'>
          <div className='flex flex-wrap overflow-scroll w-1/2 h-3/4 z-10'>
            <div className='grid'>
              <Typography variant='j2' className='text-center content-center'>
                Peta Surga Kuliner
              </Typography>
              <TileMap
                NUMTILES={NUMTILES}
                NUMTILESROW={NUMTILESROW}
                map={map}
                size={size}
                click={handleTileClick}
              />
            </div>
          </div>
          <div className='flex flex-wrap overflow-scroll w-1/2 h-3/4 z-10'>
            <div className='grid'>
              <Typography variant='j2' className='text-center content-center'>
                Tile Tersedia
              </Typography>
              <TileMap
                NUMTILES={menu.length}
                NUMTILESROW={Math.ceil(Math.sqrt(menu.length))}
                map={menu}
                size={size}
                click={handleTileSelect}
              />
            </div>
          </div>
        </section>
        <section className='fixed flex justify-center top-3/4 right-px -translate-x-1/2 -translate-y-1/2 z-10 bg-white opacity-75'>
          <section className='grid justify-center place-items-center'>
            <Typography variant='h1' className='content-center text-center'>
              tile saat ini
            </Typography>
            <NextImage
              className='flex justify-center content-center'
              src={`/sqtiles/tile-${savedTile + 1}.png`}
              alt='current-tile'
              width={size.width / 15}
              height={size.height / 25}
            />
          </section>
          <Typography variant='h1' className='text-center content-center'>
            {inventory[savedTile]}x
          </Typography>
        </section>

        <div className='fixed flex bottom-0 z-20 p-4 w-full justify-center'>
          <ButtonLink
            href='/purchaseornamen'
            variant='primary'
            className='rounded-lg shadow-lg border-4'
          >
            <div className='grid place-items-center'>
              <NextImage
                className='flex'
                src='/images/ornamen/StoreIcon.png'
                alt='ornamen'
                width={size.width / 60}
                height={size.height / 30}
              />
              Toko
            </div>
          </ButtonLink>
          <Popover>
            <PopoverTrigger asChild className='flex'>
              <Button
                variant='primary'
                className='grid rounded-lg shadow-lg lainnya place-items-center border-4'
              >
                <NextImage
                  className='flex'
                  src='/images/ornamen/save_button.png'
                  alt='ornamen'
                  width={size.width / 60}
                  height={size.height / 30}
                />
                Simpan
              </Button>
            </PopoverTrigger>

            <PopoverContent className='w-fit'>
              <Typography variant='s1' className='text-center grid-flow-col'>
                Apakah anda yakin ingin menyimpan?
              </Typography>
              <Typography variant='s1' className='text-center grid-flow-col'>
                Anda akan mendapatkan{' '}
                {SaveMap(map, newMap, inventory, coinrate)} Coin/hari
              </Typography>
              <div className='grid grid-cols-2 place-items-center text-center content-center gap-2'>
                <Button
                  variant='primary'
                  size='base'
                  onClick={() => SaveMap(map, newMap, inventory, coinrate)}
                >
                  Ya
                </Button>
                <Button variant='danger' size='base'>
                  Tidak
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div
          className='absolute inset-0 opacity-50 z-0'
          style={{
            backgroundImage: 'url("/images/background/grid.png")',
          }}
        >
          <div className='from-transparent to-light absolute inset-0 bg-gradient-to-b bg-repeat' />
        </div>
      </main>
    </DashboardLayout>
  );
}

// function InventoryDisplay({
//   image,
//   amount,
//   id,
// }: {
//   image: string;
//   amount: string;
//   id: string;
// }) {
//   return (
//     <div className='rounded-xl border border-typo-outline shadow-lg flex flex-col z-10'>
//       <NextImage
//         src={image}
//         width='100'
//         height='100'
//         alt='inventory'
//         className='rounded-t-lg'
//         id={id}
//       />
//       <Typography variant='b1' className='text category numgrid text-center'>
//         x{amount}
//       </Typography>
//     </div>
//   );
// }

const TileMap = ({
  NUMTILES,
  NUMTILESROW,
  map,
  size,
  click,
}: {
  NUMTILES: number;
  NUMTILESROW: number;
  map: number[];
  size: { width: number; height: number };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  click?: any;
}) => {
  const calculateIsoOffsets = (index: number) => {
    // const tileWidth = size.width / 20;
    // const tileHeight = size.height / 11.5;
    // resize
    const tileWidth = 150;
    const tileHeight = 120;
    const row = Math.floor(index / NUMTILESROW);
    const col = index % NUMTILESROW;

    const x = col * tileWidth;
    const y = row * tileHeight * 1.25 + tileHeight / 2;
    return { x, y };
  };

  // eslint-disable-next-line unused-imports/no-unused-vars
  const calculateZOffset = (i: number) => {
    return Math.floor(NUMTILESROW) * 0;
  };

  return (
    <div>
      <div
        className='relative z-10'
        style={{
          width: 'fit-content',
          height: size.height,
        }}
      >
        {Array.from({ length: NUMTILES }).map((_, i) => {
          const { x, y } = calculateIsoOffsets(i);
          const zIndex = calculateZOffset(i);
          return (
            <a
              key={i}
              className='absolute cursor-pointer duration-300 ease-in-out hover:animate-bounce hover:border-4 hover:border-cyan-300 hover:rounded-lg hover:shadow-lg hover:z-100'
              onClick={() => click(i)}
              style={{
                left: `${x}px`,
                top: `${y}px`,
                // width: size.width / 33 + 'px',
                // height: size.height / 14 + 'px',
                //resize
                width: '160px',
                height: '160px',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                zIndex: zIndex,
              }}
            >
              <NextImage
                src={`/sqtiles/tile-${map[i]}.png`}
                // width={size.width / 20}
                // height={size.height / 20}
                //resize
                width={150}
                height={150}
                alt={`tile-${map[i]}`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

const SaveMap = (
  _overwrittedtarget: number[],
  _savetarget: number[],
  _inventory: number[],
  _coinrate: number,
) => {
  _coinrate = coinrate;
  const area = _savetarget.length;
  const length = Math.sqrt(area);
  _savetarget.forEach((tile) => {
    if (
      tile === 3 ||
      tile === 39 ||
      tile === 40 ||
      tile === 41 ||
      tile === 42
    ) {
      _coinrate++;
    }
  });
  for (let i = 0; i <= _savetarget.length; i++) {
    if (_savetarget[i] === 39) {
      if (
        _savetarget[i + 1] === 40 &&
        _savetarget[i + length] === 41 &&
        _savetarget[i + length + 1] === 42
      ) {
        _coinrate = _coinrate * 2;
      }
    }
  }
  _overwrittedtarget = _savetarget;
  // console.log('coins rate: ', _coinrate, '\n map: ', _overwrittedtarget);
  return _coinrate;
};

const InitScreen = () => {
  const [advice, setAdvice] = useState(false);
  const handleChange = () => {
    setAdvice(!advice);
  };
  const size = useWindowDimensions();
  return (
    <div
      className='flex flex-col w-full h-full justify-center items-center absolute bg-white z-40'
      style={{
        height: size.height * 1.15,
        width: size.width * 0.85,
        display: advice ? 'none' : 'flex',
      }}
    >
      <IconButton
        variant='danger'
        size='sm'
        className='rounded-full'
        icon={X}
        onClick={handleChange}
      />
      <NextImage
        src='/images/surga/phone.png'
        width={size.width / 5}
        height={size.height / 5}
        alt='ornamen'
      />
      <Typography variant='j1' className='text-center'>
        Putar Layar Untuk Pengalaman Terbaik
      </Typography>
    </div>
  );
};
