import Head from 'next/head';
import { Inter } from '@next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Dev</title>
        <meta name="description" content="About Web Dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" h-screen">
        <Navbar />
        <p>
          .lshdgvagdfahj uhuasvdifha asdgfiasdh fasdfgasdfga sdfaysdfgas
          dfasydfa sdfasudyf asd f asdfasd fasdfa d fa df as df asd fas df asd
          fas df sd vxc v asdfasdfasdf{' '}
        </p>
      </main>
    </>
  );
}
