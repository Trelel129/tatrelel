import Image from 'next/image';

import Button from '@/components/buttons/Button';
import SimpleCard from '@/components/cards/SimpleCard';
import Typography from '@/components/typography/Typography';

type AjuanStatusType = {
  status: string;
  content: string;
};

type UMKMInfoType = {
  name: string;
  address: string;
  owner: string;
  status: string;
};

const STATUS_OPTIONS: AjuanStatusType[] = [
  {
    status: 'Menunggu',
    content: 'menunggu konfirmasi dari anda',
  },
  {
    status: 'Diterima',
    content:
      'ajuan sertifikasi telah anda konfirmasi, segera menuju ke lokasi untuk melakukan verifikasi',
  },
  {
    status: 'Selesai',
    content: '🎉 selamat sertifikasi telah selesai',
  },
];

const UMKM_INFO: UMKMInfoType = {
  name: 'Kantin Kampus Plus',
  address: 'Jl. Teknik Sipil No.i / 16, Keputih, Kec. Sukolilo, Surabaya',
  owner: 'Bu Tini',
  status: 'Selesai',
};

const getStatusContent = (status: string) => {
  return STATUS_OPTIONS.find((option) => option.status === status)?.content;
};

export default function UmkmInfoSection() {
  return (
    <SimpleCard className='overflow-hidden flex gap-5'>
      <Image
        src='/images/sertifikasi/umkm.png'
        alt='Picture of the author'
        width={200}
        height={200}
      />
      <div className='flex flex-col justify-center gap-3'>
        <Typography variant='h3'>{UMKM_INFO.name}</Typography>
        <div className='flex flex-col gap-1'>
          <Typography variant='b1' color='tertiary'>
            {UMKM_INFO.owner}
          </Typography>
          <Typography variant='b1' color='tertiary'>
            {UMKM_INFO.address}
          </Typography>
        </div>
        <div className='flex gap-2'>
          {UMKM_INFO.status === 'Menunggu' && (
            <div className='flex items-center gap-3'>
              <Button
                variant='primary'
                className='!py-2 !px-4 !text-sm !font-medium'
              >
                Konfirmasi
              </Button>
              <Typography variant='b1' className='text-yellow-500'>
                {getStatusContent(UMKM_INFO.status)}
              </Typography>
            </div>
          )}
          {(UMKM_INFO.status === 'Diterima' ||
            UMKM_INFO.status === 'Selesai') && (
            <Typography variant='b1' className='text-green-500'>
              {getStatusContent(UMKM_INFO.status)}
            </Typography>
          )}
        </div>
      </div>
    </SimpleCard>
  );
}
