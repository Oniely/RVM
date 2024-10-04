import Paginator from '@/Components/Paginator';
import StockSlot from '@/Components/stock_inventory/StockSlot';
import { Tab, Tabs } from '@/Components/Tabs';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { formatTime } from '@/lib/utils';
import { History, Rice } from '@/types';
import { Head } from '@inertiajs/react';

interface Props {
  stocks: { data: Rice[] };
  histories: { data: History[]; links: any; meta: any };
}

export default function Index({ stocks, histories }: Props) {
  return (
    <AuthenticatedLayout header="Stock Inventory">
      <Head title="Stock Inventory" />

      <div className="flex items-center justify-around flex-wrap max-md:flex-col gap-6">
        {stocks.data.map((stock) => (
          <StockSlot key={stock.id} stock={stock} />
        ))}
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
                  {histories.data.map((history) => (
                    <tr
                      className="border-b hover:bg-green-100 text-t-light font-medium"
                      key={history.id}
                    >
                      <td className="px-6 py-3">
                        {history.created_at?.split(' ')[0]}
                      </td>
                      <td className="px-6 py-3">
                        {formatTime(history.created_at?.split(' ')[1]!)}
                      </td>
                      <td className="px-6 py-3">{history.recent_activity}</td>
                      <td className="px-6 py-3">{history.rice_variety}</td>
                      <td className="px-6 py-3">
                        <button>...</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Paginator
                prev={histories.links.prev}
                next={histories.links.next}
                current={histories.meta.current_page}
                lastPage={histories.meta.last_page}
              />
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
