import * as React from 'react';

import SimpleCard from '@/components/cards/SimpleCard';
import NextImage from '@/components/NextImage';
import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

import useAuthStore from '@/store/useAuthStore';

type LeaderboardContentType = {
  image: string;
  name: string;
  rank: string;
  xp: number;
};
const LEADERBOARD_CONTENT: LeaderboardContentType[] = [
  {
    image: '/images/rank/champion.svg',
    name: 'Wina Tungmiharja',
    rank: 'champion',
    xp: 30000,
  },
  {
    image: '/images/rank/champion.svg',
    name: 'Wina Tungmiharja',
    rank: 'champion',
    xp: 28870,
  },
  {
    image: '/images/rank/champion.svg',
    name: 'Wina Tungmiharja',
    rank: 'champion',
    xp: 27870,
  },
  {
    image: '/images/rank/champion.svg',
    name: 'Wina Tungmiharja',
    rank: 'champion',
    xp: 24870,
  },
  {
    image: '/images/rank/champion.svg',
    name: 'Wina Tungmiharja',
    rank: 'champion',
    xp: 20870,
  },
  {
    image: '/images/rank/guardian.svg',
    name: 'Wina Tungmiharja',
    rank: 'guardian',
    xp: 19200,
  },
  {
    image: '/images/rank/guardian.svg',
    name: 'Wina Tungmiharja',
    rank: 'guardian',
    xp: 15200,
  },
  {
    image: '/images/rank/guardian.svg',
    name: 'Wina Tungmiharja',
    rank: 'guardian',
    xp: 13200,
  },
  {
    image: '/images/rank/guardian.svg',
    name: 'Wina Tungmiharja',
    rank: 'guardian',
    xp: 10200,
  },
  {
    image: '/images/rank/guardian.svg',
    name: 'Wina Tungmiharja',
    rank: 'guardian',
    xp: 10200,
  },
];

export default function LeaderboardSection() {
  const user = useAuthStore.useUser();
  return (
    <SimpleCard className='flex flex-col w-full max-h-[30rem] md:max-h-[40rem]'>
      <div className='flex flex-col items-center'>
        <div className='bg-white relative  soft-shadow rounded-full w-[8rem] p-2'>
          <NextImage
            src='/images/rank/explorer.svg'
            width={100}
            height={100}
            className='w-full'
            imgClassName='w-full'
            alt='explorer'
          />
          <Tag color='primary' className='absolute bottom-0 left-2/3'>
            <Typography variant='s1' className='text-inherit'>
              15
            </Typography>
          </Tag>
        </div>
        <div className='text-center flex flex-col gap-1 mt-2'>
          <Typography variant='s1'>{user?.name}</Typography>
          <Typography variant='s3' color='secondary'>
            <span className='text-primary-600'>10.000 XP</span> ke peringkat
            selanjutnya!
          </Typography>
        </div>
      </div>

      <div className='w-full h-full flex flex-col gap-4 mt-6 overflow-y-scroll scrollbar-hide'>
        {LEADERBOARD_CONTENT.map((leaderboard, i) => (
          <LeaderboardListItem key={i} data={leaderboard} order={i + 1} />
        ))}
      </div>
    </SimpleCard>
  );
}

function LeaderboardListItem({
  data,
  order,
}: {
  data: LeaderboardContentType;
  order: number;
}) {
  return (
    <div className='flex group  items-center justify-between gap-4'>
      <div className='flex items-center gap-4'>
        <div className='relative w-12 h-12 overflow-hidden'>
          <NextImage
            src={data.image}
            width={1000}
            height={1000}
            className='absolute inset-0 w-full'
            imgClassName='w-full'
            alt='Produk UMKM'
          />
          {order <= 3 && (
            <Typography
              variant='c2'
              className='absolute w-4 h-4 inline-flex items-center justify-center rounded-full bottom-0 left-0 bg-typo text-primary-50 font-semibold'
            >
              {order}
            </Typography>
          )}
        </div>
        <div>
          <Typography variant='s3'>{data.name}</Typography>
          <Typography variant='c1' color='secondary'>
            {data.rank}
          </Typography>
        </div>
      </div>
      <Typography variant='s3' color='secondary'>
        {data.xp.toLocaleString('ID')} XP
      </Typography>
    </div>
  );
}
