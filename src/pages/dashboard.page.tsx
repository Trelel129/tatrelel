import * as React from 'react';

import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Seo templateTitle='Dashboard' />

      <main>
        <section className='dashboard-layout py-12'>
          <Typography as='h1' variant='j1'>
            Selamat Datang Pahlawan!
          </Typography>
        </section>
      </main>
    </DashboardLayout>
  );
}
