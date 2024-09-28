import { NAV_LINKS } from '@/lib/nav_links';
import NavLink from '../NavLink';
import { Link } from '@inertiajs/react';

export default function Sidebar() {
  return (
    <aside className="sticky top-0 left-0 z-20 flex flex-col items-center justify-between h-screen pt-16 pb-5 overflow-auto max-md:hidden bg-primary w-28">
      <div className="flex flex-col flex-1 w-full gap-6">
        <Link
          href={route('profile.edit')}
          className="inline-flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-secondary" />
        </Link>

        {NAV_LINKS.map((link) => {
          return (
            <NavLink
              href={route(link.route)}
              active={route().current(link.route)}
              key={link.name}
            >
              <img
                src={link.img}
                alt={link.name}
                className={`w-12 h-12 ${
                  route().current(link.route) && 'filter contrast-50'
                }`}
              />
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}
