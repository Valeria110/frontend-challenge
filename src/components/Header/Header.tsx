"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const path = usePathname();
  return (
    <header className="w-full h-16 bg-blue-500">
      <nav className="flex items-center h-full pl-16">
        <Link
          className={`flex justify-center items-center h-full px-4 hoverable:hover:underline ${
            path === "/" ? "bg-blue-600 text-white" : "text-white/70"
          }`}
          href="/"
        >
          Все котики
        </Link>
        <Link
          className={`flex justify-center items-center h-full px-4 hoverable:hover:underline ${
            path === "/favs" ? "bg-blue-600 text-white" : "text-white/70"
          }`}
          href="favs"
        >
          Любимые котики
        </Link>
      </nav>
    </header>
  );
};
