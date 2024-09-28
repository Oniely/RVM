import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index() {
  return (
    <AuthenticatedLayout header="Transactions">
      <Head title="Transactions" />

      <div className="">
        <h1>Hello, World!</h1>
      </div>
    </AuthenticatedLayout>
  );
}
