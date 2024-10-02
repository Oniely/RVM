import Slot from '@/Components/dashboard/Slot';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { getPercentage } from '@/lib/utils';
import { Head } from '@inertiajs/react';

export default function Dashboard({ stocks }: any) {
  return (
    <AuthenticatedLayout header="Dashboard">
      <Head title="Dashboard" />

      <div className="py-4 md:py-8">
        <div className="mx-auto flex justify-between items-center flex-wrap max-sm:flex-col gap-6 w-[75%]">
          {stocks.map((stock: any) => (
            <Slot
              key={stock.id}
              stockPercentage={getPercentage(stock.current_stock)}
              slotNumber={stock.id}
              status="Available"
              variety={stock.variety}
              stock={stock.full_stock}
            />
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
