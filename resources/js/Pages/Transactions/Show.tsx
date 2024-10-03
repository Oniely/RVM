import { Tab, Tabs } from '@/Components/Tabs';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { formatDate, formatTime } from '@/lib/utils';
import { Transaction } from '@/types';
import { Head } from '@inertiajs/react';

interface Props {
  transaction: { data: Transaction };
}

export default function TransactionDetail({ transaction }: Props) {
  return (
    <AuthenticatedLayout header="Transaction Detail">
      <Head title="Transaction Detail" />

      <div>
        <Tabs>
          <Tab label="Detail">
            <div className="flex flex-col items-start">
              <div className="inline-flex gap-1">
                <label className="text-accent font-medium">Receipt No:</label>
                <p className="font-semibold">{transaction.data.id}</p>
              </div>
              <div className="inline-flex gap-1">
                <label className="text-accent font-medium">Date:</label>
                <p className="font-semibold">
                  {formatDate(transaction.data.created_at?.split(' ')[0]!)}
                </p>
              </div>
              <div className="inline-flex gap-1">
                <label className="text-accent font-medium">Time:</label>
                <p className="font-semibold">
                  {formatTime(transaction.data.created_at?.split(' ')[1]!)}
                </p>
              </div>
              <div className="inline-flex gap-1">
                <label className="text-accent font-medium">
                  Variety of Rice:
                </label>
                <p className="font-semibold">{transaction.data.rice_variety}</p>
              </div>
              <div className="inline-flex gap-1">
                <label className="text-accent font-medium">
                  Payment Method:
                </label>
                <p className="font-semibold">
                  {transaction.data.payment_method}
                </p>
              </div>
              <div className="inline-flex gap-1">
                <label className="text-accent font-medium">Amount:</label>
                <p className="font-semibold">{transaction.data.price}</p>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </AuthenticatedLayout>
  );
}
