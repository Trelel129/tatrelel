import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-6">
      <div className="container mx-auto flex md:flex-row flex-col-reverse items-start md:justify-between space-y-6 md:space-y-0 text-black">
        <div className="space-y-4">
          <Image
            src="/assets/icons/siphalal-logo-black.svg"
            width={80}
            height={80}
            alt="SIPHALAL Logo"
          />
          <p>Untuk Informasi terbaru bisa masukkan email Anda</p>
          <form className="w-full max-w-sm flex items-center">
            <input
              type="email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex-grow"
              placeholder="Alamat email Anda"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Kirim
            </button>
          </form>
          <div className="flex space-x-6">
            <p className="font-bold text-black">&copy; SIPHALAL 2023</p>
            <Link href="#" passHref>
              <span className="font-bold text-black hover:text-gray-800 cursor-pointer">
                Kebijakan Privasi
              </span>
            </Link>
            <Link href="#" passHref>
              <span className="font-bold text-black hover:text-gray-800 cursor-pointer">
                Ketentuan Pengunaan
              </span>
            </Link>
          </div>
        </div>

        <div className="space-y-6 md:space-y-2">
          <h3 className="font-bold text-black mb-2">Cerita Kami</h3>
          <div className="space-y-2 flex flex-col">
            <Link href="#" passHref>
              <span className="text-black hover:text-gray-800 cursor-pointer">
                FAQ
              </span>
            </Link>
            <Link href="#" passHref>
              <span className="text-black hover:text-gray-800 cursor-pointer">
                Kontak
              </span>
            </Link>
          </div>

          <h3 className="font-bold text-black mb-2">SIPHALAL</h3>
          <div className="space-y-2 flex flex-col">
            <Link href="#" passHref>
              <span className="text-black hover:text-gray-800 cursor-pointer">
                Kantor
              </span>
            </Link>
            <Link href="#" passHref>
              <span className="text-black hover:text-gray-800 cursor-pointer">
                Anggota Kami
              </span>
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link href="#" passHref>
              <span className="hover:text-gray-700 cursor-pointer text-black">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </Link>
            <Link href="#" passHref>
              <span className="hover:text-gray-700 cursor-pointer text-black">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </Link>
            <Link href="#" passHref>
              <span className="hover:text-gray-700 cursor-pointer text-black">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
            </Link>
            <Link href="#" passHref>
              <span className="hover:text-gray-700 cursor-pointer text-black">
                <FontAwesomeIcon icon={faFacebook} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
