import { PlusIcon } from 'lucide-react';
import * as React from 'react';
import { useEffect, useState } from 'react';

import useWindowDimensions from '@/hooks/useWindowDimensions';

import Button from '@/components/buttons/Button';
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

import CursorImage from '@/pages/surga/CursorImage';

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

const menu = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42,
];

export default function Surga2pagePage() {
  interface PopoverStates {
    [key: string]: boolean;
  }
  const [inventory, setInventory] = useState([
    10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10,
  ]);
  for (let i = 1; i <= 33; i++) {
    INVENTORIES.push({
      // image: `/sqtiles/tile-${i}.png`,
      image: `https://trelel129.github.io/asset/tile/tile-${i}.png`,
      amount: inventory[i - 1],
      id: `${i}`,
    });
  }
  const size = useWindowDimensions();
  const [map, setMap] = useState(initialMap);
  const [savedTile, setSavedTile] = useState(0);
  const [selectedTile, setSelectedTile] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);
  const [popoverStates, setPopoverStates] = useState<PopoverStates>({});

  const NUMTILES = map.length;
  const NUMTILESROW = Math.ceil(Math.sqrt(map.length));
  const newMap = [...map];

  const handleTileInfo = (index: number) => {
    <Typography variant='h1' className='text-center'>
      {index}
    </Typography>;
  };
  const handleTileClick = (index: number) => {
    // eslint-disable-next-line no-console
    console.log('Selected Tile: ', selectedTile, '\n Saved Tile: ', savedTile);
    if (selectedTile === 0) {
      inventory[map[index] - 1]++;

      newMap[index] = 0;
      destroySfx();
    } else if (inventory[selectedTile - 1] > 0) {
      //check if inventory is available

      inventory[map[index] - 1]++;

      inventory[selectedTile - 1]--;

      newMap[index] = selectedTile;
      createSfx();
    } else {
      //show pop up lack of item
      //warning
      setShowEmpty(true);
      setTimeout(() => setShowEmpty(false), 500);

      return;
    }

    setMap(newMap);
  };

  const handleTileSelect = (index: number) => {
    setSelectedTile(menu[index]);
    setSavedTile(index);
    handleInvDisp();
  };

  const destroyTile = () => {
    setSelectedTile(0);
  };
  const [invDisp, setInvDisp] = useState(true);
  const handleInvDisp = () => {
    setInvDisp(!invDisp);
    if (invDisp) {
      setSelectedTile(0);
    }
  };
  // eslint-disable-next-line unused-imports/no-unused-vars
  const coins = 1000;
  const createSfx = () => {
    const crSfx = new Audio(
      'https://trelel129.github.io/asset/sfx/hammercreate.mp3',
    ); // URL Github pages as placeholder
    crSfx.volume = 1;
    // eslint-disable-next-line no-console
    crSfx.play().catch((error) => console.error('Error playing sound:', error));
  };
  const destroySfx = () => {
    const dSfx = new Audio(
      'https://trelel129.github.io/asset/sfx/hammerdestroy.mp3',
    ); // URL Github pages as placeholder
    dSfx.volume = 1;
    // eslint-disable-next-line no-console
    dSfx.play().catch((error) => console.error('Error playing sound:', error));
  };
  const coinSfx = () => {
    const coSfx = new Audio('https://trelel129.github.io/asset/sfx/shcoin.mp3'); // URL Github pages as placeholder
    coSfx.volume = 0.3;
    // eslint-disable-next-line no-console
    coSfx.play().catch((error) => console.error('Error playing sound:', error));
  };
  const ReduceCoin = () => {
    if (selectedTile - 1 != -1) {
      setShowAnimation(true);
      coinSfx();
      setTimeout(() => setShowAnimation(false), 500);
    }

    if (selectedTile - 1 === 0) {
      // eslint-disable-next-line no-console
      console.log('inventory: ', inventory);
      closePopover;
    } else {
      // eslint-disable-next-line no-console
      console.log('inventory: ', inventory);
      setInventory((prevInventory) => {
        const newInventory = [...prevInventory];
        newInventory[selectedTile - 1]++;
        return newInventory;
      });
    }
  };

  const openPopover = (popoverId: string) => {
    if (selectedTile - 1 != -1) {
      setPopoverStates((prevState) => ({
        ...prevState,
        [popoverId]: true,
      }));
    }
  };

  const closePopover = (popoverId: string) => {
    setPopoverStates((prevState) => ({
      ...prevState,
      [popoverId]: false,
    }));
  };
  //init setSelectedTile(1)
  // setSelectedTile(1);
  return (
    <div>
      <InitScreen />
      <DashboardLayout className='relative'>
        {/* <CursorImage imageStringLink={`/sqtiles/tile-${selectedTile}.png`} /> */}
        <CursorImage
          imageStringLink={`https://trelel129.github.io/asset/tile/tile-${selectedTile}.png`}
        />
        {showEmpty && (
          <div className='purchase-animation fixed items-center justify-center p-2 left-1/2 top-1/2 z-50'>
            <Typography variant='j2' color='danger'>
              Tile anda habis
            </Typography>
          </div>
        )}
        <Seo templateTitle='Surga.page' />

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

          <section className='flex flex-wrap overflow-scroll z-10 p-10'>
            <div className='flex flex-wrap overflow-scroll w-10/12 h-3/4 z-10'>
              <div className='grid place-items-center'>
                <Typography variant='j2' className=''>
                  Peta Surga Kuliner
                </Typography>
                <TileMap
                  NUMTILES={NUMTILES}
                  NUMTILESROW={NUMTILESROW}
                  map={map}
                  size={size}
                  click={handleTileClick}
                  info={handleTileInfo}
                />
              </div>
            </div>
            <div className='lg:grid content-center lg:fixed sm:absolute right-0 z-20 sm:content-between'>
              <Typography
                variant='h2'
                className='text-center content-center p-4'
              >
                Bangun <br></br>
                <Popover open={popoverStates['popover1']}>
                  <PopoverTrigger>
                    <PlusIcon
                      size={30}
                      className='bg-white rounded border-4 border-blue-400'
                      onClick={openPopover.bind(null, 'popover1')}
                    ></PlusIcon>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className='grid w-auto items-center '>
                      <Typography
                        variant='s1'
                        className='text-center grid-flow-col'
                      >
                        Apakah anda yakin ingin membeli item ini? <br></br>1
                        SIAR Coin
                      </Typography>
                      <div className='grid grid-cols-2 place-items-center text-center content-center gap-2'>
                        <Button
                          variant='primary'
                          size='base'
                          onClick={ReduceCoin}
                        >
                          Ya
                        </Button>

                        <Button
                          variant='danger'
                          size='base'
                          onClick={closePopover.bind(null, 'popover1')}
                        >
                          Tidak
                        </Button>
                      </div>
                    </div>
                    {showAnimation && (
                      <div className='purchase-animation absolute flex items-center justify-start p-2'>
                        <Typography variant='h4' color='danger'>
                          -1 SIAR Coin
                        </Typography>
                      </div>
                    )}
                  </PopoverContent>
                </Popover>
                <Button
                  variant='primary'
                  className='rounded-lg shadow-lg border-4 w-fit h-fit p-2 focus:border-4 focus:bg-gray-500'
                  size='lg'
                  onClick={handleInvDisp}
                >
                  <NextImage
                    className='flex justify-center content-center p-1'
                    // src={`/sqtiles/tile-${savedTile + 1}.png`}
                    src={`https://trelel129.github.io/asset/tile/tile-${
                      savedTile + 1
                    }.png`}
                    alt='current-tile'
                    width={size.width / 15}
                    height={size.height / 25}
                  />
                  <Typography
                    variant='h1'
                    className='text-center content-center'
                  >
                    {inventory[savedTile]}x
                  </Typography>
                </Button>
              </Typography>

              <Typography
                variant='h2'
                className='text-center content-center p-4'
              >
                Hancurkan <br></br>
                <Button
                  variant='danger'
                  className='rounded-lg shadow-lg border-4 w-fit h-fit p-2 focus:bg-gray-500'
                  size='lg'
                  onClick={destroyTile}
                >
                  <NextImage
                    className='flex justify-center content-center'
                    src='/sqtiles/destroyer.png'
                    alt='current-tile'
                    width={size.width / 15}
                    height={size.height / 25}
                  />
                </Button>
              </Typography>
            </div>
          </section>
          <div
            className='fixed flex-wrap overflow-scroll lg:w-1/2 lg:h-1/2 sm:w-10/12 sm:h-5/6 bg-white right-0 lg:top-1/4 sm:top-10 p-4 border-8 border-teal-600 z-20'
            style={{
              display: invDisp ? 'none' : 'flex',
            }}
          >
            <div className='grid space-y-7'>
              <Typography variant='h2' className='z-40'>
                Pilih Ubin<br></br>
                <Button
                  variant='danger'
                  className='rounded-lg shadow-lg border-4 w-fit h-fit'
                  size='lg'
                  onClick={handleInvDisp}
                >
                  Tutup
                </Button>
              </Typography>
              <TileMap
                NUMTILES={menu.length}
                NUMTILESROW={Math.ceil(Math.sqrt(menu.length))}
                map={menu}
                size={size}
                click={handleTileSelect}
                zoom={1}
              />
            </div>
          </div>
          <div className='fixed flex bottom-0 z-10 p-4 w-full justify-center'>
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
            {/* <IconButton
            variant='primary'
            className='rounded-lg shadow-lg border-4'
            icon={X}
            onClick={handleInvDisp}
          /> */}
            <Popover open={popoverStates['popover2'] || false}>
              <PopoverTrigger asChild className='flex '>
                <Button
                  variant='primary'
                  className='grid rounded-lg shadow-lg lainnya place-items-center border-4 '
                  onClick={openPopover.bind(null, 'popover2')}
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
                  <Button
                    variant='danger'
                    size='base'
                    //onclick close popover
                    onClick={closePopover.bind(null, 'popover2')}
                  >
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
    </div>
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
  zoom = 1,
  click,
  info,
}: {
  NUMTILES: number;
  NUMTILESROW: number;
  map: number[];
  size: { width: number; height: number };
  zoom?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  click?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info?: any;
}) => {
  const calculateIsoOffsets = (index: number) => {
    // const tileWidth = size.width / 20;
    // const tileHeight = size.height / 11.5;
    // resize
    const tileWidth = 150 * zoom;
    const tileHeight = 120 * zoom;
    const row = Math.floor(index / NUMTILESROW);
    const col = index % NUMTILESROW;

    const x = col * tileWidth * 1.05;
    const y = row * tileHeight * 1.33;
    return { x, y };
  };

  // eslint-disable-next-line unused-imports/no-unused-vars
  const calculateZOffset = (i: number) => {
    return Math.floor(NUMTILESROW) * 0;
  };

  return (
    <div>
      <div
        className='relative z-10 w-screen'
        style={{
          width: size.width * 0.75,
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
              onMouseEnter={() => info}
              onClick={() => click(i)}
              style={{
                left: `${x}px`,
                top: `${y}px`,
                // width: size.width / 33 + 'px',
                // height: size.height / 14 + 'px',
                //resize
                width: `${zoom * 160}px`,
                height: `${zoom * 160}px`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                zIndex: zIndex,
              }}
            >
              <NextImage
                // src={`/sqtiles/tile-${map[i]}.png`}
                src={`https://trelel129.github.io/asset/tile/tile-${map[i]}.png`}
                // width={size.width / 20}
                // height={size.height / 20}
                //resize
                width={150 * zoom}
                height={150 * zoom}
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
// eslint-disable-next-line unused-imports/no-unused-vars
const InitScreen = () => {
  const [advice, setAdvice] = useState(false);
  const handleChange = () => {
    setAdvice(!advice);
  };
  const size = useWindowDimensions();
  const [shouldDisplay, setShouldDisplay] = useState(true);
  useEffect(() => {
    // Perform client-specific logic after component mounts
    const isAndroidClient = /Android/i.test(navigator.userAgent);
    const isiOSClient = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    setShouldDisplay(!(isAndroidClient || isiOSClient));
  }, []);
  // console.log('size: ', size);
  return (
    <Button
      variant='outline'
      className='justify-center items-center bg-white z-40 w-full h-screen rounded fixed'
      style={{
        height: size.height,
        width: size.width,
        display: shouldDisplay ? 'none' : advice ? 'none' : 'flex',
      }}
      onClick={handleChange}
    >
      <NextImage
        src='/images/surga/phone.png'
        width={400}
        height={400}
        alt='ornamen'
      />
      <div className='grid place-items-center'>
        <Typography variant='j1' className='text-center'>
          Putar Layar Untuk Pengalaman Terbaik <br></br>
        </Typography>
        <Typography variant='h1' className='text-center'>
          ketuk untuk melanjutkan
        </Typography>
      </div>
    </Button>
  );
};
