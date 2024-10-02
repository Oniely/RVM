import Slot from '@/Components/dashboard/Slot';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Rice } from '@/types';
import { Head } from '@inertiajs/react';

export default function Dashboard({ stocks }: { stocks: Rice[] }) {
  return (
    <AuthenticatedLayout header="Dashboard">
      <Head title="Dashboard" />

      <div className="py-4 md:py-8">
        <div className="mx-auto flex justify-between items-center flex-wrap max-sm:flex-col gap-6 w-[75%]">
          {stocks.map((stock) => (
            <Slot key={stock.id} stock={stock} />
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
