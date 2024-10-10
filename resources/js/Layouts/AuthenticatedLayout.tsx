import { PropsWithChildren, ReactNode } from 'react';
import Sidebar from '@/Components/shared/Sidebar';
import SettingDropdown from '@/Components/shared/SettingDropdown';
import NotificationDropdown from '@/Components/shared/NotificationDropdown';
import MobileNavbar from '@/Components/shared/MobileNavbar';
import { Link, usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({
  header,
  children,
}: PropsWithChildren<{ header?: string | ReactNode }>) {
  const { appName } = usePage().props;

  return (
    <div className="flex flex-row min-h-screen max-md:flex-col max-container">
      <Sidebar />
      <MobileNavbar />

      <main className="flex flex-col flex-1 min-h-screen px-4 pt-5 pb-10 sm:px-6 md:pt-12 md:px-14">
        <header className="pt-6 flexBetween md:border-t md:border-gray-200">
          <h2 className="text-4xl font-semibold leading-tight text-gray-800">
            {header || `${appName}`}
          </h2>
          <div className="gap-4 flexCenter">
            <Link
              href={route('notification')}
              className="w-6 h-6 max-md:hidden"
            >
              <img
                src="/images/notification.svg"
                alt="notification"
                className="object-cover w-full h-full"
              />
            </Link>
            <div className="w-6 h-6 max-md:hidden">
              <SettingDropdown />
            </div>
          </div>
        </header>

        <div className="py-12">{children}</div>
      </main>
    </div>
  );
}
