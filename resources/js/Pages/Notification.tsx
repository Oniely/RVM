import { Tab, Tabs } from '@/Components/Tabs';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Notification() {
  return (
    <AuthenticatedLayout header="Notification">
      <Head title="Notification" />

      <div className="-my-2">
        <Tabs>
          <Tab label="Notifications">
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
                  <tr className="border-b hover:bg-green-100 text-t-light font-medium">
                    <td className="px-6 py-3">12-22-02</td>
                    <td className="px-6 py-3">12:00PM</td>
                    <td className="px-6 py-3">NOTIF</td>
                    <td className="px-6 py-3">RC1</td>
                    <td className="px-6 py-3">
                      <button>...</button>
                    </td>
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
