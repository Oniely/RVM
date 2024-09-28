import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
  return (
    <AuthenticatedLayout header="Dashboard">
      <Head title="Dashboard" />

      <div className="">
        <h1>Hello, World!</h1>
      </div>
    </AuthenticatedLayout>
  );
}
