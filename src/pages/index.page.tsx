import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function IndexPage() {
  return (
    <Layout>
      <Seo />
      <main>
        <section className=''>
          <div className='layout py-20 min-h-main '>
            <Typography as='h1' variant='j1'>
              Landing Page
            </Typography>
          </div>
        </section>
      </main>
    </Layout>
  );
}
