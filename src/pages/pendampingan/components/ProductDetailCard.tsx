import * as React from 'react';

import Card from '@/components/layout/dashboard/Card';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

import { AjuanDataType } from '@/content/ajuan';

export default function ProductDetailCard({
  data,
}: {
  data: AjuanDataType['produk'];
}) {
  return (
    <Card title='Daftar makanan permintaan sertifikasi'>
      <Card.Section className='gap-6'>
        {data.map((p, i) => (
          <div key={i} className='flex items-center justify-between gap-4'>
            <div className='flex items-center gap-4'>
              <NextImage
                src={p.image}
                alt={p.name}
                layout='fill'
                className='shrink-0 aspect-square w-20 relative rounded-xl overflow-hidden'
                imgClassName='w-full object-cover'
              />
              <div>
                <Typography variant='s3'>{p.name}</Typography>
                <Typography variant='c1' color='secondary'>
                  {p.description}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Card.Section>
    </Card>
  );
}
