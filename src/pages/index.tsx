import Hero from "@/components/hero";
import Map_Prev from "@/components/map_prev";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import Leaderboard from "@/components/leaderboard";
import Features from "@/components/features";

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
  )
}
