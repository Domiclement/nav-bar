import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import npm from '../../public/npm.svg';

export default function Navbar() {
  return (
    <div className="bg-yellow-500">
      <div className="p-5 flex justify-between">
        <div className="flex space-x-5 items-center">
          <Link href={`/`}>
            <Image src={npm} height={50} width={50} alt="npm image" priority />
          </Link>

          <h1 className="font-bold text-violet-600">NPM</h1>
        </div>

        <ul className="flex space-x-4 cursor-pointer items-center">
          <Link href={`https://youtube.com`}>
            <li className="hover:underline">Docs</li>
          </Link>
          <Link href={`/blog`}>
            <li className="hover:underline">Blog</li>
          </Link>
          <li className="hover:underline">About</li>
        </ul>
      </div>
    </div>
  );
}
