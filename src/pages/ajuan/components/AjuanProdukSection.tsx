import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/components/buttons/Button';
import SimpleCard from '@/components/cards/SimpleCard';
import Typography from '@/components/typography/Typography';

type ProdukAjuanType = {
  name: string;
  description: string;
  image: string;
};

const PRODUK_AJUAN: ProdukAjuanType[] = [
  {
    name: 'Telur Dadar',
    description:
      'Merupakan telur dadar yang digoreng dengan bumbu tambahan hanya garam dan gula',
    image: '/images/sertifikasi/telur-dadar.png',
  },
  {
    name: 'Sayur Sop',
    description: 'Sayur sop sederhana wortel, sayur',
    image: '/images/sertifikasi/sop.png',
  },
];

export default function AjuanProdukSection() {
  const router = useRouter();
  const goToStatus = () => {
    router.push('/ajuan/status');
  };

  return (
    <SimpleCard className='overflow-hidden flex gap-5 flex-col'>
      <Typography variant='h3'>
        List makanan permintaan sertifikasi halal
      </Typography>
      <div className='flex flex-col gap-2'>
        {PRODUK_AJUAN.map((produk: ProdukAjuanType, index: number) => (
          <div key={index} className='flex flex-col gap-5'>
            <div className='flex gap-5'>
              <Image
                src={produk.image}
                alt={produk.name}
                width={200}
                height={200}
              />
              <div className='flex flex-col justify-center gap-3'>
                <Typography variant='h3'>{produk.name}</Typography>
                <Typography variant='b1' color='tertiary'>
                  {produk.description}
                </Typography>
                <Button
                  variant='outline'
                  className='w-fit'
                  onClick={goToStatus}
                >
                  Lihat Status
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SimpleCard>
  );
}
