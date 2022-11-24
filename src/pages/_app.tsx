import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <div className="mx-auto flex  w-full bg-black ">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}
