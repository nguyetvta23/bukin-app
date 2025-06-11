"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "@/assets/images/logo.avif";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import destroySession from "@/app/actions/destroySession";
import { toast } from "react-toastify";
import checkAuth from "@/app/actions/checkAuth";
import { useAuth } from "@/context/authContext";
const Header = () => {
  const router = useRouter();

  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = async () => {
    const { success, error } = await destroySession();

    if (success) {
      setIsAuthenticated(false);
      router.push("/login");
    } else {
      toast.error(error);
    }
  };
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <Link href={"/"}>
                  <Image
                    className="h-8 w-auto"
                    src={logo}
                    alt="Your Company"
                    priority={true}
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    href={`/`}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Services
                  </Link>
                  {/* <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Booking
                  </Link> */}
                  {isAuthenticated && (
                    <>
                      <Link
                        href={'/service/add'}
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        Add room
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-2 right-0 flex gap-2 items-center pr-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <Link href={"/signup"}>
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                >
                  <FaSignInAlt />
                </button>
              </Link> */}
              {!isAuthenticated && (
                <>
                  <Link href={`/signin`}>
                    <button
                      type="button"
                      className="relative rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white "
                    >
                      <FaUser />
                    </button>
                  </Link>
                </>
              )}
              {isAuthenticated && (
                <>
                  <Link
                    href={`/my-rooms`}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    aria-current="page"
                  >
                    My rooms
                  </Link>
                </>
              )}
              {isAuthenticated && (
                <>
                  <Link
                    href={`/bookings`}
                    className="rounded-md rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    aria-current="page"
                  >
                    Bookings
                  </Link>
                </>
              )}
              {isAuthenticated && (
                <>
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="relative rounded-full rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <FaSignOutAlt />
                  </button>
                </>
              )}
              {/* 
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <img
                      className="size-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              My Rooms
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
