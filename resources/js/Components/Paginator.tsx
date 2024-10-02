import { Link } from '@inertiajs/react';

interface Props {
  prev: string | null;
  next: string | null;
  current: number;
  lastPage: number;
}

export default function Paginator({ prev, next, current, lastPage }: Props) {
  return (
    <div className="flex items-center justify-between mt-4">
      <Link
        href={prev!}
        disabled={!prev}
        className={`px-4 py-2 text-white bg-primary/90 rounded-lg ${
          !prev ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary'
        }`}
        preserveScroll
      >
        &laquo; Previous
      </Link>
      <span className="text-sm text-gray-700">
        Page {current} of {lastPage}
      </span>
      <Link
        href={next!}
        disabled={!next}
        className={`px-4 py-2 text-white bg-primary/90 rounded-lg ${
          !next ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary'
        }`}
        preserveScroll
      >
        Next &raquo;
      </Link>
    </div>
  );
}
