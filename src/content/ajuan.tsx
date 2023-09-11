export type AjuanDataType = {
  id: number;
  nama: string;
  xpReward: number;
  koinReward: number;
  status: 'waiting' | 'gifted' | 'accepted' | 'completed';
  image: string;
  address: string;
  produk: ProdukAjuanType[];
  dokumen: DokumenAjuanType[];
};

type ProdukAjuanType = {
  name: string;
  description: string;
  image: string;
};

type DokumenAjuanType = {
  name: string;
  image: string;
};

export const AJUAN_CONTENT: AjuanDataType[] = [
  {
    id: 1,
    nama: 'Kantin Kampung Plus',
    xpReward: 400,
    koinReward: 1345,
    status: 'waiting',
    image: '/images/sertifikasi/umkm.png',
    address: 'Jl. Teknik Sipil No.i / 16, Keputih, Kec. Sukolilo, Surabaya',
    produk: [
      {
        name: 'Telur Dadar',
        description:
          'Merupakan telur dadar yang digoreng dengan bumbu tambahan hanya garam dan gula',
        image: '/images/sertifikasi/telur-dadar.png',
      },
      {
        name: 'Sayur Sop',
        description: 'Sayur sop sederhana wortel, sayur',
        image: '/images/sertifikasi/sop.png',
      },
    ],
    dokumen: [
      {
        name: 'Nomor Induk Berusaha',
        image: '/images/dummy/nib_adalah_contohnya.jpg',
      },
      {
        name: 'Nomor Induk Berusaha',
        image: '/images/dummy/nib_adalah_contohnya.jpg',
      },
    ],
  },
  {
    id: 2,
    nama: 'Bakso Cak Nano',
    xpReward: 400,
    koinReward: 1345,
    status: 'waiting',
    image: '/images/sertifikasi/bakso-cak-nano.png',
    address: 'Jl. Teknik Sipil No.i / 16, Keputih, Kec. Sukolilo, Surabaya',
    produk: [
      {
        name: 'Telur Dadar',
        description:
          'Merupakan telur dadar yang digoreng dengan bumbu tambahan hanya garam dan gula',
        image: '/images/sertifikasi/telur-dadar.png',
      },
      {
        name: 'Sayur Sop',
        description: 'Sayur sop sederhana wortel, sayur',
        image: '/images/sertifikasi/sop.png',
      },
    ],
    dokumen: [
      {
        name: 'Nomor Induk Berusaha',
        image: '/images/dummy/nib_adalah_contohnya.jpg',
      },
      {
        name: 'Nomor Induk Berusaha',
        image: '/images/dummy/nib_adalah_contohnya.jpg',
      },
    ],
  },
  {
    id: 3,
    nama: 'Es Degan Semangat',
    xpReward: 350,
    koinReward: 1270,
    status: 'waiting',
    image: '/images/sertifikasi/es-degan.png',
    address: 'Jl. Teknik Sipil No.i / 16, Keputih, Kec. Sukolilo, Surabaya',
    produk: [
      {
        name: 'Telur Dadar',
        description:
          'Merupakan telur dadar yang digoreng dengan bumbu tambahan hanya garam dan gula',
        image: '/images/sertifikasi/telur-dadar.png',
      },
      {
        name: 'Sayur Sop',
        description: 'Sayur sop sederhana wortel, sayur',
        image: '/images/sertifikasi/sop.png',
      },
    ],
    dokumen: [
      {
        name: 'Nomor Induk Berusaha',
        image: '/images/dummy/nib_adalah_contohnya.jpg',
      },
      {
        name: 'Nomor Induk Berusaha',
        image: '/images/dummy/nib_adalah_contohnya.jpg',
      },
    ],
  },
  {
    id: 4,
    nama: 'Kantin Kampung Plus',
    xpReward: 400,
    koinReward: 1345,
    status: 'accepted',
    image: '/images/sertifikasi/umkm.png',
    address: 'Jl. Teknik Sipil No.i / 16, Keputih, Kec. Sukolilo, Surabaya',
    produk: [
      {
        name: 'Telur Dadar',
        description:
          'Merupakan telur dadar yang digoreng dengan bumbu tambahan hanya garam dan gula',
        image: '/images/sertifikasi/telur-dadar.png',
      },
      {
        name: 'Sayur Sop',
        description: 'Sayur sop sederhana wortel, sayur',
        image: '/images/sertifikasi/sop.png',
      },
    ],
    dokumen: [
      {
        name: 'Nomor Induk Berusaha',
        image: '/images/dummy/nib_adalah_contohnya.jpg',
      },
      {
        name: 'Nomor Induk Berusaha',
        image: '/images/dummy/nib_adalah_contohnya.jpg',
      },
    ],
  },
  {
    id: 5,
    nama: 'Kantin Kampung Plus',
    xpReward: 400,
    koinReward: 1345,
    status: 'completed',
    image: '/images/sertifikasi/umkm.png',
    address: 'Jl. Teknik Sipil No.i / 16, Keputih, Kec. Sukolilo, Surabaya',
    produk: [
      {
        name: 'Telur Dadar',
        description:
          'Merupakan telur dadar yang digoreng dengan bumbu tambahan hanya garam dan gula',
        image: '/images/sertifikasi/telur-dadar.png',
      },
      {
        name: 'Sayur Sop',
        description: 'Sayur sop sederhana wortel, sayur',
        image: '/images/sertifikasi/sop.png',
      },
    ],
    dokumen: [
      {
        name: 'Nomor Induk Berusaha',
        image: '/images/dummy/nib_adalah_contohnya.jpg',
      },
      {
        name: 'Nomor Induk Berusaha',
        image: '/images/dummy/nib_adalah_contohnya.jpg',
      },
    ],
  },
];
