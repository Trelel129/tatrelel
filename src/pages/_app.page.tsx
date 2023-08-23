import {
  QueryClient,
  QueryClientProvider,
  QueryOptions,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import Router from 'next/router';
import nProgress from 'nprogress';
import * as React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'atropos/css';

import '@/styles/nprogress.css';
import '@/styles/globals.css';

import api from '@/lib/axios';

import DismissableToast from '@/components/DismissableToast';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await api.get(`${queryKey?.[0]}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ParallaxProvider>
        <AnimatePresence mode='wait'>
          <DismissableToast />
          <Component key={router.route} {...pageProps} />
          <ReactQueryDevtools />
        </AnimatePresence>
      </ParallaxProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
