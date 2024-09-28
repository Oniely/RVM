import { Tab, Tabs } from '@/Components/Tabs';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index() {
  return (
    <AuthenticatedLayout header="Stock Inventory">
      <Head title="Stock Inventory" />

      <div className="">
        <Tabs>
          <Tab label="ACTIVITY">
            <p>This is the content of Activity.</p>
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
