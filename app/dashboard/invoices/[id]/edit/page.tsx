import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/edit-form';
import React from 'react';

const EditInvoice = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const [invoice, customers] = await Promise.all([fetchInvoiceById(id), fetchCustomers()]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />

      <Form invoice={invoice} customers={customers} />
    </main>
  );
};

export default EditInvoice;
