import Features from '@/containers/features';
import Footer from '@/containers/footer';
import Hero from '@/containers/hero';
import Leaderboard from '@/containers/leaderboard';
import Map_Prev from '@/containers/map_prev';
import Header from '@/containers/navbar';

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
