interface Props {
  prev: string | null;
  next: string | null;
  current: number;
  lastPage: number;
}

export default function Paginator({ prev, next, current, lastPage }: Props) {
  const handlePageChange = (url: string | null) => {
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div className="flex items-center justify-between mt-4">
      <button
        onClick={() => handlePageChange(prev)}
        disabled={!prev}
        className={`px-4 py-2 text-white bg-primary/90 rounded-lg ${
          !prev ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary'
        }`}
      >
        &laquo; Previous
      </button>

      <span className="text-sm text-gray-700">
        Page {current} of {lastPage}
      </span>

      <button
        onClick={() => handlePageChange(next)}
        disabled={!next}
        className={`px-4 py-2 text-white bg-primary/90 rounded-lg ${
          !next ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary'
        }`}
      >
        Next &raquo;
      </button>
    </div>
  );
}
