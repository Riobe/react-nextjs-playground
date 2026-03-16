'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Snowman', path: '/snowman-game' },
  { name: 'Refs & Effects', path: '/refs-and-effects' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="nav-bar">
      {pages.map((page) => (
        <div key={page.path}>
          <Link
            href={page.path}
            className={clsx('font-italic', {
              'font-bold': pathname === page.path,
            })}
          >
            <span>{page.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
