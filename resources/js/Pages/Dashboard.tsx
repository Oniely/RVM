import Slot from '@/Components/dashboard/Slot';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
  return (
    <AuthenticatedLayout header="Dashboard">
      <Head title="Dashboard" />

      <div className='py-4 md:py-8'>
        <div className="mx-auto flex justify-between items-center flex-wrap max-sm:flex-col gap-6 w-[75%]">
          <Slot stockPercentage={70} slotNumber={1} status='Available' variety='RC1' stock={20} />
          <Slot stockPercentage={50} slotNumber={2} status='Available' variety='RC2' stock={20} />
          <Slot stockPercentage={25} slotNumber={3} status='Available' variety='RC3' stock={20} />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
