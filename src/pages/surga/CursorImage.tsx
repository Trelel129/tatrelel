// components/CursorImage.tsx
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface CursorImageProps {
  imageStringLink: string;
}

const CursorImage = ({ imageStringLink }: CursorImageProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Image
      src={imageStringLink}
      alt='cursor'
      className='pointer-events-none fixed z-50 opacity-80'
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        width: '120px',
        height: '120px',
      }}
      width={40}
      height={40}
    />
  );
};

export default CursorImage;
