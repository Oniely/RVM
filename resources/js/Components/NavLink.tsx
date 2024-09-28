import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({
  active = false,
  className = '',
  children,
  ...props
}: InertiaLinkProps & { active: boolean }) {
  return (
    <Link
      {...props}
      className={
        'inline-flex justify-center items-center py-3 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
        (active && 'bg-secondary ') +
        className
      }
    >
      {children}
    </Link>
  );
}
