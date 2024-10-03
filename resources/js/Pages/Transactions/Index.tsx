import Paginator from '@/Components/Paginator';
import { Tab, Tabs } from '@/Components/Tabs';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { formatTime } from '@/lib/utils';
import { Transaction } from '@/types';
import { Head, Link } from '@inertiajs/react';

interface Props {
  transactions: { data: Transaction[]; links: any; meta: any };
}

export default function Index({ transactions }: Props) {
  return (
    <AuthenticatedLayout header="Transactions">
      <Head title="Transactions" />

      <div className="-my-2">
        <Tabs>
          <Tab label="HISTORY">
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
                      Payment
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Stock
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {transactions.data.map((transaction) => (
                    <tr
                      className="border-b hover:bg-green-100 text-t-light font-medium"
                      key={transaction.id}
                    >
                      <td className="px-6 py-3">
                        {transaction.created_at?.split(' ')[0]}
                      </td>
                      <td className="px-6 py-3">
                        {formatTime(transaction.created_at?.split(' ')[1]!)}
                      </td>
                      <td className="px-6 py-3">
                        {transaction.payment_method}
                      </td>
                      <td className="px-6 py-3">{transaction.rice_variety}</td>
                      <td className="px-6 py-3">{transaction.price}</td>
                      <td className="px-6 py-3">
                        <Link href={route('transactions.show', transaction.id)}>
                          {'...'}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Paginator
                prev={transactions.links.prev}
                next={transactions.links.next}
                current={transactions.meta.current_page}
                lastPage={transactions.meta.last_page}
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
