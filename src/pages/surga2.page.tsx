import { Info } from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';

import useWindowDimensions from '@/hooks/useWindowDimensions';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/popover/Popover';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

const INVENTORIES: { image: string; amount: string; id: string }[] = [];
for (let i = 1; i <= 33; i++) {
  INVENTORIES.push({
    image: `/sqtiles/tile-${i}.png`,
    amount: '10',
    id: `${i}`,
  });
}

const initialMap = [
  14, 23, 23, 23, 23, 35, 23, 23, 23, 13, 21, 33, 33, 33, 33, 33, 33, 33, 33,
  20, 21, 33, 0, 0, 33, 33, 33, 1, 33, 20, 21, 33, 0, 0, 33, 1, 1, 10, 33, 20,
  36, 33, 33, 33, 33, 33, 33, 33, 33, 20, 36, 33, 37, 37, 33, 19, 19, 10, 33,
  20, 21, 33, 4, 7, 33, 19, 19, 10, 33, 20, 21, 33, 6, 8, 33, 10, 10, 10, 33,
  20, 21, 33, 33, 33, 33, 33, 33, 33, 33, 20, 11, 22, 22, 22, 22, 22, 22, 22,
  22, 12, 0,
];

const inventory = [
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
];

const menu = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
];

export default function Surga2pagePage() {
  const size = useWindowDimensions();
  const [map, setMap] = useState(initialMap);
  const [savedTile, setSavedTile] = useState(1);
  const [selectedTile, setSelectedTile] = useState(1);

  const NUMTILES = map.length;
  const NUMTILESROW = Math.floor(Math.sqrt(NUMTILES));

  const handleTileClick = (index: number) => {
    const newMap = [...map];
    if (inventory[selectedTile - 1] > 0) {
      inventory[selectedTile - 1]--;
      inventory[map[index]]++;
      // console.log(map[index]);
    } else {
      return;
    }
    newMap[index] = selectedTile;
    setMap(newMap);
  };

  const handleTileSelect = (index: number) => {
    setSelectedTile(menu[index]);
    setSavedTile(index);
  };

  return (
    <DashboardLayout>
      <Seo templateTitle='Surga.page' />
      <main className=''>
        <section>
          <Popover>
            <PopoverTrigger
              asChild
              className='absolute top-1/3 right-60 -translate-x-1/2 -translate-y-1/2'
            >
              <IconButton
                variant='outline'
                size='sm'
                className='rounded-full'
                icon={Info}
              />
            </PopoverTrigger>
            <PopoverContent className='w-fit'>
              <div
                className='gap-4 grid grid-cols-3 justify-items-center'
                id='inventory'
              >
                {INVENTORIES.map((inventory, i) => (
                  <InventoryDisplay key={i} {...inventory} />
                ))}
              </div>

              <Typography variant='s3' className='text-center grid-flow-col'>
                <Button variant='outline' size='base'>
                  {'<'}
                </Button>
                <Button variant='outline' size='base'>
                  {'>'}
                </Button>
              </Typography>
            </PopoverContent>
          </Popover>
        </section>
        <section className='column columns-2'>
          <section className='flex justify-center'>
            <TileMap
              NUMTILES={NUMTILES}
              NUMTILESROW={NUMTILESROW}
              map={map}
              size={size}
              click={handleTileClick}
            />
          </section>
          <section className='flex justify-center'>
            <TileMap
              NUMTILES={menu.length}
              NUMTILESROW={Math.floor(Math.sqrt(menu.length))}
              map={menu}
              size={size}
              click={handleTileSelect}
            />
          </section>
        </section>
        <div className='flex layout justify-center'>
          <NextImage
            className='flex'
            src={`/sqtiles/tile-${savedTile + 1}.png`}
            alt='current-tile'
            width={120}
            height={150}
          />
          <Typography>
            Gunakan{' '}
            <span className='text-blue-500'>[W], [A], [S], atau [D]</span> untuk
            menggerakkan kursor
            <br />
            <br />
            Gunakan <span className='text-blue-500'>[F]</span> untuk memilih
            ornamen
            <br />
            <br />
            Setelah memilih, gunakan{' '}
            <span className='text-blue-500'>[W], [A], [S], atau [D]</span> untuk
            mengganti ornamen
          </Typography>
        </div>
        <ButtonLink
          href='/purchaseornamen'
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
            Toko Ornamen
          </Typography>
        </ButtonLink>
      </main>
    </DashboardLayout>
  );
}

function InventoryDisplay({
  image,
  amount,
  id,
}: {
  image: string;
  amount: string;
  id: string;
}) {
  return (
    <div className='rounded-xl border border-typo-outline shadow-lg flex flex-col z-10'>
      <NextImage
        src={image}
        width='100'
        height='100'
        alt='ornamen'
        className='rounded-t-lg'
        id={id}
      />
      <Typography variant='b1' className='text category numgrid text-center'>
        x{amount}
      </Typography>
    </div>
  );
}

const TileMap = ({
  NUMTILES,
  NUMTILESROW,
  map,
  size,
  click,
}: {
  NUMTILES: number;
  NUMTILESROW: number;
  map: unknown[];
  size: { width: number; height: number };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  click?: any;
}) => {
  const calculateIsoOffsets = (index: number) => {
    const tileWidth = size.width / 30;
    const tileHeight = size.height / 20;
    const row = Math.floor(index / NUMTILESROW);
    const col = index % NUMTILESROW;

    const x = col * tileWidth - tileWidth * 5;
    const y = row * tileHeight * 1.25 + tileHeight;

    return { x, y };
  };

  // eslint-disable-next-line unused-imports/no-unused-vars
  const calculateZOffset = (i: number) => {
    return Math.floor(NUMTILESROW) * 0;
  };

  return (
    <div>
      <div
        className='relative'
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
              className='absolute cursor-pointer active:scale-90 transform transition-all duration-300 ease-in-out hover:animate-bounce hover:border-4 hover:border-cyan-300 hover:rounded-lg hover:shadow-lg hover:z-50'
              onClick={() => click(i)}
              style={{
                left: `${x}px`,
                top: `${y}px`,
                width: size.width / 30 + 'px',
                height: size.height / 15 + 'px',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                zIndex: zIndex,
              }}
            >
              <NextImage
                src={`/sqtiles/tile-${map[i]}.png`}
                width={size.width / 30}
                height={size.height / 15}
                alt={`tile-${map[i]}`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};
