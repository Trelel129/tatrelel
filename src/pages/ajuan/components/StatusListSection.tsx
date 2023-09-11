import { useState } from 'react';

import StatusContent from '@/pages/ajuan/components/StatusContent';
import StatusTile from '@/pages/ajuan/components/StatusTile';

type StatusType = {
  id: string;
  statusType:
    | 'waiting'
    | 'inlocation'
    | 'document-checked'
    | 'video-taken'
    | 'photo-taken'
    | 'surveyed'
    | 'finished';
  name: string;
  description: string;
  isFinished: boolean;
  timeStamp: string;
  isChoosed: boolean;
  content: StatusContentType;
};

type StatusContentType = {
  name: string;
  description: string;
  file?: string;
  photo?: string;
  video?: string;
};

const STATUS: StatusType[] = [
  {
    id: '1',
    statusType: 'waiting',
    name: 'Menuju Lokasi',
    description:
      'Telah anda konfirmasi, segera menuju lokasi untuk melakukan pendampingan',
    isFinished: true,
    timeStamp: '11 Oktober 2023 12:00',
    isChoosed: true,
    content: {
      name: 'Menuju Lokasi',
      description:
        'Telah anda konfirmasi, segera menuju lokasi untuk melakukan pendampingan',
    },
  },
  {
    id: '2',
    statusType: 'inlocation',
    name: 'Sedang di Lokasi',
    description: 'Sedang melakukan pendampingan di lokasi',
    isFinished: true,
    timeStamp: '11 Oktober 2023 13:00',
    isChoosed: false,
    content: {
      name: 'Sedang di Lokasi',
      description: 'Sedang melakukan pendampingan di lokasi',
    },
  },
  {
    id: '3',
    statusType: 'document-checked',
    name: 'Dokumen Diperiksa',
    description: 'Dokumen telah diperiksa dan telah sesuai',
    isFinished: true,
    timeStamp: '11 Oktober 2023 14:00',
    isChoosed: false,
    content: {
      name: 'Dokumen Diperiksa',
      description: 'Dokumen telah diperiksa dan telah sesuai',
      file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    },
  },
  {
    id: '4',
    statusType: 'video-taken',
    name: 'Video diambil',
    description: 'Video telah diambil dan telah sesuai',
    isFinished: true,
    timeStamp: '11 Oktober 2023 15:00',
    isChoosed: false,
    content: {
      name: 'Video diambil',
      description: 'Video telah diambil dan telah sesuai',
      video: 'https://youtu.be/GruTJjuBf44',
    },
  },
  {
    id: '5',
    statusType: 'photo-taken',
    name: 'Foto diambil',
    description: 'Foto telah diambil dan telah sesuai',
    isFinished: true,
    timeStamp: '11 Oktober 2023 16:00',
    isChoosed: false,
    content: {
      name: 'Foto diambil',
      description: 'Foto telah diambil dan telah sesuai',
      photo: '/images/sertifikasi/sop.png',
    },
  },
  {
    id: '6',
    statusType: 'surveyed',
    name: 'Sudah Disurvei',
    description: 'Sudah disurvei dan telah sesuai',
    isFinished: true,
    timeStamp: '11 Oktober 2023 17:00',
    isChoosed: false,
    content: {
      name: 'Sudah Disurvei',
      description: 'Sudah disurvei dan telah sesuai',
    },
  },
  {
    id: '7',
    statusType: 'finished',
    name: 'Selesai',
    description: 'Ajuan telah selesai',
    isFinished: false,
    timeStamp: '11 Oktober 2023 18:00',
    isChoosed: false,
    content: {
      name: 'Selesai',
      description: 'Ajuan telah selesai',
    },
  },
];

export default function StatusListSection() {
  const [statusData, setStatusData] = useState(STATUS);
  const setChoosedStatus = (value: string) => {
    setStatusData(
      statusData.map((status) => {
        if (status.id === value) {
          return { ...status, isChoosed: true };
        } else {
          return { ...status, isChoosed: false };
        }
      }),
    );
    chooseContent(value);
  };

  const [contentData, setContentData] = useState<StatusContentType>(
    STATUS[0].content,
  );
  const chooseContent = (value: string) => {
    setContentData(
      STATUS.find((status) => status.id === value)?.content ||
        STATUS[0].content,
    );
  };

  return (
    <div className='overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='flex flex-col max-h-[60vh] overflow-auto'>
        {statusData.map((status) => (
          <StatusTile
            key={status.id}
            id={status.id}
            statusType={status.statusType}
            name={status.name}
            description={status.description}
            isFinished={status.isFinished}
            timeStamp={status.timeStamp}
            isChoosed={status.isChoosed}
            setChoosed={setChoosedStatus}
          />
        ))}
      </div>
      <StatusContent
        name={contentData.name}
        description={contentData.description}
        file={contentData.file}
        photo={contentData.photo}
        video={contentData.video}
      />
    </div>
  );
}
