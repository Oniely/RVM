import StockSlot from '@/Components/dashboard/StockSlot';
import { Tab, Tabs } from '@/Components/Tabs';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index() {
  return (
    <AuthenticatedLayout header="Stock Inventory">
      <Head title="Stock Inventory" />

      <div className='flex items-center justify-around flex-wrap max-md:flex-col gap-6'>
        <StockSlot name='Slot 1' variety='RC1' stock={20} isAvailable />
        <StockSlot name='Slot 2' variety='RC1' stock={20} isAvailable />
        <StockSlot name='Slot 3' variety='RC1' stock={20} isAvailable />
      </div>

      <div className="mt-14">
        <Tabs>
          <Tab label="ACTIVITY">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-900 uppercase">
                  <tr className="border-b">
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Activity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Slot
                    </th>
                    <th scope="col" className="px-6 py-3" />
                  </tr>
                </thead>
                <tbody>
                  <tr
                    className="border-b hover:bg-green-100 text-t-light font-medium"
                  >
                    <td className="px-6 py-3">
                      09-03-24
                    </td>
                    <td className="px-6 py-3">
                      12:00PM
                    </td>
                    <td className="px-6 py-3">RESTOCK</td>
                    <td className="px-6 py-3">SLOT 1</td>
                    <td className="px-6 py-3">...</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab>
          <Tab label="Tab 2">
            <p>This is the content of Tab 2.</p>
          </Tab>
          <Tab label="Tab 3">
            <p>This is the content of Tab 3.</p>
          </Tab>
        </Tabs>
      </div>
    </AuthenticatedLayout>
  );
}
