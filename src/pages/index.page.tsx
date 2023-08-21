import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function IndexPage() {
  return (
    <Layout>
      <Seo templateTitle='Index' />

      <main>
        <section className=''>
          <div className='layout py-20 min-h-screen'>
            <Typography as='h1' variant='j1'>
              Test
            </Typography>
          </div>
        </section>
      </main>
    </Layout>
  );
}
