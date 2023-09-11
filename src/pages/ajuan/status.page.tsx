import Link from 'next/link';

import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import StatusListSection from '@/pages/ajuan/components/StatusListSection';

export default withAuth('protected')(StatusAjuanPage);
function StatusAjuanPage() {
  return (
    <DashboardLayout className='relative'>
      <Seo templateTitle='Status Ajuan' />

      <main className='py-12 flex flex-col gap-4'>
        <section className='dashboard-layout flex gap-2'>
          <Link href='/ajuan/detail'>
            <Typography as='h1' variant='j3' className='mt-1'>
              Ajuan Detail
            </Typography>
          </Link>
          <Typography as='h1' variant='j3' className='mt-1'>
            {'>'}
          </Typography>
          <Link href='/ajuan/status'>
            <Typography as='h1' variant='j3' className='mt-1'>
              Status Ajuan
            </Typography>
          </Link>
        </section>
        <section className='dashboard-layout flex flex-col md:flex-row gap-3'>
          <StatusListSection />
        </section>
      </main>
    </DashboardLayout>
  );
}
