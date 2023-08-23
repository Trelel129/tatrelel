import * as React from 'react';

import Typography from '@/components/typography/Typography';

export default function BenefitSection() {
  return (
    <section className='min-h-main bg-white'>
      <div className='layout py-20 flex flex-col items-center'>
        <div className='flex flex-col gap-2 text-center'>
          <Typography
            variant='s2'
            className='uppercase tracking-wider'
            color='secondary'
          >
            Apa yang kami berikan
          </Typography>
          <Typography as='h1' variant='j2'>
            Unggulan Kami
          </Typography>
        </div>
      </div>
    </section>
  );
}
