import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import AcmeLogo from '@/app/ui/acme-logo';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>

      <div className="mt-4 flex flex-grow flex-col gap-4 lg:flex-row">
        <div className="flex gap-4 bg-gray-50 rounded-lg py-10 px-6 justify-center flex-col lg:basis-2/5 lg:px-20">
          <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />

          <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Welcome to Acme.</strong>
            This is the example for the{' '}
            <a className="text-blue-500" href="https://nextjs.org/learn/">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>

          <Link
            className="inline-flex w-fit items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            href="/login"
          >
            Log in <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        <div className="p-6 lg:basis-3/5 flex items-center justify-center lg:p-20">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />

          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
