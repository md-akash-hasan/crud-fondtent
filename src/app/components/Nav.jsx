"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  let path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let Li = (
    <>
      <li className={`${path === "/" ? "border-b-2 border-cyan-500" : ""}`}>
        <Link href="/">Home</Link>
      </li>
      <li
        className={`${path === "/destinations" ? "border-b-2 border-cyan-500" : ""}`}
      >
        <Link href="/destinations">Destinations</Link>
      </li>
      <li
        className={`${path === "/booking" ? "border-b-2 border-cyan-500" : ""}`}
      >
        <Link href="/booking">My Booking</Link>
      </li>
      <li
        className={`${path === "/admin" ? "border-b-2 border-cyan-500" : ""}`}
      >
        <Link href="/admin">Admin</Link>
      </li>
      <li
        className={`${path === "/adddestination" ? "border-b-2 border-cyan-500" : ""}`}
      >
        <Link href="/destination">Add Destination</Link>
      </li>
    </>
  );
  let Pro = (
    <>
      <li
        className={`${path === "/profile" ? "border-b-2 border-cyan-500" : ""}`}
      >
        <Link href="/profile">Profile</Link>
      </li>
      <li
        className={`${path === "/login" ? "border-b-2 border-cyan-500" : ""}`}
      >
        <Link href="/login">Login</Link>
      </li>
      <li
        className={`${path === "/singup" ? "border-b-2 border-cyan-500" : ""}`}
      >
        <Link href="/singup">Sing Up</Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg ">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="font-bold ">
            <Link href="/">Wanderlast </Link>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">{Li}</ul>
        <div>
          <ul className="flex gap-5">{Pro}</ul>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{Li}</ul>
        </div>
      )}
    </nav>
  );
}
