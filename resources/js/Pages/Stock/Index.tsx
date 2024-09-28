import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index() {
  return (
    <AuthenticatedLayout header='Stock Inventory'>
      <Head title='Stock Inventory' />

      <div className=''>
        <h1>Hello, World!</h1>
      </div>
    </AuthenticatedLayout>
  );
}
