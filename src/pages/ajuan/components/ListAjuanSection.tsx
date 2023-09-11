import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/components/buttons/Button';
import SimpleCard from '@/components/cards/SimpleCard';
import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

type AjuanType = {
  id: string;
  nama: string;
  xpReward: number;
  koinReward: number;
  status: 'waiting' | 'confirmed' | 'finished' | 'giften' | 'gifted';
  image: string;
};

const AJUANS: AjuanType[] = [
  {
    id: '1',
    nama: 'Kantin Kampung Plus',
    xpReward: 400,
    koinReward: 1345,
    status: 'confirmed',
    image: '/images/sertifikasi/umkm.png',
  },
  {
    id: '2',
    nama: 'Bakso Cak Nano',
    xpReward: 400,
    koinReward: 1345,
    status: 'waiting',
    image: '/images/sertifikasi/bakso-cak-nano.png',
  },
  {
    id: '3',
    nama: 'Es Degan Semangat',
    xpReward: 350,
    koinReward: 1270,
    status: 'waiting',
    image: '/images/sertifikasi/es-degan.png',
  },
];

export default function ListAjuanSection() {
  const router = useRouter();
  const goToDetail = () => {
    router.push('/ajuan/detail');
  };

  return (
    <SimpleCard className='overflow-hidden grid grid-cols-1 md:grid-cols-4 gap-4'>
      {AJUANS.map((ajuan) => (
        <div key={ajuan.id} className='flex flex-col py-3 gap-3'>
          <Image
            src={ajuan.image}
            alt={ajuan.nama}
            height={200}
            width={150}
            sizes='100%'
            style={{
              width: 'max-content',
              height: '150px',
            }}
          />
          <div className='flex flex-col gap-2'>
            <Tag color='success' size='sm' className='w-fit'>
              Sertifikasi
            </Tag>
            <Typography variant='h4'>
              {'Sertifikasi Halal ' + ajuan.nama}
            </Typography>
          </div>
          <div className='flex gap-7'>
            <div className='flex flex-col gap-2'>
              <Typography variant='b3'>XP</Typography>
              <Typography variant='h5'>{ajuan.xpReward + ' XP'}</Typography>
            </div>
            <div className='flex flex-col gap-2'>
              <Typography variant='b3'>koin</Typography>
              <Typography variant='h5'>{ajuan.koinReward}</Typography>
            </div>
          </div>
          {ajuan.status === 'waiting' && (
            <Button variant='success'>
              <Typography variant='b1'>Konfirmasi</Typography>
            </Button>
          )}
          {(ajuan.status === 'confirmed' || ajuan.status === 'finished') && (
            <Button variant='outline' onClick={goToDetail}>
              <Typography variant='b1'>Detail</Typography>
            </Button>
          )}
          {ajuan.status === 'giften' && (
            <Button variant='outline' disabled>
              <Typography variant='b1'>Disedekahkan</Typography>
            </Button>
          )}
          {ajuan.status === 'waiting' && (
            <Button variant='primary'>
              <Typography variant='b1'>Sedekahkan</Typography>
            </Button>
          )}
        </div>
      ))}
    </SimpleCard>
  );
}
