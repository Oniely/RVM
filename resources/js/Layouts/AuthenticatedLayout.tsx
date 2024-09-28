import { PropsWithChildren, ReactNode } from 'react';
import Sidebar from '@/Components/shared/Sidebar';
import SettingDropdown from '@/Components/shared/SettingDropdown';
import NotificationDropdown from '@/Components/shared/NotificationDropdown';
import MobileNavbar from '@/Components/shared/MobileNavbar';
import { Link } from '@inertiajs/react';

export default function AuthenticatedLayout({
  header,
  children,
}: PropsWithChildren<{ header?: string | ReactNode }>) {
  return (
    <div className="flex flex-row min-h-screen max-md:flex-col">
      <Sidebar />
      <MobileNavbar />

      <main className="flex flex-col flex-1 min-h-screen px-4 pb-10 sm:px-6 pt-5 md:pt-[4.5rem] md:px-14">
        <header className="flexBetween">
          <h2 className="text-4xl font-semibold leading-tight text-gray-800">
            {header}
          </h2>
          <div className="flexCenter gap-4">
            <Link href='#' className="w-5 h-5 max-md:hidden">
              <img src="/images/notification.svg" alt="notification" className='w-full h-full object-cover' />
            </Link>
            <div className="w-5 h-5 max-md:hidden">
              <SettingDropdown />
            </div>
          </div>
        </header>
        <div className='py-12'>{children}</div>
      </main>
    </div>
  );
}
