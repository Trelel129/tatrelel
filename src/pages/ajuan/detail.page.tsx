import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import AjuanProdukSection from '@/pages/ajuan/components/AjuanProdukSection';
import UmkmInfoSection from '@/pages/ajuan/components/UmkmInfoSection';

export default withAuth('protected')(AjuanPage);
function AjuanPage() {
  return (
    <DashboardLayout className='relative'>
      <Seo templateTitle='Ajuan' />

      <main className='py-12 flex flex-col gap-4'>
        <section className='dashboard-layout'>
          <Typography as='h1' variant='j3' className='mt-1'>
            Ajuan Sertifikasi Saat Ini
          </Typography>
        </section>
        <section className='dashboard-layout'>
          <UmkmInfoSection />
        </section>
        <section className='dashboard-layout'>
          <AjuanProdukSection />
        </section>
      </main>
    </DashboardLayout>
  );
}
