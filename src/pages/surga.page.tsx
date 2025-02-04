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
import { TILEDATA, TileData } from '@/pages/surga/tiledata';
import { InventoryItem, USERDATA } from '@/pages/surga/userdata';

// const initialMap = [
//   14, 23, 23, 23, 23, 35, 23, 23, 23, 13, 21, 33, 33, 33, 33, 33, 33, 33, 33,
//   20, 21, 33, 0, 0, 33, 33, 33, 1, 33, 20, 21, 33, 0, 0, 33, 1, 1, 10, 33, 20,
//   36, 33, 33, 33, 33, 33, 33, 33, 33, 20, 36, 33, 37, 37, 33, 19, 19, 10, 33,
//   20, 21, 33, 4, 7, 33, 19, 19, 10, 33, 20, 21, 33, 6, 8, 33, 10, 10, 10, 33,
//   20, 21, 33, 33, 33, 33, 33, 33, 33, 33, 20, 11, 22, 22, 22, 22, 22, 22, 22,
//   22, 12,
// ];

const initialMap = USERDATA[0].map;

// const coinrate = 1;
const coinrate = USERDATA[0].coinrate;

const menu = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42,
];
export default function Surga2pagePage() {
  interface PopoverStates {
    [key: string]: boolean;
  }
  // const [inventory, setInventory] = useState([
  //   10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  //   10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  //   10, 10, 10, 10,
  // ]);
  const [inventory, setInventory] = useState<number[]>(USERDATA[0].inventory);
  const INVENTORIES: InventoryItem[] = [];
  for (let i = 1; i <= 33; i++) {
    INVENTORIES.push({
      // image: `/sqtiles/tile-${i}.png`,
      image: `https://trelel129.github.io/asset/simplifiedtiles/tile-${i}.png`,
      amount: inventory[i - 1],
      id: `${i}`,
    });
  }
  const size = useWindowDimensions();
  const [map, setMap] = useState(initialMap);
  const [mapTile, setMapTile] = useState(0);

  const [menuTile, setMenuTile] = useState(-1);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);
  const [popoverStates, setPopoverStates] = useState<PopoverStates>({});
  const [input, setInput] = useState(1);
  const newMap = [...map];

  const handleTileInfo = (index: number) => {
    <Typography variant='h1' className='text-center'>
      {index}
    </Typography>;
  };
  const handleTileClick = (index: number) => {
    if (menuTile === -1 || menuTile === 0) {
      inventory[map[index] - 1]++;

      newMap[index] = 0;
      destroySfx();
    } else if (inventory[mapTile] > 0) {
      //check if inventory is available

      inventory[map[index] - 1]++;

      inventory[mapTile]--;

      newMap[index] = menuTile;
      createSfx();
    } else {
      //show pop up lack of item
      //warning
      setShowEmpty(true);
      setTimeout(() => setShowEmpty(false), 500);

      return;
    }

    setMap(newMap);
    // eslint-disable-next-line no-console
    console.log(
      'Selected Tile: ',
      menuTile,
      '\n Saved Tile: ',
      mapTile,
      '\n Inventory: ',
      inventory,
      // '\n tiledata: ',
      // TILEDATA[map[1]].image,
    );
  };

  const handleTileSelect = (index: number) => {
    setMenuTile(menu[index]);
    setMapTile(index);
    handleInvDisp();
  };

  const destroyTile = () => {
    // setMapTile(-1);
    setMenuTile(-1);
  };
  const [invDisp, setInvDisp] = useState(true);
  const handleInvDisp = () => {
    setInvDisp(!invDisp);
    if (invDisp) {
      setMenuTile(0);
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
    if (menuTile != -1) {
      setShowAnimation(true);
      coinSfx();
      setTimeout(() => setShowAnimation(false), 500);
      setInventory((prevInventory) => {
        const newInventory = [...prevInventory];
        newInventory[menuTile - 1] += 1 * input;
        return newInventory;
      });
    }
  };

  const openPopover = (popoverId: string) => {
    // if (menuTile - 1 != -1)
    {
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
  //init setMenuTile(1)
  // setMenuTile(1);
  const [shouldDisplay, setShouldDisplay] = useState(true);
  useEffect(() => {
    // Perform client-specific logic after component mounts
    const isAndroidClient = /Android/i.test(navigator.userAgent);
    const isiOSClient = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    setShouldDisplay(!(isAndroidClient || isiOSClient));
  }, []);
  return (
    <div>
      <InitScreen />
      {/* count coinproduce in initialMap */}

      <DashboardLayout className='relative'>
        {/* <CursorImage imageStringLink={`/sqtiles/tile-${menuTile}.png`} /> */}
        <div
          className='fixed z-50'
          style={{
            display: shouldDisplay ? 'flex' : 'none',
          }}
        >
          <CursorImage
            // imageStringLink={`https://trelel129.github.io/asset/simplifiedtiles/tile-${menuTile}.png`}
            imageStringLink={TILEDATA[menuTile + 1].imageLink}
          />
        </div>
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
          >
            <PageHeader.Title>Surga</PageHeader.Title>
          </PageHeader>

          <section className='flex flex-wrap overflow-scroll z-10 p-10'>
            <div className='flex flex-wrap overflow-scroll w-10/12 h-3/4 z-10'>
              <div className='grid place-items-center'>
                <Typography variant='j2' className=''>
                  Peta Surga Kuliner
                </Typography>
                <TileMap
                  map={map}
                  size={size}
                  click={handleTileClick}
                  info={handleTileInfo}
                  // tiledata={TILEDATA}
                />
              </div>
            </div>
            <div className='lg:grid content-center lg:fixed sm:absolute right-0 z-20 sm:content-between'>
              <Typography variant='h2' className='text-center content-center'>
                Bangun <br></br>
              </Typography>
              <div className='flex'>
                <Popover open={popoverStates['popover1']}>
                  <PopoverTrigger>
                    <PlusIcon
                      size={30}
                      className='bg-white rounded border-4 border-blue-400'
                      onClick={() => {
                        openPopover('popover1');
                        // Call your other functions here
                        setInput(1);
                      }}
                    ></PlusIcon>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className='grid w-auto items-center '>
                      <Typography
                        variant='s1'
                        className='text-center grid-flow-col'
                      >
                        Berapa banyak ubin yang ingin anda beli?
                      </Typography>
                      <div className='grid grid-cols-3 place-items-center'>
                        <Button
                          variant='outline'
                          size='base'
                          onClick={
                            input > 1
                              ? setInput.bind(null, input - 1)
                              : setInput.bind(null, 1)
                          }
                        >
                          -1
                        </Button>
                        <input
                          type='number'
                          className='text-center w-10/12'
                          value={input}
                          min={1}
                          onChange={(e) => setInput(Number(e.target.value))}
                        />
                        <Button
                          variant='outline'
                          size='base'
                          onClick={setInput.bind(null, input + 1)}
                        >
                          +1
                        </Button>
                      </div>
                      {/* step up button */}

                      <div className='grid grid-cols-2 place-items-center text-center content-center gap-2'>
                        <Button
                          variant='primary'
                          size='base'
                          onClick={ReduceCoin}
                        >
                          Beli
                        </Button>

                        <Button
                          variant='danger'
                          size='base'
                          onClick={closePopover.bind(null, 'popover1')}
                        >
                          Batal
                        </Button>
                      </div>
                    </div>
                    {showAnimation && (
                      <div className='purchase-animation absolute flex items-center justify-start p-2'>
                        <Typography variant='h4' color='danger'>
                          -{input} SIAR Coin
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
                    // src={`/sqtiles/tile-${mapTile + 1}.png`}
                    src={
                      menuTile + 1 === 0
                        ? `https://trelel129.github.io/asset/simplifiedtiles/tile-1.png`
                        : TILEDATA[menuTile + 1].imageLink
                    }
                    alt='current-tile'
                    width={size.width / 15}
                    height={size.height / 25}
                  />
                  <Typography
                    variant='h1'
                    className='text-center content-center'
                  >
                    {/* {inventory[mapTile]}x */}
                    {inventory[mapTile]}
                    {/* {USERDATA[0].inventory[mapTile]}x */}
                  </Typography>
                </Button>
              </div>
              <div className='flex justify-center'>
                <NextImage
                  src='/images/icon/koin-siar.png'
                  width={120}
                  height={120}
                  className='w-4 content-center'
                  imgClassName='w-full'
                  alt='Koin SIP'
                />
                <Typography variant='s1' className='text-center content-center'>
                  {/* {TILEDATA[mapTile].description} */}
                  {TILEDATA[mapTile + 1].coinproduce}
                </Typography>
                <Typography variant='s1' className='text category numgrid'>
                  /hari
                </Typography>
              </div>
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
                    src='https://trelel129.github.io/asset/tile/destroyer.png'
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
                map={menu}
                size={size}
                click={handleTileSelect}
                zoom={1}
                // tiledata={TILEDATA}
              />
            </div>
          </div>
          <div className='fixed flex bottom-0 z-10 p-4 w-full justify-center'>
            <ButtonLink
              href='/toko'
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

              <PopoverContent className='grid w-fit'>
                <Typography variant='s1' className='text-center grid-flow-col'>
                  Apakah anda yakin ingin menyimpan?
                </Typography>
                <div className='flex justify-center'>
                  <Typography
                    variant='s1'
                    className='text-center grid-flow-col'
                  >
                    Anda akan mendapatkan{' '}
                  </Typography>
                  <NextImage
                    src='/images/icon/koin-siar.png'
                    width={120}
                    height={120}
                    className='w-4 content-center'
                    imgClassName='w-full'
                    alt='Koin SIP'
                  />
                  <Typography
                    variant='s1'
                    className='text-center grid-flow-col'
                  >
                    {SaveMap(map, newMap, inventory, coinrate, TILEDATA)}{' '}
                  </Typography>

                  <Typography variant='s1' className='text'>
                    /hari
                  </Typography>
                </div>

                <div className='grid grid-cols-2 place-items-center text-center content-center gap-2'>
                  <Button
                    variant='primary'
                    size='base'
                    onClick={() =>
                      SaveMap(map, newMap, inventory, coinrate, TILEDATA)
                    }
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
          <div className='absolute flex justify-center right-10'>
            <Typography variant='s1' className='text-center grid-flow-col'>
              SIAR Coin rate:{' '}
            </Typography>
            <NextImage
              src='/images/icon/koin-siar.png'
              width={120}
              height={120}
              className='w-4 content-center'
              imgClassName='w-full'
              alt='Koin SIP'
            />
            <Typography variant='s1' className='text-center grid-flow-col'>
              {SaveMap(map, initialMap, inventory, coinrate, TILEDATA)}{' '}
            </Typography>
            <Typography variant='s1' className='text'>
              /hari
            </Typography>
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
  map,
  size,
  zoom = 1,
  click,
  info, // tiledata,
}: {
  map: number[];
  size: { width: number; height: number };
  zoom?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  click?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info?: any;
  // tiledata: TileData[];
}) => {
  const NUMTILES = map.length;
  const NUMTILESROW = Math.ceil(Math.sqrt(NUMTILES));

  const calculateIsoOffsets = (index: number) => {
    // const tileWidth = size.width / 20;
    // const tileHeight = size.height / 11.5;
    // resize
    const tileWidth = 150 * zoom;
    const tileHeight = 120 * zoom;
    const row = Math.floor(index / NUMTILESROW);
    const col = index % NUMTILESROW;

    const x = col * tileWidth * 1;
    const y = row * tileHeight * 1.23;
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
          // const tile = TILEDATA.find((t) => t.id == tileId.toString());
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
                // src={`/tiles/tile-${map[i]}.png`}
                // src={`https://trelel129.github.io/asset/simplifiedtiles/tile-${map[i]}.png`}
                src={TILEDATA[map[i] + 1].imageLink}
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
  TILEDATA: TileData[],
) => {
  let coinrate = _coinrate;
  const area = _savetarget.length;
  const length = Math.sqrt(area);

  // Iterate over the _savetarget array and update coinrate based on the tile IDs
  _savetarget.forEach((tileId) => {
    const tile = TILEDATA.find((t) => t.indexId == tileId.toString());
    if (tile) {
      if (tileId != 0) {
        coinrate += parseInt(tile.coinproduce, 10);
      }
    }

    // if ([39, 40, 41, 42].includes(tileId)) {
    //   coinrate++;
    // }
  });

  // Additional condition for specific tile combination
  for (let i = 0; i < _savetarget.length; i++) {
    if (_savetarget[i] === 39) {
      if (
        _savetarget[i + 1] === 40 &&
        _savetarget[i + length] === 41 &&
        _savetarget[i + length + 1] === 42
      ) {
        coinrate *= 2;
      }
    }
  }

  _overwrittedtarget = [..._savetarget];
  // console.log('coins rate: ', coinrate, '\n map: ', _overwrittedtarget);
  return coinrate;
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
