"use client";

import Link from "next/link";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  const pathname = usePathname();

  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            Artic<span className="text-purple-600">Blog</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link
            className={`text-sm font-medium hover:text-purple-600 transition-colors ease-in-out duration-300 ${
              pathname === "/" && "text-purple-600 underline"
            }`}
            href="/"
          >
            Home
          </Link>
          {user && (
            <Link
              className={`text-sm font-medium hover:text-purple-600 transition-colors ease-in-out duration-300 ${
                (pathname === "/dashboard" ||
                  pathname.includes("/dashboard")) &&
                "text-purple-600 underline"
              }`}
              href="/dashboard"
            >
              Dashboard
            </Link>
          )}
        </div>
      </div>

      {user ? (
        <div>
          <LogoutLink className="flex items-center gap-2 px-4 py-2 hover:text-red-600 transition-colors ease-in-out duration-300">
            {user.given_name}
            <ArrowRightStartOnRectangleIcon className="size-5" />
          </LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <RegisterLink className="text-sm px-4 py-2">Signup</RegisterLink>
          <LoginLink className="bg-black text-white text-sm rounded-md py-2 px-4 cursor-pointer">
            Login
          </LoginLink>
        </div>
      )}
    </nav>
  );
}
