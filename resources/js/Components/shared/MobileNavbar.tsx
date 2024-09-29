import { Link, usePage } from '@inertiajs/react';
import ResponsiveNavLink from '../ResponsiveNavLink';
import { useState } from 'react';
import ApplicationLogo from '../ApplicationLogo';
import { NAV_LINKS } from '@/lib/nav_links';

export default function MobileNavbar() {
  const { user } = usePage().props.auth;

  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <>
      <div className="flex justify-between h-16 px-4 border-b sm:px-6 md:hidden">
        <div className="flex items-center shrink-0">
          <Link href="/">
            <ApplicationLogo className="block w-auto text-gray-800 fill-current h-9" />
          </Link>
        </div>
        <div className="flex items-center -me-2">
          <button
            onClick={() =>
              setShowingNavigationDropdown((previousState) => !previousState)
            }
            className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 bg-secondary"
          >
            <svg
              className="h-7 w-7"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className={
                  !showingNavigationDropdown ? 'inline-flex' : 'hidden'
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={
          (showingNavigationDropdown ? 'block' : 'hidden') + ' md:hidden'
        }
      >
        <div className="pt-2 pb-3 space-y-1">
          {NAV_LINKS.map((link, index) => {
            return (
              <ResponsiveNavLink
                href={route(link.route)}
                active={route().current(link.route)}
                key={index}
              >
                {link.name}
              </ResponsiveNavLink>
            );
          })}
        </div>

        <div className="pt-4 pb-1 border-t border-gray-200">
          <div className="px-4">
            <div className="text-base font-medium text-gray-800">
              {user.name}
            </div>
            <div className="text-sm font-medium text-gray-500">
              {user.email}
            </div>
          </div>

          <div className="mt-3 space-y-1">
            <ResponsiveNavLink href={route('profile.edit')}>
              Profile
            </ResponsiveNavLink>
            <ResponsiveNavLink method="post" href={route('logout')} as="button">
              Log Out
            </ResponsiveNavLink>
          </div>
        </div>
      </div>
    </>
  );
}
