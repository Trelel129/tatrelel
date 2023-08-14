import Features from '@/components/features';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Leaderboard from '@/components/leaderboard';
import Map_Prev from '@/components/map_prev';
import Header from '@/components/navbar';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Map_Prev />
      <Leaderboard />
      <Features />
      <Footer />
    </>
  );
}
