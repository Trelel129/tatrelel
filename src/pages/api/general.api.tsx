/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import clsx from 'clsx';
import { NextRequest } from 'next/server';

export const font = fetch(
  new URL('../../assets/AvertaStd-Semibold.woff2', import.meta.url),
).then((res) => res.arrayBuffer());

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const Averta = await font;

  const { searchParams } = new URL(req.url);

  const siteName = searchParams.get('siteName');
  const description = searchParams.get('description');
  const theme = searchParams.get('theme');
  const templateTitle = searchParams.get('templateTitle');

  const query = {
    siteName: siteName ?? 'Site Name',
    description: description ?? 'Description',
    theme: theme ?? 'dark',
    logo: `https://siphalal.vercel.app/assets/icons/siphalal-logo.svg`,
    templateTitle,
    logoWidth: 64,
    logoHeight: 64,
  };

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '4rem',
          backgroundColor: clsx(query.theme === 'dark' ? '#18181B' : '#fff'),
        }}
      >
        <div tw='flex justify-between w-full'>
          <div tw='flex gap-8 items-center'>
            <img
              style={{
                width: query.logoWidth,
                ...(query.logoHeight && { height: query.logoHeight }),
              }}
              src={query.logo}
              alt='Favicon'
            />
            <p
              style={{ fontFamily: 'Averta' }}
              tw={clsx(
                'text-6xl font-semibold',
                query.theme === 'dark' ? 'text-white' : 'text-zinc-800',
              )}
            >
              SIPHALAL
            </p>
          </div>
          <p
            style={{ fontFamily: 'Averta' }}
            tw={clsx(
              'text-3xl font-normal',
              query.theme === 'dark' ? 'text-indigo-400' : 'text-indigo-700',
            )}
          >
            siphalal.com
          </p>
        </div>

        <div tw='flex flex-col gap-8'>
          <h1
            style={{ fontFamily: 'Averta' }}
            tw={clsx(
              'text-8xl font-semibold',
              query.theme === 'dark' ? 'text-white' : 'text-black',
            )}
          >
            {query.templateTitle ? query.templateTitle : 'SIPHALAL'}
          </h1>
          <p
            style={{ fontFamily: 'Averta' }}
            tw={clsx(
              'text-3xl font-normal',
              query.theme === 'dark' ? 'text-zinc-300' : 'text-zinc-800',
            )}
          >
            {query.description}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: 'twemoji',
      fonts: [
        {
          name: 'Averta',
          data: Averta,
          weight: 600,
        },
      ],
    },
  );
}
