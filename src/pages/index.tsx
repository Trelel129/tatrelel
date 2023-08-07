import Header from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white ">
      <Header />
      <section className="w-full flex-center flex-col">
        <h2 className="sub_text text-left md:text-center">
          Dapatkan akses cepat dan mudah ke informasi sertifikasi halal dengan
        </h2>
        <h1 className="head_text text-left md:text-center">SIPHalal</h1>
        <p className="text-center text-black">
          Informasi yang jelas, proses yang transparan, dan pendampingan yang
          mendukung - semuanya dalam satu platform. Mulai perjalanan sertifikasi
          halal Anda hari ini!
        </p>
        <div className="flex justify-center">
          <Link href="/menu">
            <button className="rounded-full bg-sky-500/100 py-3 px-3">
              Ayo Mulai!!!
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
