import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Menu, User } from 'lucide-react';

import { Button } from '@/components/ui/button';

const LandingPageNavbar = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-x-3 text-3xl font-semibold">
        <Menu className="h-8 w-8" />
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        NeuroVid
      </div>
      <div className="hidden items-center gap-x-10 lg:flex">
        <Link
          href="/"
          className="rounded-full bg-[#7320DD] px-5 py-2 text-lg font-semibold hover:bg-[#7320DD]/80"
        >
          Home
        </Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <Link href="/auth/sign-in">
        <Button className="flex gap-x-2 text-base">
          <User fill="#000" />
          Login
        </Button>
      </Link>
    </div>
  );
};

export default LandingPageNavbar;
